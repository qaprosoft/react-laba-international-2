'use strict';

class Serializable {
  static serializedData = {};

  serialize() {
    if (this instanceof Serializable) {
      let serialized = JSON.stringify(this);
      Serializable.serializedData[serialized] = this;
      return serialized;
    } else {
      throw new Error('Not instance of Serializable');
    }
  }

  wakeFrom(serialized) {
    if (serialized in Serializable.serializedData) {
      let result = Serializable.serializedData[serialized];
      delete Serializable.serializedData[serialized];
      return result;
    } else {
      throw new Error('Not instance of Serializable');
    }
  }
}

//examples

class UserDTO extends Serializable {
  constructor(
    {firstName = '', lastName = '', phone = '', birth = ''} = {
      firstName: '',
      lastName: '',
      phone: '',
      birth: '',
    },
  ) {
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

tolik.printInfo(); //A. Nashovich - 2020327, 1999-01-02T00:00:00.000Z

const serialized = tolik.serialize();
tolik = null;

const resurrectedTolik = new UserDTO().wakeFrom(serialized);

console.log(resurrectedTolik instanceof UserDTO); // true
console.log(resurrectedTolik);
// resurrectedTolik.printInfo(); // A. Nashovich - 2020327, 1999-01-02T00:00:00.000Z

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
// throw an error because the srialized line does contain data for User class

class Singer extends Serializable {
  constructor(
    {firstName = '', lastName = '', randomArr = '', songs = ''} = {
      firstName: '',
      lastName: '',
      randomArr: '',
      songs: '',
    },
  ) {
    super();
    this.firstName = firstName;
    this.lastName = lastName;
    this.randomArr = randomArr;
    this.null = null;
    this.nan = NaN;
    this.infinite = Infinity;
    this.songs = songs;
  }
}

let NattiNatasha = new Singer({
  firstName: 'Natasha',
  lastName: 'Batista ',
  randomArr: [6, 4, 2, '5', '7', '10', 'hello', [1, 2, new Date()]],
  songs: {
    'Sin Pijama': '2018',
    'Las noches en Miami': '2021',
  },
});

console.log(NattiNatasha);

let serializedNatti = NattiNatasha.serialize();

console.log(serializedNatti);

console.log(new Singer().wakeFrom(serializedNatti));

console.log(NattiNatasha instanceof Serializable);
