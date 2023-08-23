'use strict'
class Serializable {
  constructor() {
    this._className = this._className;
  }

  serialize() {
    const props = {};
    for (const key in this){
      if(this.hasOwnProperty(key)) {
        props[key] = this[key]
      }
    }
    return JSON.stringify(props);
  }
}

class Test extends Serializable {
  constructor({ firstName, lastName, position, skills, birth }) {
    super();
    this.fistName = firstName;
    this.lastName = lastName;
    this.position = position;
    this.skilss = skills;
    this.birth = birth;
  }
}

const test = new Test({
  firstName: "Bruno",
  lastName: "Diaz",
  position: "Front-end Developer",
  skills: [
    (languaje = ["English", "Spanish", "Elf", "Klingon"]),
    (someObject = { nestedObject: { xd: "xd" } }),
    1,
    5,
    Infinity,
    undefined,
    null,
    "Boca Juniors",
  ],
  birth: new Date('2000-01-27')
});

const testSerialized = test.serialize();

console.log(testSerialized)

const deserialized = JSON.parse(testSerialized);
console.log(test === deserialized)