'use strict';

class Serializable {
  serialize() {
    if (this instanceof Serializable) {
      return JSON.stringify(this, this.nAnStringifier);
    }
  }

  wakeFrom(serialized) {
    if(typeof serialized !== "string"){
      throw new Error("An input has to be string to deserialize it");
    }

    if (this instanceof Serializable) {
      const result = JSON.parse(serialized, this.dateReviver);
      const resultKeys = Object.keys(result);
      const constructorKeys = Object.keys(this);
      for (let item of resultKeys) {
        if (!constructorKeys.includes(item)) {
          throw new Error(`Not instance of ${this.constructor.name}`);
        }
      }
      return new this.constructor(result);
    }
  }

  nAnStringifier(_, value) {
    if (value === Infinity) {
      return 'Infinity';
    } else if (value === -Infinity) {
      return '-Infinity';
    } else if (value !== value) {
      return 'NaN';
    }
    return value;
  }

  dateReviver(_, value) {
    if (
      'string' === typeof value &&
      /^\d{4}-[01]\d-[0-3]\dT[012]\d(?::[0-6]\d){2}\.\d{3}Z$/.test(value)
    ) {
      const date = new Date(value);
      if (+date === +date) {
        return date;
      }
    }else if('string' === typeof value && value === "Infinity"){
      value = Infinity;
    }
    return value;
  }
}

//examples

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

let vladik = new UserDTO({
  firstName: "Vladislav",
  lastName: Infinity,
  phone: Infinity,
  birth: null,
})



// console.log(vladik);

// vladik = vladik.serialize();

// console.log(vladik);

// vladik = new UserDTO().wakeFrom(vladik);

// console.log(vladik);


// tolik.printInfo(); //A. Nashovich - 2020327, 1999-01-02T00:00:00.000Z

// const serialized = tolik.serialize();
// tolik = null;

// const resurrectedTolik = new UserDTO().wakeFrom(serialized);

// console.log(resurrectedTolik instanceof UserDTO); // true
// console.log(resurrectedTolik);
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
    this.zero = 0;
  }
}

// let NattiNatasha = new Singer({
//   firstName: 'Natasha',
//   lastName: 'Batista ',
//   randomArr: [6, 4, 2, '5', '7', '10', 'hello', [1, 2, new Date()]],
//   songs: {
//     'Sin Pijama': '2018',
//     'Las noches en Miami': '2021',
//   },
// });

// console.log(NattiNatasha);

// let serializedNatti = NattiNatasha.serialize();

// console.log(serializedNatti);

// serializedNatti = new Singer().wakeFrom(serializedNatti);

// console.log(serializedNatti.infinite === Infinity);

// console.log(NattiNatasha instanceof Serializable);
