class Serializable {
  serialize() {
    if (this instanceof Serializable) {
      const object = {};
      for (const key in this) {
        if (
          this[key] !== undefined &&
          this[key] !== null &&
          this.hasOwnProperty(key)
        ) {
          object[key] = this[key];
        }
      }
      return JSON.stringify(object, this.notANumToString);
    }
  }

  wakeFrom(serializedObject) {
    if (this instanceof Serializable) {
      const object = JSON.parse(serializedObject, this.dateToDate);
      const objectKeys = Object.keys(object);
      const constructorKeys = Object.keys(this);
      for (let key of objectKeys) {
        if (!constructorKeys.includes(key)) {
          throw new Error(`Not instance of ${this.constructor.name}`);
        }
      }
      return new this.constructor(object);
    }
  }

  notANumToString(_, value) {
    if (value === Infinity) {
      return 'Infinity';
    } else if (value === -Infinity) {
      return '-Infinity';
    } else if (value !== value) {
      return 'NaN';
    }
    return value;
  }

  dateToDate(_, value) {
    if (
      'string' === typeof value &&
      /^\d{4}-[01]\d-[0-3]\dT[012]\d(?::[0-6]\d){2}\.\d{3}Z$/.test(value)
    ) {
      const date = new Date(value);
      return date;
    } else if ('string' === typeof value && value === 'Infinity') {
      value = Infinity;
    }
    return value;
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
  constructor({content, date, author}) {
    super();

    this.content = content;
    this.date = date;
    this.author = author;
  }
}

console.log(new Post().wakeFrom(serialized));
// throw an error because the srialized line does contain data for User class
