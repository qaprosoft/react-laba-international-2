class Serializable {
  serialize() {
    const serializedJson = JSON.stringify(this, (key, value) => {
      if (value instanceof Date) {
        return {type: 'Date', value: value.toISOString()};
      }
      return value;
    });

    return serializedJson;
  }

  wakeFrom(serialized) {
    const data = JSON.parse(serialized);
    if (data && data.__class !== this.constructor.name) {
      throw new Error('Invalid serialization for Class');
    }
    const wokeUpData = new this.constructor();
    for (const prop in data) {
      if (data.hasOwnProperty(prop) && wokeUpData[prop] !== undefined) {
        if (data[prop] && data[prop].type === 'Date') {
          wokeUpData[prop] = new Date(data[prop].value);
        } else if (data[prop] == -0 && prop === 'phone') {
          wokeUpData[prop] = 0;
        } else {
          wokeUpData[prop] = data[prop];
        }
      }
    }
    console.log('Woke up data:', wokeUpData); // Add this line for debugging
    return wokeUpData;
  }
}

class UserDTO extends Serializable {
  constructor({firstName, lastName, phone, birth} = {}) {
    super();
    this.__class = 'UserDTO';
    this.firstName = firstName || '';
    this.lastName = lastName || '';
    this.phone = phone || '';
    this.birth = birth || new Date();
  }

  printInfo() {
    console.log(
      `${this.firstName[0]}. ${this.lastName} - ${this.phone}, ${this.birth}`,
    );
  }
}

class Post extends Serializable {
  constructor({content, date, author} = {}) {
    super();
    this.__class = 'Post';
    this.content = content || '';
    this.date = date || new Date();
    this.author = author || '';
  }
}

const tolik = new UserDTO({
  firstName: 'Anatoliy',
  lastName: 'Nashovich',
  phone: '-0',
  birth: new Date('1999-01-02'),
});

tolik.printInfo();

// Serialize the UserDTO instance
const serializedTolik = tolik.serialize();
console.log(serializedTolik);

// Create a new instance of UserDTO by resurrecting from the serialized data
const resurrectedTolik = new UserDTO().wakeFrom(serializedTolik);

console.log(resurrectedTolik instanceof UserDTO); // true
resurrectedTolik.printInfo();

try {
  const post = new Post().wakeFrom(serializedTolik); // Use serializedTolik
  console.log(post);
} catch (error) {
  console.error(error.message); // Output: Invalid serialization for Class
}
