class Serializable {
  serialize() {
    const serialized = {};
    for (const prop in this) {
      if (this.hasOwnProperty(prop)) {
        const value = this[prop];
        const type = typeof value;
        switch (type) {
          case 'null':
          case 'object':
          case 'number':
          case 'string':
          case 'Date':
            serialized[prop] = value;
            break;

          default:
            throw new TypeError(`Unsupported data type: ${type}`);
        }
      }
    }
    return JSON.stringify(serialized, this.hasInfinityOrNaN);
  }

  wakeFrom(serialized) {
    const serializedObj = JSON.parse(serialized, this.customReviver);
    const instance = new this.constructor(serializedObj);
    return instance;
  }

  hasInfinityOrNaN(key, value) {
    if (value === Infinity) {
      return 'Infinity';
    } else if (Number.isNaN(value)) {
      return 'NaN';
    } else if (value === -Infinity) {
      return '-Infinity';
    }
    return value;
  }

  customReviver(key, value) {
    if (
      typeof value === 'string' &&
      /^\d{4}-[01]\d-[0-3]\dT[012]\d(?::[0-6]\d){2}\.\d{3}Z$/.test(value)
    ) {
      const correctParsedDate = new Date(value);
      return correctParsedDate;
    } else if (typeof value === 'string' && value === 'Infinity') {
      value = Infinity;
    }
    return value;
  }
}

class UserDTO extends Serializable {
  constructor({firstName, lastName, phone, birth}) {
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

let oleg = new UserDTO({
  firstName: 'Oleg',
  lastName: Infinity,
  phone: -5 / 0,
  birth: null,
});

const serialized = oleg.serialize();
console.log(serialized);
oleg = null;

const resurrectedOleg = new UserDTO({}).wakeFrom(serialized);
console.log(resurrectedOleg instanceof UserDTO);


// const serialized = tolik.serialize();
// console.log(serialized)
// tolik = null;

// const resurrectedTolik = new UserDTO({}).wakeFrom(serialized);

// console.log(resurrectedTolik instanceof UserDTO);

// console.log(resurrectedTolik)
// resurrectedTolik.printInfo();

class Post extends Serializable {
  constructor(
    {content = '', date = '', author = ''} = {
      content: '',
      date: '',
      author: '',
    },
  ) {
    super();

    this.content = content;
    this.date = date;
    this.author = author;
  }
}

// console.log(new Post().wakeFrom(serialized));

try {
  new Post({}).wakeFrom(serialized);
} catch (error) {
  console.error(error.message);
}
