class Serializable {
  serialize() {
    const serializedData = {};

    for (const prop in this) {
      if (this[prop] !== null && this[prop] !== undefined) {
        const propType = typeof this[prop];
        if (
          propType === 'object' ||
          propType === 'number' ||
          propType === 'string'
        ) {
          serializedData[prop] = this[prop];
        } else if (propType === 'boolean') {
          serializedData[prop] = this[prop] ? true : false;
        } else if (this[prop] instanceof Date) {
          serializedData[prop] = this[prop].toISOString();
        }
      }
    }

    return JSON.stringify(serializedData);
  }

  wakeFrom(serialized) {
    const data = JSON.parse(serialized);
    const instance = new this.constructor();

    for (const prop in data) {
      const propType = typeof instance[prop];
      if (
        propType === 'object' ||
        propType === 'number' ||
        propType === 'string'
      ) {
        instance[prop] = data[prop];
      } else if (propType === 'boolean') {
        instance[prop] = !!data[prop];
      } else if (instance[prop] instanceof Date) {
        instance[prop] = new Date(data[prop]);
      }
    }

    return instance;
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

class Post extends Serializable {
  constructor({content, date, author}) {
    super();

    this.content = content;
    this.date = date;
    this.author = author;
  }
}

let tolik = new UserDTO({
  firstName: 'Anatoliy',
  lastName: 'Nashovich',
  phone: '2020327',
  birth: new Date('1999-01-02'),
});

tolik.printInfo();

const serialized = tolik.serialize();
tolik = null;

const resurrectedTolik = new UserDTO().wakeFrom(serialized);

console.log(resurrectedTolik instanceof UserDTO);
console.log(resurrectedTolik.printInfo());

console.log(new Post().wakeFrom(serialized));
