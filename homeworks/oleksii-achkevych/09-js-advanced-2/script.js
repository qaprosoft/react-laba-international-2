class Serializable {
  serialize() {
    return JSON.stringify(this, (key, value) => {
      if (typeof value === 'function' || value === undefined) {
        return undefined;
      }
      return value;
    });
  }

  static wakeFrom(serialized) {
    const data = JSON.parse(serialized);
    const className = data._className;

    if (className === 'UserDTO') {
      return new UserDTO(data);
    } else if (className === 'Post') {
      return new Post(data);
    } else {
      throw new Error(`Unknown class: ${className}`);
    }
  }
}

class UserDTO extends Serializable {
  constructor({ firstName, lastName, phone, birth }) {
    super();
    this.firstName = firstName;
    this.lastName = lastName;
    this.phone = phone;
    this.birth = new Date(birth); 
    this._className = 'UserDTO';
  }

  printInfo() {
    console.log(
      `${this.firstName[0]}. ${this.lastName} - ${
        this.phone
      }, ${this.birth.toISOString()}`
    );
  }
}

class Post extends Serializable {
  constructor({ content, date, author }) {
    super();
    this.content = content;
    this.date = new Date(date); // Convert the serialized string back to a Date object
    this.author = author;
    this._className = 'Post';
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
console.log('Serialized:', serialized);
const resurrectedTolik = Serializable.wakeFrom(serialized);
console.log(resurrectedTolik instanceof UserDTO); // true
resurrectedTolik.printInfo(); // A. Nashovich - 2020327, 1999-01-02T00:00:00.000Z

const post = new Post({
  content: 'Hello, world!',
  date: new Date(),
  author: 'Anatoliy',
});

const postSerialized = post.serialize();
console.log('Post Serialized:', postSerialized);

try {
  const attemptResurrection = Serializable.wakeFrom(postSerialized);
  console.log(attemptResurrection);
} catch (error) {
  console.error('Error:', error.message);
}
