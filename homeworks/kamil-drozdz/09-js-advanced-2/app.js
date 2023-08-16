class Serializable {
    constructor() {
      this._className = this.constructor.name;
    }
  
    serialize() {
      return JSON.stringify(this, (key, value) => {
        if (typeof value === 'function' || value === undefined) {
          return undefined;
        }
        return value;
      });
    }
  
    static registerClass(cls) {
      this.registeredClasses = this.registeredClasses || {};
      this.registeredClasses[cls.name] = cls;
    }
  
    static wakeFrom(serialized) {
      const data = JSON.parse(serialized);
      const className = data._className;
      const cls = this.registeredClasses[className];
  
      if (cls) {
        return new cls(data);
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
      this.date = new Date(date);
      this.author = author;
    }
  }
  

  Serializable.registerClass(UserDTO);
  Serializable.registerClass(Post);
  
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
  console.log(resurrectedTolik instanceof UserDTO); 

  resurrectedTolik.printInfo(); 
  
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