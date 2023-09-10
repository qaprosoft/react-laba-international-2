class Serializable {
  serialize() {
    return JSON.stringify(this);
  }

  wakeFrom(serialized) {
    if (typeof serialized !== 'string') {
      throw new Error('Input has to be a string');
    }

    const result = JSON.parse(serialized, this.dateReviver);

    return new this.constructor(result);
  }
  dateReviver(_, value) {
    const date = new Date(value);
    if (+date === +date) {
      return date;
    }
    return value;
  }
}

class UserDTO extends Serializable {
  constructor({firstName = '', lastName = '', phone = '', birth = new Date()}
                = {firstName: '', lastName: '', phone: '', birth: new Date()}) {
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
  birth: new Date(1999, 1, 2),
});

tolik.printInfo(); //A. Nashovich - 2020327, 1999-01-02T00:00:00.000Z

const serialized = tolik.serialize();
tolik = null;

const resurrectedTolik = new UserDTO().wakeFrom(serialized);

console.log(resurrectedTolik instanceof UserDTO); // true
resurrectedTolik.printInfo(); // A. Nashovich - 2020327, 1999-01-02T00:00:00.000Z

class Post extends Serializable {
  constructor({content = '', date = new Date(), author = ''}
                = {content: '', date: new Date(), author: ''}) {
    super();

    this.content = content;
    this.date = date;
    this.author = author;
  }
}

console.log(new Post().wakeFrom(serialized));
// throw an error because the srialized line does contain data for User class