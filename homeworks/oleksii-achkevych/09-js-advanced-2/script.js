class Serializable {
  constructor() {
    if (!Serializable._subclasses) {
      Serializable._subclasses = new Set();
    }
    Serializable._subclasses.add(this.constructor);
  }

  serialize() {
    return JSON.stringify(this, (key, value) => {
      if (typeof value === 'function' || value === undefined) {
        return undefined;
      }

      if (value instanceof Date) {
        return { _type: 'Date', _value: value.toISOString() };
      }

      if (typeof value === 'number' && (isNaN(value) || !isFinite(value))) {
        return { _type: 'Number', _value: String(value) };
      }

      return value;
    });
  }

  static wakeFrom(serialized) {
    const data = JSON.parse(serialized);
    const className = data._className;

    const classConstructor = [...Serializable._subclasses].find(
      constructor => constructor.name === className
    );

    if (classConstructor) {
      const instance = new classConstructor(data);

      if (instance instanceof Serializable) {
        Object.keys(data).forEach(key => {
          if (data[key] && data[key]._type === 'Date') {
            instance[key] = new Date(data[key]._value);
          } else if (typeof data[key] === 'string' && /\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z/.test(data[key])) {
            instance[key] = new Date(data[key]);
          }
        });
      }
      return instance;
    } else {
      throw new Error(`Unknown class: ${className}`);
    }
  }
}


//example with UserDTO
class UserDTO extends Serializable {
  constructor({ firstName, lastName, phone, birth, array }) {
    super();
    this.firstName = firstName;
    this.lastName = lastName;
    this.phone = phone;
    this.birth = birth; 
    this.array = array; 
    this._className = this.constructor.name;
  }

  printInfo() {
    console.log(
      `${this.firstName[0]}. ${this.lastName} - ${
        this.phone
      }, ${this.birth}, [${this.array}]`
    );
  }
}
const tolik = new UserDTO({
  firstName: Infinity,
  lastName: new Date('1999-01-02T00:00:00.000Z'),
  phone: null,
  birth: new Date('1999-01-02T00:00:00.000Z'),
  array: [213, 'string'],
  nanValue: NaN,
});

tolik.printInfo();
const serialized = tolik.serialize();
console.log('serialized:', serialized);
const resurrectedTolik = Serializable.wakeFrom(serialized);
console.log("deserialized:", resurrectedTolik);



//example with post
// class Post extends Serializable {
//   constructor({ content, date, author }) {
//     super();
//     this.content = content;
//     this.date = new Date(date);
//     this.author = author;
//     this._className = this.constructor.name;
//   }
// }
// const post = new Post({
//   content: 'Hello, world!',
//   date: new Date(),
//   author: 'Anatoliy',
// });

// const postSerialized = post.serialize();
// console.log('Post Serialized:', postSerialized);

// try {
//   const attemptResurrection = Serializable.wakeFrom(postSerialized);
//   console.log(attemptResurrection);
// } catch (error) {
//   console.error('Error:', error.message);
// }

