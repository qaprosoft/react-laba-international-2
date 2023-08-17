class Serializable {
  serialize() {
    const serializedData = {
      _type: this.constructor.name,
      _data: this.#serializeData(this),
    };
    return JSON.stringify(serializedData, (_, value) => {
      if (typeof value === 'number' && isNaN(value)) return 'NaN';
      if (value === Infinity) return 'Infinity';
      if (value === -Infinity) return '-Infinity';
      return value;
    });
  }

  wakeFrom(serialized) {
    const parsedData = JSON.parse(serialized, (_, value) => {
      if (value === 'NaN') return NaN;
      if (value === 'Infinity') return Infinity;
      if (value === '-Infinity') return -Infinity;
      return value;
    });
    if (parsedData._type !== this.constructor.name)
      throw new Error('Incompatible type of deserialization');

    const data = this.#deserializeData(parsedData._data);
    for (const key in data) this[key] = data[key];

    return this;
  }

  #serializeData(data) {
    if (data === null || ['number', 'string'].includes(typeof data)) {
      return data;
    } else if (Array.isArray(data)) {
      return data.map(item => this.#serializeData(item));
    } else if (data instanceof Date) {
      return {_date: data.getTime()};
    } else if (typeof data === 'object') {
      const serializedObj = {};
      for (const key in data) {
        serializedObj[key] = this.#serializeData(data[key]);
      }
      return serializedObj;
    }
  }

  #deserializeData(data) {
    if (data === null || ['number', 'string'].includes(typeof data)) {
      return data;
    } else if (Array.isArray(data)) {
      return data.map(item => this.#deserializeData(item));
    } else if (typeof data === 'object') {
      if (data._date !== undefined) return new Date(data._date);

      const deserializedObj = {};
      for (const key in data) {
        deserializedObj[key] = this.#deserializeData(data[key]);
      }
      return deserializedObj;
    }
  }
}

// Usage examples
// Serelization & deserialization
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

tolik.printInfo(); // A. Nashovich - 2020327, 1999-01-02T00:00:00.000Z

let serialized = tolik.serialize();
console.log(serialized);
tolik = null;

const resurrectedTolik = new UserDTO().wakeFrom(serialized);

console.log(resurrectedTolik instanceof Serializable); // true
resurrectedTolik.printInfo(); // A. Nashovich - 2020327, 1999-01-02T00:00:00.000Z

// Attempt to wake from a serialized line of other class throws an exception
class Post extends Serializable {
  constructor({content, date, author} = {}) {
    super();

    this.content = content;
    this.date = date;
    this.author = author;
  }
}

try {
  new Post().wakeFrom(serialized); // Error: Incompatible type of deserialization
} catch(e) {
  console.log(e.message)
}

// NaN as well as Infinities are not lost after the serialization, -0 is turned to 0
let testPost = new Post({
  content: NaN,
  date: -Infinity,
  author: -0,
});

serialized = testPost.serialize();
console.log(serialized);
testPost = null;

console.log(new Post().wakeFrom(serialized));