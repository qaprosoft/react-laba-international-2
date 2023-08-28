'use strict';

class Serializable {
  serialize() {
    return JSON.stringify({...this, className: this.constructor.name});
  }

  wakeFrom(serialized) {
    const serializedObj = JSON.parse(serialized);
    if (serializedObj.className !== this.constructor.name)
      throw new Error('Wake up wrong class');

    return new this.constructor(this.checkType(serializedObj));
  }

  checkType(serializedObj) {
    let properties = {};
    for (let property in serializedObj) {
      if (property === 'className') continue;
      if (
        typeof serializedObj[property] === 'object' &&
        serializedObj[property] !== null
      ) {
        properties[property] = structuredClone(serializedObj[property]);
      } else if (this.isValidDate(serializedObj[property])) {
        properties[property] = new Date(serializedObj[property]);
      } else {
        properties[property] = serializedObj[property];
      }
    }
    return properties;
  }

  isValidDate(dateString) {
    const date = new Date(dateString);
    return !isNaN(date);
  }
}

const userDefaultValue = {
  firstName: '',
  lastName: '',
  phone: '',
  birth: '',
};

class UserDTO extends Serializable {
  constructor({firstName, lastName, phone, birth} = userDefaultValue) {
    super();

    this.firstName = firstName;
    this.lastName = lastName;
    this.phone = phone;
    this.birth = birth;
  }

  printInfo() {
    return `${this.firstName[0]}. ${this.lastName} - ${
      this.phone
    }, ${this.birth.toISOString()}`;
  }
}

let tolik = new UserDTO({
  firstName: 'Anatoliy',
  lastName: 'Nashovich',
  phone: '2020327',
  birth: new Date('1999-01-02'),
});

console.log(tolik.printInfo()); //A. Nashovich - 2020327, 1999-01-02T00:00:00.000Z

const serialized = tolik.serialize();
tolik = null;

const resurrectedTolik = new UserDTO().wakeFrom(serialized);

console.log(resurrectedTolik instanceof UserDTO); // true
console.log(resurrectedTolik.printInfo()); // A. Nashovich - 2020327, 1999-01-02T00:00:00.000Z

const postDefaultValue = {
  content: '',
  date: '',
  author: '',
};

class Post extends Serializable {
  constructor({content, date, author} = postDefaultValue) {
    super();

    this.content = content;
    this.date = date;
    this.author = author;
  }
}

//console.log(new Post().wakeFrom(serialized));
// throw an error because the srialized line does contain data for User class

const carDefaultValue = {
  brand: '',
  model: '',
  availableColors: [],
};

class Car extends Serializable {
  constructor({brand, model, availableColors} = carDefaultValue) {
    super();

    this.brand = brand;
    this.model = model;
    this.availableColors = availableColors;
  }

  showCatalog() {
    if (this.availableColors.length === 0) return 'No available models';
    return `Available colors for ${this.brand} ${
      this.model
    } are ${this.availableColors.join(', ')}`;
  }
}

let mbEClass = new Car({
  brand: 'mercedes benz',
  model: 'e-class',
  availableColors: ['black', 'grey', 'dark-blue'],
});

console.log(mbEClass.showCatalog());

const serialiezdCar = mbEClass.serialize();
mbEClass = null;

const unknownCar = new Car().wakeFrom(serialiezdCar);

console.log(unknownCar.showCatalog());
console.log(unknownCar instanceof Car);
