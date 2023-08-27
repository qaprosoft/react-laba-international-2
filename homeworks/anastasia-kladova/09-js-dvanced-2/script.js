class Serializable {
  serialize() {
    if (this instanceof Serializable) {
      const serializedObj = JSON.stringify(
        {
          ...this,
          className: this.constructor.name,
        },
        jsonReplacer,
      );

      return serializedObj;
    }
  }

  wakeFrom(serialized) {
    const objToWakeUp = JSON.parse(serialized, jsonReviver);
    checkClassName(objToWakeUp, this.constructor);
    wakeUpProp(objToWakeUp);
    return Object.assign(this, objToWakeUp);
  }
}

//helpers
function jsonReplacer(_, value) {
  if (typeof value === 'number' || value === null) {
    return Object.is(value, -0) ? '-0' : String(value);
  }
  return value;
}

function jsonReviver(_, value) {
  if (!isNaN(value)) return +value;

  switch (value) {
    case 'NaN':
      return NaN;
    case 'null':
      return null;
    case 'Infinity':
      return Infinity;
    case '-Infinity':
      return -Infinity;
  }

  return value;
}

function isPropArray(prop) {
  return Array.isArray(prop);
}

function isDate(string) {
  if (typeof string === 'string') {
    const date = new Date(string);
    return date instanceof Date && !isNaN(date);
  }
}

function isObject(prop) {
  return (
    typeof prop === 'object' &&
    prop !== null &&
    !isPropArray(prop) &&
    !isDate(prop)
  );
}

function checkIsPropEnumerable(obj, prop) {
  if (!obj.propertyIsEnumerable(prop)) {
    throw new Error('Only enumerable props to be processed');
  }
}

function checkClassName(object, constructor) {
  if (object.className !== constructor.name)
    throw new Error("Can't wake up a wrong class");
}

function wakeUpProp(object) {
  for (let prop in object) {
    if (isPropArray(object[prop])) {
      const array = object[prop];
      array.forEach(element => wakeUpProp(element));
    }

    if (isObject(object[prop])) structuredClone(object[prop]);

    if (isDate(object[prop])) {
      object[prop] = new Date(object[prop]);
    }
  }
}

//examples
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

let tolik = new UserDTO({
  firstName: 'Anatoliy',
  lastName: 'Nashovich',
  phone: '2020327',
  birth: new Date('1999-01-02'),
});

tolik.printInfo(); //A. Nashovich - 2020327, 1999-01-02T00:00:00.000Z

const serialized = tolik.serialize();
tolik = null;

const resurrectedTolik = new UserDTO().wakeFrom(serialized);

console.log(resurrectedTolik instanceof UserDTO); // true
console.log(resurrectedTolik.printInfo()); // A. Nashovich - 2020327, 1999-01-02T00:00:00.000Z

class Post extends Serializable {
  constructor({content, date, author} = {}) {
    super();

    this.content = content;
    this.date = date;
    this.author = author;
  }
}

//console.log(new Post().wakeFrom(serialized));
// throw an error because the srialized line does contain data for User class

const testsPost = new Post({
  content: {
    number: 1,
    null: null,
    nan: NaN,
    infinity: Infinity,
    negInfinity: -Infinity,
    negZero: -0,
  },
  date: new Date('2023-08-27'),
  author: ['Anastasia', 'Kladova'],
});

const serializedTestsPost = testsPost.serialize();
const wakeUpedTestsPost = new Post().wakeFrom(serializedTestsPost);

console.log(serializedTestsPost);
console.log(wakeUpedTestsPost);
