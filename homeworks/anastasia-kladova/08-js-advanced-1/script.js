//task1
const pluck = (obj, path) => {
  const pathArr = path.split(".");
  let curObj = obj;

  for (let i = 0; i < pathArr.length; i++) {
    if (curObj === null || curObj === undefined) return null;
    curObj = curObj[pathArr[i]];
  }

  return curObj;
};

//test for task1
// const user = {
//   username: "testuser1",
//   preferences: {
//     sound: {
//       maxValue: 50,
//       value: 30,
//     },
//   },
// };
// const randomValue = Math.random();
// const nullValue = null;

// console.log(pluck(user, "preferences.sound.value")); // 30
// console.log(pluck(user, "unknown.key")); // null
// console.log(pluck(randomValue, "unknown.key")); // null
// console.log(pluck(nullValue, "unknown.key")); // null

//task2
const deepClone = (obj) => {
  const clonedObj = {};

  for (let prop in obj) {
    let value =
      typeof prop === "object" ? deepClone(obj[prop]) : obj[prop];
    clonedObj[prop] = value;
  }

  return clonedObj;
};

// const user = {
//   username: "testuser1",
//   preferences: {
//     sound: {
//       maxValue: 50,
//       value: 30,
//     },
//   },
// };
// const clonedUser = deepClone(user);

// clonedUser.preferences.sound.maxValue = 70;

// console.log(
//   user.preferences.sound.maxValue ===
//     clonedUser.preferences.sound.maxValue
// );
// console.log(clonedUser);

//task3
const extractPattern = (string) => {
  const patternArr = string.split(" ");
  const [datePatternArr, timePatternArr] = [
    patternArr[0].split("/"),
    patternArr[1].split(":"),
    ,
  ];
  const [day, month, year] = [...datePatternArr];
  const [hours, minutes, seconds] = [...timePatternArr];

  return [day, month, year, hours, minutes, seconds];
};

const moment = (dateString) => {
  const [day, month, year, hours, minutes, seconds] = [
    ...extractPattern(dateString),
  ];
  const date = new Date(year, month - 1, day, hours, minutes, seconds);

  return date;
};

const offset = (comparedDate) => {
  let resultString = "";
  const today = new Date();
  const timeInMilliseconds = new Date(today - comparedDate);

  const minutes = Math.floor((timeInMilliseconds / (1000 * 60)) % 60);
  const hours = Math.floor((timeInMilliseconds / (1000 * 60 * 60)) % 24);
  const days = Math.floor(
    (timeInMilliseconds / (1000 * 60 * 60 * 24)) % 365
  );
  const years = Math.floor(
    timeInMilliseconds / (1000 * 60 * 60 * 24 * 365)
  );

  if (years) {
    resultString += years === 1 ? "1 year " : `${years} years `;
  }
  if (days) {
    resultString += days === 1 ? "1 day " : `${days} days `;
  }
  if (hours) {
    resultString += hours === 1 ? "1 hour " : `${hours} hours `;
  }
  if (minutes) {
    resultString += minutes === 1 ? "1 minute " : `${minutes} minutes `;
  }

  return resultString + "ago";
};

// console.log(offset(moment("23/02/2021 13:30:00", "DD/MM/YYYY hh:mm:ss")));

// console.log(offset(moment("23/02/2021 13:00:00", "DD/MM/YYYY hh:mm:ss")));

// console.log(offset(moment("23/02/2021 11:30:00", "DD/MM/YYYY hh:mm:ss")));

// console.log(offset(moment("22/02/2021 14:00:00", "DD/MM/YYYY hh:mm:ss")));

// console.log(offset(moment("23/02/2020 10:00:00", "DD/MM/YYYY hh:mm:ss")));

//task4
const formatDate = (date, format) => {
  if (format === "DD/MM/YY") return date.toLocaleDateString("en-GB");
  if (format === "MM/DD/YY") return date.toLocaleDateString("en-US");
};

const randomDate = (date1, date2, format) => {
  const startDate = new Date(date1);
  const endDate = new Date(date2);

  const timeDiff = endDate.getTime() - startDate.getTime();
  const randomTime = Math.random() * timeDiff;
  const randomDate = new Date(startDate.getTime() + randomTime);
  const dateFormatted = formatDate(randomDate, format);

  return dateFormatted;
};

// const date1 = moment("22/02/2021 14:00:00");
// const date2 = moment("22/03/2021 14:00:00");
// console.log(randomDate(date1, date2, "DD/MM/YY"));

//task5 https://www.codewars.com/kata/merged-objects
function objConcat(objectsArray) {
  return Object.assign({}, ...objectsArray);
}

//task6 https://www.codewars.com/kata/547f1a8d4a437abdf800055c
function NamedOne(first, last) {
  const object = {
    firstName: first,
    lastName: last,

    get fullName() {
      return `${this.firstName} ${this.lastName}`;
    },

    set fullName(newFullName) {
      const nameArr = newFullName.split(" ");
      const [firstName, lastName] = [...nameArr];
      if (nameArr.length === 2) {
        this.firstName = firstName;
        this.lastName = lastName;
      }
    },
  };

  return object;
}

//Optional

//task8 https://www.codewars.com/kata/54834b3559e638b39d0009a2
function OnceNamedOne(first, last) {
  const obj = {
    firstName: first,
    lastName: last,

    get fullName() {
      return `${this.firstName} ${this.lastName}`;
    },
  };

  Object.freeze(obj);

  return obj;
}

//task9 https://www.codewars.com/kata/partial-keys

//task10 https://www.codewars.com/kata/human-readable-time
const formatTime = (time) => (time < 10 ? "0" + time : time);

const humanReadable = (secondsString) => {
  let hours = parseInt(secondsString / 3600);
  let minutes = parseInt((secondsString / 60) % 60);
  let seconds = parseInt(secondsString % 60);

  const result =
    formatTime(hours) +
    ":" +
    formatTime(minutes) +
    ":" +
    formatTime(seconds);
  return result;
};
