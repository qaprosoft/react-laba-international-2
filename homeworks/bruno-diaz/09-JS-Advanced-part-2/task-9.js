class Serializable {
  serialize() {
    const props = { _className: this._className };
    for (const key in this) {
      // if (this[key] instanceof Date) {
      //   this[key] = this[key].toISOString();
      // }
      if (this.hasOwnProperty(key)) {
        props[key] = this[key];
      }
    }
    return JSON.stringify(props, (_, value) => {
      if (value === null) {
        return "null";
      } else if (typeof value === "number" && !Number.isFinite(value)) {
        if (value === Infinity) {
          return "Infinity";
        } else if (value === -Infinity) {
          return "-Infinity";
        } else if (isNaN(value)) {
          return "NaN";
        }
      }
      return value;
    });
  }

  wakeFrom(serialized) {
    const props = JSON.parse(serialized, (_, value) => {
      if (
        typeof value === "string" &&
        /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/.test(value)
      ) {
        return new Date(value);
      } else if (value === "Infinity") {
        return Infinity;
      } else if (value === "-Infinity") {
        return -Infinity;
      } else if (value === "NaN") {
        return NaN;
      } else if (value === "null") {
        return null;
      }
      return value;
    });
    const instance = new this.constructor({});

    for (const key in props) {
      instance[key] = props[key];
    }

    return instance;
  }
}

// TESTING

// class footballTeams extends Serializable {
//   constructor({
//     name,
//     foundationDate,
//     titles,
//     classicRival,
//     bestPlayers,
//     bestClubInWorld,
//     randomInfo,
//   }) {
//     super();
//     this.name = name;
//     this.foundationDate = foundationDate;
//     this.titles = titles;
//     this.classicRival = classicRival;
//     this.descents = null;
//     this.bestPlayers = bestPlayers;
//     this.bestClubInWorld = bestClubInWorld;
//     this.randomInfo = randomInfo;
//   }
// }

// const boca = new footballTeams({
//   name: "Boca Juniors",
//   foundationDate: new Date("1905, 04, 03"),
//   titles: {
//     LibertadoresCup: 6,
//     southAmericanCup: 2,
//     southAmericanReCup: 4,
//     intercontinentalCup: 3,
//     argentinianCup: 4,
//     argentinianSuperCup: 2,
//     argentinianLeague: 35,
//   },
//   classicRival: NaN,
//   bestPlayers: [
//     "Juan Roman Riquelme",
//     "Martin Palermo",
//     "Diego Armando Maradona",
//     "Carlos Alberto Tevez",
//   ],
//   bestClubInWorld: true,
//   randomInfo: [{}, [], new Date(), 0, Infinity, -Infinity, ""],
// });

// const clubSerialized = boca.serialize();
// // console.log(clubSerialized);

// const clubDeserialized = new footballTeams({}).wakeFrom(clubSerialized);

// // console.log(clubDeserialized);
// // boca

// console.log(clubDeserialized instanceof footballTeams);

// // console.log(clubDeserialized)

/**
 * REMOVEME To mock the class you to provide us with
 * @typedef {{
 *   serialize(): string,
 *   wakeFrom(serialized: string): Serializable
 * }} Serializable
 */
class UserDTO extends Serializable {
  constructor({ firstName, lastName, phone, birth }) {
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
      }, ${this.birth.toISOString()}`
    );
  }
}

let tolik = new UserDTO({
  firstName: "Anatoliy",
  lastName: "Nashovich",
  phone: "2020327",
  birth: new Date("1999-01-02"),
});

tolik.printInfo(); //A. Nashovich - 2020327, 1999-01-02T00:00:00.000Z

const serialized = tolik.serialize();
tolik = null;

const resurrectedTolik = new UserDTO({}).wakeFrom(serialized);

console.log(resurrectedTolik instanceof UserDTO); // true
// console.log(resurrectedTolik.printInfo()); // A. Nashovich - 2020327, 1999-01-02T00:00:00.000Z
resurrectedTolik.printInfo();
class Post extends Serializable {
  constructor({ content, date, author }) {
    super();

    this.content = content;
    this.date = date;
    this.author = author;
  }
}

console.log(new Post({}).wakeFrom(serialized));
// throw an error because the srialized line does contain data for User class
