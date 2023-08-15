class Serializable {
  serialize() {
    const props = {};
    for (const key in this) {
      if (
        this[key] !== undefined &&
        this[key] !== null &&
        this.hasOwnProperty(key)
      ) {
        props[key] = this[key];
      }
    }
    return JSON.stringify(props);
  }

  wakeFrom(serialized) {
    const props = JSON.parse(serialized);
    const instance = new this.constructor();

    for (const key in props) {
      instance[key] = props[key];
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

const tolik = new UserDTO({
  firstName: 'Anatoliy',
  lastName: 'Nashovich',
  phone: '2020327',
  birth: new Date('1999-01-02'),
});

tolik.printInfo();

const serialized = tolik.serialize();
const resurrectedTolik = new UserDTO().wakeFrom(serialized);

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
  new Post().wakeFrom(serialized);
} catch (error) {
  console.error(error.message);
}
