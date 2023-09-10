class Serializable {
  serialize() {
    const properties = {classname: this.constructor.name};
    for (const key in this) {
      if (this.hasOwnProperty(key)) {
        properties[key] = this[key];
      }
    }

    return JSON.stringify(properties, (key, value) => {
      switch (value) {
        case value === null:
          return 'null';
        case typeof value === 'number' && value === infinity:
          return 'Infinity';
        case typeof value === 'number' && value === -infinity:
          return '-Infinity';
        case isNaN(value):
          return 'NaN';
        default:
          return value;
      }
    });
  }

  wakeFrom(serial) {
    const classname = serial.match(this.constructor.name)
      ? serial.match(this.constructor.name)[0]
      : null;
    if (classname === this.constructor.name) {
      const properties = JSON.parse(serial, (key, value) => {
        switch (value) {
          case typeof value === 'string' &&
            /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/.test(value):
            return new Date(value);
          case value === 'Infinity':
            return Infinity;
          case value === '-Infinity':
            return -Infinity;
          case value === 'Nan':
            return NaN;
          case value === 'null':
            return null;
          default:
            return value;
        }
      });
      const instance = new this.constructor({});

      for (const key in properties) {
        instance[key] = properties[key];
      }

      return instance;
    } else {
      throw new Error('Invalid serial');
    }
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
      `${this.firstName[0]}. ${this.lastName} - ${this.phone}, ${this.birth}`,
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

const serializedUser = tolik.serialize();
console.log(serializedUser);
tolik = null;

const resurrectedTolik = new UserDTO({}).wakeFrom(serializedUser);
console.log(resurrectedTolik.classname);
console.log(resurrectedTolik instanceof UserDTO); // true
console.log(resurrectedTolik.printInfo()); // A. Nashovich - 2020327, 1999-01-02T00:00:00.000Z
resurrectedTolik.printInfo();
class Post extends Serializable {
  constructor({content, date, author}) {
    super();

    this.content = content;
    this.date = date;
    this.author = author;
  }
}

console.log(new Post({}).wakeFrom(serializedUser));
