// task 1 https://github.com/qaprosoft/react-laba-international-2/blob/main/lectures/08-js-advanced-1/task.md#1-pluck
const pluck = (obj, propName) => {
  const props = propName.split('.');
  let currObj = obj;

  for (let prop of props) {
    if (!currObj?.hasOwnProperty(prop)) return null;
    currObj = currObj[prop];
  }

  return currObj;
};

//task 2 https://github.com/qaprosoft/react-laba-international-2/blob/main/lectures/08-js-advanced-1/task.md#2-deep-clone
const clone = obj => {
  const cloneObj = {};

  for (let prop in obj) {
    cloneObj[prop] =
      typeof obj[prop] === 'object' ? clone(obj[prop]) : obj[prop];
  }

  return cloneObj;
};

// if we sure that we don't have obj methods:
// const clone = obj => JSON.parse(JSON.stringify(obj));

//task 3 https://github.com/qaprosoft/react-laba-international-2/blob/main/lectures/08-js-advanced-1/task.md#3-a-long-time-ago
const moment = (date, pattern) => {
  const patternArr = pattern.match(/(\w+)/gi);
  const dateArr = date.match(/(\d+)/gi);

  const merged = patternArr.reduce(
    (obj, key, index) => ({...obj, [key]: dateArr[index]}),
    {},
  );

  const dateObj = new Date(
    `${merged.YYYY}-${merged.MM}-${merged.DD}T${merged.hh ? merged.hh : '00'}:${
      merged.mm ? merged.mm : '00'
    }:${merged.ss ? merged.ss : '00'}`,
  );

  if (isNaN(dateObj)) throw new Error('Invalid date');

  return dateObj;
};

const offset = moment => {
  const msPerMinute = 60 * 1000;
  const msPerHour = msPerMinute * 60;
  const msPerDay = msPerHour * 24;
  const msPerMonth = msPerDay * 30;
  const msPerYear = msPerDay * 365;

  const ms = new Date() - moment;

  if (ms < msPerMinute) {
    return Math.round(ms / 1000) + ' seconds ago';
  } else if (ms < msPerHour) {
    return Math.round(ms / msPerMinute) + ' minutes ago';
  } else if (ms < msPerDay) {
    return Math.round(ms / msPerHour) + ' hours ago';
  } else if (ms < msPerMonth) {
    return Math.round(ms / msPerDay) + ' days ago';
  } else if (ms < msPerYear) {
    return Math.round(ms / msPerMonth) + ' months ago';
  } else {
    return Math.round(ms / msPerYear) + ' years ago';
  }
};

//task 4 https://github.com/qaprosoft/react-laba-international-2/blob/main/lectures/08-js-advanced-1/task.md#4-random-dates
const randomDate = (date1, date2) => {
  return new Date(
    date1.getTime() + Math.random() * (date2.getTime() - date1.getTime()),
  ).toLocaleDateString('en-GB');
};

//task 5 https://www.codewars.com/kata/merged-objects
const objConcat = objects => Object.assign({}, ...objects);

//task 6 https://www.codewars.com/kata/547f1a8d4a437abdf800055c
class NamedOne {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  set fullName(newFullName) {
    if (newFullName.match(/\w+ \w+/)) {
      [this.firstName, this.lastName] = newFullName.split(' ');
    }
  }
}

//task 8 https://www.codewars.com/kata/54834b3559e638b39d0009a2
class OnceNamedOne {
  constructor(_firstName, _lastName) {
    this._firstName = _firstName;
    this._lastName = _lastName;
  }

  get firstName() {
    return this._firstName;
  }

  get lastName() {
    return this._lastName;
  }

  get fullName() {
    return `${this._firstName} ${this._lastName}`;
  }
}

//task 9 https://www.codewars.com/kata/partial-keys
const partialKeys = obj =>
  new Proxy(obj, {
    get: (obj, prop) => {
      const key = Object.keys(obj)
        .sort()
        .find(x => x.startsWith(prop));
      return key ? obj[key] : undefined;
    },
  });

//task 10 https://www.codewars.com/kata/human-readable-time
const humanReadable = seconds => {
  let format = 'HH:MM:SS';

  const HH = parseInt(seconds / 3600);
  const MM = parseInt((seconds % 3600) / 60);
  const SS = parseInt((seconds % 3600) % 60);

  return format
    .replace('HH', HH.toString().length === 2 ? HH : `0${HH}`)
    .replace('MM', MM.toString().length === 2 ? MM : `0${MM}`)
    .replace('SS', SS.toString().length === 2 ? SS : `0${SS}`);
};
