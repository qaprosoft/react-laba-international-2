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
    return JSON.stringify(serialized);
  }

  wakeFrom(serialized) {
    const serializedObj = JSON.parse(serialized);
    return new this.constructor(serializedObj);
  }
}

class UserDTO extends Serializable {
  constructor({firstName, lastName, phone, birth}) {
    super();

    this.firstName = firstName;
    this.lastName = lastName;
    this.phone = phone;
    this.birth = new Date(birth);
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

const serialized = tolik.serialize();
tolik = null;

const resurrectedTolik = new UserDTO({}).wakeFrom(serialized);

console.log(resurrectedTolik instanceof UserDTO);
resurrectedTolik.printInfo();

class Post extends Serializable {
  constructor({content, date, author}) {
    super();

    this.content = content;
    this.date = date;
    this.author = author;
  }
}

try {
  new Post({}).wakeFrom(serialized);
} catch (error) {
  console.error(error.message);
}
