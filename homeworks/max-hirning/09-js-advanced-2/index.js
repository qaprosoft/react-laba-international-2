'use strict'

class CustomJSONParser {
  constructor(jsonString) {
    this.parsedObject = jsonString;
  }
  
  parseValue(value) {
    if (Array.isArray(value)) {
      return value.map(item => this.parseValue(item));
    } else if (typeof value === 'object' && value !== null) {
      for (const key in value) {
        value[key] = this.parseValue(value[key]);
      }
      return value;
    } else if (typeof value === 'string') {
      if (value === '-Infinity') {
        return -Infinity;
      } else if (value === 'Infinity') {
        return Infinity;
      } else if (value === 'NaN') {
        return NaN;
      } else if (/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/.test(value)) {
        return new Date(value);
      }
    }
    return value;
  }
  
  parse() {
    this.parsedObject = this.parseValue(this.parsedObject);
    return this.parsedObject;
  }
}

class Serializable {
  constructor() {}

  serialize() {
    return JSON.stringify(
      {
        __class__: this.constructor.name, // safe children class name
        ...this,
      },
      (key, value) => {
        if (value instanceof Function || value instanceof Symbol || value instanceof Error) { // check if our value pass our condition
          throw new Error('Non-serializable property found');
        }
        if (typeof value === 'number' && (isNaN(value) || !isFinite(value))) {
          return value.toString();
        }
        return value;
      }
    );
  }

  wakeFrom(serialized) {
    const data = JSON.parse(serialized);
    if (data && data.__class__) {
      if(data.__class__ === this.constructor.name) { // check if our data children class name match our children class name
        const customParser = new CustomJSONParser(data.data);
        const parsedObject = customParser.parse();
        return new this.constructor(parsedObject);
      } else {
        throw new Error('Invalid class data in the serialized string');
      }
    } else {
      throw new Error('Invalid serialized data');
    }
  }
  
}

class UserDTO extends Serializable {
  constructor(options) {
    super();
    
    this.data = options;
  }
}

const obj = {
  name: "Max",
  arr: [
    308,
    -Infinity,
    NaN,
    -0,
    0,
    {
      date: new Date(),
      arr: [new Date, Infinity, "Hello world"]
    },
    [
      new Date(),
      {
        isAdmin: false,
      }
    ]
  ]
}

let tolik = new UserDTO(obj);

const serialized = tolik.serialize();
tolik = null;
console.log(obj); // for compare parent obj and it's replica(in browser console it's more easy than in terminal)
const resurrectedTolik = new UserDTO().wakeFrom(serialized);
console.log(resurrectedTolik); // for compare parent obj and it's replica(in browser console it's more easy than in terminal)
console.log(resurrectedTolik instanceof UserDTO); // true

class Post extends Serializable {
  constructor(options) {
    super();

    this.content = options?.content;
    this.date = options?.date;
    this.author = options?.author;
  }
}

console.log(new Post().wakeFrom(serialized)); // will be error  'Invalid class data in the serialized string'