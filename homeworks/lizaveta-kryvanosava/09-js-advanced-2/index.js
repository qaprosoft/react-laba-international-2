class Serializable {
  constructor() {
    if (this.constructor == Serializable) {
      throw new Error('Object of Abstract Class cannot be instantiated');
    }
  }

  serialize() {
    checkNonEnumerableProps(this);

    return JSON.stringify(
      {
        object: this,
        className: this.constructor.name,
      },
      (_, value) => {
        if (typeof value === 'number' || value === null) {
          return Object.is(value, -0) ? '-0' : `${value}`;
          // Object.is(value, -0) - to check if zero is negative
        }
        return value;
      },
    );
  }

  wakeFrom(string) {
    const parsedString = JSON.parse(string, (_, value) => {
      if (!isNaN(value)) {
        return +value;
      }

      switch (value) {
        case 'NaN':
          return NaN;
        case 'null':
          return null;
      }

      return value;
    });
    const object = parsedString.object;

    checkClassName(parsedString, this.constructor);
    restoreDate(object);

    return Object.assign(this, object);
  }
}
class UserDTO extends Serializable {
  constructor({firstName, lastName, phone, birth} = {}) {
    super();
    this.firstName = firstName;
    this.lastName = lastName;
    this.phone = phone;
    this.birth = birth;
  }

  printInfo() {
    console.log(
      `${this.firstName[0]}. ${this.lastName} - ${
        this.phone
      }, ${this.birth.toISOString()}`,
    );
  }
}

class Post extends Serializable {
  constructor({content, date, author} = {}) {
    super();

    this.content = content;
    this.date = date;
    this.author = author;
  }
}

let tolik = new UserDTO({
  firstName: 'Anatoliy',
  lastName: 'Nashovich',
  phone: 0,
  birth: new Date('1999-01-02'),
});

tolik.printInfo(); //A. Nashovich - 2020327, 1999-01-02T00:00:00.000Z
const serialized = tolik.serialize();
tolik = null;

const resurrectedTolik = new UserDTO().wakeFrom(serialized);

console.log(resurrectedTolik instanceof UserDTO); // true
resurrectedTolik.printInfo(); // A. Nashovich - 2020327, 1999-01-02T00:00:00.000Z

const originalPost = new Post({
  content: {
    header: 'header',
    likes: 100,
    rating: null,
    notANumber: NaN,
    negativeInf: -Infinity,
    Inf: Infinity,
    negativeZero: -0,
  },
  date: new Date('2000-08-24'),
  author: ['Liza', 'Alex', {helper: 'Kosha'}],
});

const serializedPost = originalPost.serialize();
console.log(serializedPost);

const resurrectedPost = new Post().wakeFrom(serializedPost);
console.log(resurrectedPost);

// console.log(new Post().wakeFrom(serialized));

// throw an error because the srialized line does contain data for User class

function checkNonEnumerableProps(object = this) {
  for (let prop in object) {
    if (!object.propertyIsEnumerable(prop)) {
      throw new Error("Can's serialize non-enumerable properties");
    }

    if (Array.isArray(object[prop])) {
      object[prop].forEach(element => checkNonEnumerableProps(element));
    }

    if (typeof object[prop] === 'object') {
      checkNonEnumerableProps(object[prop]);
    }
  }
}

function checkClassName(object, constructor) {
  if (object.className !== constructor.name) {
    throw new Error('Wrong serialized string or class');
  }
}

function restoreDate(object) {
  for (let prop in object) {
    if (Array.isArray(object[prop])) {
      for (let element of object[prop]) restoreDate(element);
    }

    if (isObject(prop)) restoreDate(object[prop]);

    if (isDate(object[prop])) {
      object[prop] = new Date(object[prop]);
    }
  }
}

function isDate(string) {
  return /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/.test(string);
}

function isObject(prop) {
  return (
    typeof this[prop] === 'object' &&
    !isDate(this[prop]) &&
    this[prop] !== null &&
    !Array.isArray(this[prop])
  );
}
