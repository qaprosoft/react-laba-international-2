// ---- Helper functions
function isNumber(string) {
  return /^NaN$|^(-)?Infinity$|^(\+|-)?\d*\.?\d+$/.test(string);
}

function isDate(string) {
  return /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/.test(string);
}

function replacer(_, value) {
  return Number.isNaN(value) || value === -Infinity || value === Infinity
    ? String(value)
    : value;
}

function parser(_, value) {
  return isNumber(value)
    ? Number(value)
    : isDate(value)
    ? new Date(value)
    : value;
}

class Serializable {
  constructor() {
    if (new.target === Serializable)
      throw new Error("Abstract class Serializable can't be instantiated");
  }

  serialize() {
    let serialized = `{class:${this.constructor.name}`;
    for (const key of Object.getOwnPropertyNames(this)) {
      if (!this.propertyIsEnumerable(key))
        throw new Error(`Error: property "${key}" is not enumerable`);
      if (typeof this[key] === 'function')
        throw new Error(`Error: property "${key}" is a function`);
      serialized += `,"${key}":${JSON.stringify(this[key], replacer)}`;
    }
    return serialized + '}';
  }

  wakeFrom(serialized) {
    const classRegex = /class:\w+,/g;
    let serializedCopy = serialized;
    const serializedClass = serializedCopy
      .match(classRegex)[0]
      .replace('class:', '')
      .replace(',', '');
    if (serializedClass === this.constructor.name) {
      serializedCopy = serializedCopy.replace(classRegex, '');
      Object.assign(this, JSON.parse(serializedCopy, parser));
      return this;
    } else {
      throw new Error(
        `Error: serialized string doesn't contain data for ${this.constructor.name} class`,
      );
    }
  }
}

// console.log(new Serializable()); // Error is thrown

// ------ Examples
// 1. Class with function property
class FunctionProp extends Serializable {
  constructor({funct, test} = {}) {
    super();
    this.funct = funct;
    this.test = test;
  }
}

const functionPropObject = new FunctionProp({
  funct: function () {
    alert('This is a function');
  },
  test: null,
});

// console.log(functionPropObject.serialize()); // Error is thrown

// 2. Class with non enumerable data
class NonEnumerable extends Serializable {
  constructor({nonEnum, test} = {}) {
    super();
    Object.defineProperty(this, 'nonEnum', {
      enumerable: false,
      writable: true,
    });
    this.nonEnum = nonEnum;
    this.test = test;
  }
}

const nonEnumerableObject = new NonEnumerable({
  nonEnum: 'This is a non-enumerable property',
  test: 1234,
});

//console.log(nonEnumerableObject.serialize()); // Error is thrown

// 2. Class with enumerable data containing: array, string, numbers, Date
class TestDataTypes extends Serializable {
  constructor({array, string, date} = {}) {
    super();
    this.array = array;
    this.string = string;
    this.date = date;
  }
}

const testDataTypesObject = new TestDataTypes({
  array: [123, 1235.5, +0, -0, NaN, null, -Infinity, Infinity],
  string: 'This is a string',
  date: new Date(1980, 6, 7, 8, 23, 40),
});

let serializedDataTypesObj = testDataTypesObject.serialize();
console.log(serializedDataTypesObj);
const deserialized = new TestDataTypes().wakeFrom(serializedDataTypesObj);
console.log(deserialized);
console.log(deserialized instanceof TestDataTypes); // true
console.log(Array.isArray(deserialized.array)); // true
console.log(deserialized.date instanceof Date); // true

// 3. Classes with object properties
class UserDTO extends Serializable {
  constructor({firstName, lastName, phone, birth, address} = {}) {
    super();
    this.firstName = firstName;
    this.lastName = lastName;
    this.phone = phone;
    this.birth = birth;
    this.address = address;
  }

  printInfo() {
    return `${this.firstName[0]}. ${this.lastName} - ${
      this.phone
    }, ${this.birth.toISOString()}`;
  }
}

let tolik = new UserDTO({
  firstName: 'Anatoliy',
  lastName: 'Nashovich',
  phone: '+1 212-456-7890',
  birth: new Date('1999-01-02'),
  address: {
    streetAddress: '123 Main Street',
    city: 'New York',
    state: 'NY',
    country: 'USA',
  },
});

console.log(tolik.printInfo());
const serializedUser = tolik.serialize();
console.log(serializedUser);
const resurrectedTolik = new UserDTO().wakeFrom(serializedUser);
console.log(resurrectedTolik);
console.log(resurrectedTolik instanceof UserDTO); // true
console.log(tolik.printInfo() === resurrectedTolik.printInfo()); // true

class Post extends Serializable {
  constructor({content, date, author} = {}) {
    super();
    this.content = content;
    this.date = date;
    this.author = author;
  }
}

const testPost = new Post({
  content: [
    ['hello', 'world'],
    [123, 456],
    [null, NaN],
  ],
  date: null,
  author: {
    firstName: 'John',
    lastName: 'Smith',
    birth: new Date(1970, 05, 05),
  },
});

const serializedPost = testPost.serialize();
console.log(serializedPost);
const resurrectedPost = new Post().wakeFrom(serializedPost);
console.log(resurrectedPost);
console.log(new Post().wakeFrom(serializedUser)); // throw an error because the serialized line doesn't contain data for Post class
