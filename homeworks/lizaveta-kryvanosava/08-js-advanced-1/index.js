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
// if we sure that we don't have obj methods - we can use:
// const clone = obj => JSON.parse(JSON.stringify(obj));

//task 3 https://github.com/qaprosoft/react-laba-international-2/blob/main/lectures/08-js-advanced-1/task.md#3-a-long-time-ago
const moment = (date, pattern) => {
  const patternArr = pattern.match(/\w+/gi);
  const dateArr = date.match(/\d+/gi);

  const merged = patternArr.reduce(
    (obj, key, index) => ({...obj, [key]: dateArr[index]}),
    {},
  );

  const dateObj = new Date(
    `${merged.YYYY}-${merged.MM}-${merged.DD}T${merged.hh ?? '00'}:${
      merged.mm ?? '00'
    }:${merged.ss ?? '00'}`,
  );

  if (isNaN(dateObj)) throw new Error('Invalid date');

  return dateObj;
};

const offset = moment => {
  const result = [];

  let seconds = (new Date() - moment) / 1000;
  const secPassed = Math.floor(seconds % 60);

  seconds = (seconds - secPassed) / 60;
  const minutes = Math.floor(seconds % 60);

  seconds = (seconds - minutes) / 60;
  const hours = Math.floor(seconds % 24);

  seconds = (seconds - hours) / 24;
  const days = Math.floor(seconds % 365);

  seconds = (seconds - days) / 365;
  const years = Math.floor(seconds);

  if (years) result.push(years + ' year' + (years > 1 ? 's' : ''));
  if (days) result.push(days + ' day' + (days > 1 ? 's' : ''));
  if (hours) result.push(hours + ' hour' + (hours > 1 ? 's' : ''));
  if (minutes) result.push(minutes + ' minute' + (minutes > 1 ? 's' : ''));

  return result.join(' ') + ' ago';
};

//task 4 https://github.com/qaprosoft/react-laba-international-2/blob/main/lectures/08-js-advanced-1/task.md#4-random-dates
const randomDate = (date1, date2) => {
  return {
    newDate: new Date(
      date1.getTime() + Math.random() * (date2.getTime() - date1.getTime()),
    ),

    format(pattern) {
      switch (pattern) {
        case 'DD/MM/YY':
          return this.newDate.toLocaleDateString('en-GB');
        case 'MM/DD/YY':
          return this.newDate.toLocaleDateString('en-US');
        case 'YY/MM/DD':
          return this.newDate.toLocaleDateString('ko-KR');
      }
    },
  };
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
    if (newFullName.match(/\w+\s\w+/)) {
      [this.firstName, this.lastName] = newFullName.split(' ');
    }
  }
}

//task 8 https://www.codewars.com/kata/54834b3559e638b39d0009a2
class OnceNamedOne {
  constructor(firstName, lastName) {
    this._firstName = firstName;
    this._lastName = lastName;
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
  const format = 'HH:MM:SS';

  const HH = parseInt(seconds / 3600);
  const MM = parseInt((seconds % 3600) / 60);
  const SS = parseInt((seconds % 3600) % 60);

  return format
    .replace('HH', `00${HH}`.slice(-2))
    .replace('MM', `00${MM}`.slice(-2))
    .replace('SS', `00${SS}`.slice(-2));
};
