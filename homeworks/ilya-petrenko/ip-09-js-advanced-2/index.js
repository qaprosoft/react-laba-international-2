function isNumber(str) {
  return /^NaN$|^(-)?Infinity$|^(\+|-)?\d*\.?\d+$/.test(str);
}

function isDate(str) {
  return /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/.test(str);
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


// Class FunctionProp
class FunctionProp extends Serializable {
  constructor({func: func, test} = {}) {
    super();
    this.funct = func;
    this.test = test;
  }
}

const functionPropObject = new FunctionProp({
  func: function () {
    alert('This is a function');
  },
  test: null,
});

// console.log(functionPropObject.serialize()); // Error

// Class NonEnumerable
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
  nonEnum: 'non-enumerable',
  test: 500,
});

//console.log(nonEnumerableObject.serialize()); // Error

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

// UserDTO
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
  phone: '2020327',
  birth: new Date('1999-01-02'),
  address: {
    streetAddress: 'Baker Street',
    city: 'London',
    state: 'London',
    country: 'UK',
  },
});

console.log(tolik.printInfo());
const serialized = tolik.serialize();
console.log(serialized);
const resurrectedTolik = new UserDTO().wakeFrom(serialized);

console.log(resurrectedTolik instanceof UserDTO); // true
console.log(resurrectedTolik.printInfo());

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
    ['Anatoliy', 'Nashovich'],
    [111, 222],
    [null, NaN],
  ],
  date: null,
  author: {
    firstName: 'Ilya',
    lastName: 'Petrenko',
    birth: new Date(2003, 5, 5),
  },
});

const serializedPost = testPost.serialize();
console.log(serializedPost);
const resurrectedPost = new Post().wakeFrom(serializedPost);
console.log(resurrectedPost);
console.log(new Post().wakeFrom(serialized));
