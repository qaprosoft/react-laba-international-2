class Serializable {
  serialize() {
    return JSON.stringify(
      {
        _class: this.constructor.name,
        ...this,
      },
      Serializable._JSONReplacer,
    );
  }

  wakeFrom(serialized) {
    const parsedData = JSON.parse(serialized, Serializable._JSONReviver);
    if (!parsedData || parsedData.constructor !== Object) {
      throw new Error('Serialized data is not valid');
    }
    if (parsedData._class !== this.constructor.name) {
      throw new Error(
        `Serialized data is not for an instance of ${this.constructor.name} class`,
      );
    }

    delete parsedData._class;

    // check if there are any extra keys in parsed data
    for (let prop of Object.keys(parsedData)) {
      if (!this.hasOwnProperty(prop)) {
        throw new Error(`Unexpected content: ${prop}`);
      }
    }

    // parsed data is clean
    // assign all the props to the instance
    for (let [prop, value] of Object.entries(parsedData)) {
      this[prop] = value;
    }

    return this;
  }

  static _JSONReplacer(key, value) {
    if (!Serializable._isSupported(value)) {
      throw new Error(`"${key}" property is not supported to serialize`);
    }

    if (typeof value === 'number') {
      return value.toString();
    }

    return value;
  }

  static _JSONReviver(key, value) {
    if (typeof value === 'string') {
      if (value === 'NaN') return NaN;
      if (value === 'Infinity') return Infinity;
      if (value === '-Infinity') return -Infinity;
      if (/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z$/.test(value)) {
        return new Date(value);
      }
    }
    return value;
  }

  static _isSupported(value) {
    // Supported types: null, date, array, number, string and object
    return (
      value === null ||
      value instanceof Date ||
      Array.isArray(value) ||
      typeof value === 'number' ||
      typeof value === 'string' ||
      (typeof value === 'object' && value.constructor === Object)
    );
  }
}

// Examples
/**
 * REMOVEME To mock the class you to provide us with
 * @typedef {{
 *   serialize(): string,
 *   wakeFrom(serialized: string): Serializable
 * }} Serializable
 */
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

// let tolik = new UserDTO({
//   firstName: 'Anatoliy',
//   lastName: 'Nashovich',
//   phone: '2020327',
//   birth: new Date('1999-01-02'),
// });

// tolik.printInfo(); //A. Nashovich - 2020327, 1999-01-02T00:00:00.000Z

// const serialized = tolik.serialize();
// tolik = null;

// const resurrectedTolik = new UserDTO().wakeFrom(serialized);

// console.log(resurrectedTolik instanceof UserDTO); // true
// console.log(resurrectedTolik.printInfo()); // A. Nashovich - 2020327, 1999-01-02T00:00:00.000Z

class Post extends Serializable {
  constructor({content, date, author} = {}) {
    super();

    this.content = content;
    this.date = date;
    this.author = author;
  }
}

// console.log(new Post().wakeFrom(serialized));
// throw an error because the serialized line does contain data for User class

class Student extends Serializable {
  constructor({firstName, lastName, age, classes, grades} = {}) {
    super();

    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.classes = classes;
    this.grades = grades;

    this.nan = NaN;
    this.infinity = Infinity;
  }

  getStudentInfo() {
    const gradesArray = [];
    for (let [className, grade] of Object.entries(this.grades)) {
      gradesArray.push(`${className}: ${grade}`);
    }
    const gradeInfo = gradesArray.join('\n\t');

    return `
      ${this.firstName} ${this.lastName} is ${this.age} years old.
      classes: ${this.classes}
      grades:
        ${gradeInfo}`;
  }
}

let student = new Student({
  firstName: 'Kyle',
  lastName: 'Walker',
  age: 24,
  classes: ['Math', 'History', 'Programming'],
  grades: {
    Math: 4.2,
    History: 3.6,
    Programming: 4.5,
  },
});

// console.log(student.getStudentInfo());
// console.log(student.nan, student.infinity);

// const serialized = student.serialize();
// student = null;

// const resurrectedStudentInfo = new Student().wakeFrom(serialized);

// console.log(resurrectedStudentInfo instanceof Student); // true
// console.log(resurrectedStudentInfo.getStudentInfo());
// console.log(resurrectedStudentInfo.nan, resurrectedStudentInfo.infinity);
