// task 1 https://github.com/qaprosoft/react-laba-international-2/blob/main/lectures/08-js-advanced-1/task.md#1-pluck
const pluck = (obj, key) => {
  if (obj === null || typeof obj !== 'object') return null;
  let keys = key.split('.');
  let value = obj;
  for (let i = 0; i < keys.length; i++) {
    if (!value.hasOwnProperty(keys[i])) return null;
    value = value[keys[i]];
  }
  return value;
};

const user = {
  username: 'testuser1',
  preferences: {
    sound: {
      maxValue: 50,
      value: 30,
    },
  },
};
const randomValue = Math.random();
const nullValue = null;

console.log(pluck(user, 'preferences.sound.value')); // 30
console.log(pluck(user, 'unknown.key')); // null
console.log(pluck(randomValue, 'unknown.key')); // null
console.log(pluck(nullValue, 'unknown.key')); // null

// task 2 https://github.com/qaprosoft/react-laba-international-2/blob/main/lectures/08-js-advanced-1/task.md#2-deep-clone
const clone = obj => {
  // if the object isnt of type object or
  // object is null, undefined
  // or a function then return it
  if (
    typeof obj !== 'object' ||
    typeof obj === undefined ||
    obj === null ||
    typeof obj == 'function'
  ) {
    return obj;
  }

  // if obj is array iterate through each item
  if (Array.isArray(obj)) {
    const newArr = [];
    for (let item in obj) newArr.push(clone(item));
    return newArr;
  }

  let result = {};
  const keys = Object.keys(obj);
  for (let key in keys) {
    // Recursively iterate through each of the key.
    result[keys[key]] = clone(obj[keys[key]]);
  }
  return result;
};

const user2 = {
  username: 'testuser1',
  preferences: {
    sound: {
      maxValue: 50,
      value: 30,
    },
  },
  arr: [1, 'a', {test: 'maybe'}],
};
const clonedUser = clone(user2);

clonedUser.preferences.sound.maxValue = 70;
clonedUser.arr[2].test = 'hi';

console.log(
  user2.preferences.sound.maxValue === clonedUser.preferences.sound.maxValue,
); // false
console.log(user2.arr[2].test === clonedUser.arr[2].test); // false

// task 3 https://github.com/qaprosoft/react-laba-international-2/blob/main/lectures/08-js-advanced-1/task.md#3-a-long-time-ago
const offset = date => {
  const today = new Date(/* '2021-02-23T14:00:00' */);
  date = new Date(date);

  // difference between dates in seconds
  let seconds = (+today - +date) / 1000;

  const days = Math.floor(seconds / 86400);
  seconds %= 86400;
  const hours = Math.floor(seconds / 3600);
  seconds %= 3600;
  const minutes = Math.floor(seconds / 60);
  seconds = Math.floor(seconds % 60);

  let result = '';
  if (days > 0) result += days + ' day' + (days > 1 ? 's ' : ' ');
  if (hours > 0) result += hours + ' hour' + (hours > 1 ? 's ' : ' ');
  if (minutes > 0) result += minutes + ' minute' + (minutes > 1 ? 's ' : ' ');
  if (seconds > 0) result += seconds + ' second' + (seconds > 1 ? 's ' : ' ');

  return result + 'ago';
};

// E.g. Today is 23.02.2021, 14:00:00
console.log(offset('2021-02-23T13:30:00'));
// 30 minutes ago

console.log(offset('2021-02-23T13:00:00'));
// 1 hour ago

console.log(offset('2021-02-23T11:30:00'));
// 2 hours 30 minutes ago

console.log(offset('2021-02-22T14:00:00'));
// 1 day ago

console.log(offset('2020-02-23T14:00:00'));
// 366 days ago

// task 4 https://github.com/qaprosoft/react-laba-international-2/blob/main/lectures/08-js-advanced-1/task.md#4-random-dates
const randomDate = (date1, date2) => {
  const seconds1 = date1.getTime();
  const seconds2 = date2.getTime();

  const min = Math.min(seconds1, seconds2);
  const max = Math.max(seconds1, seconds2);

  const randomSeconds = Math.floor(Math.random() * (max - min) + min);

  return new Date(randomSeconds);
};

const date1 = new Date('2021-01-23');
const date2 = new Date('2021-02-23');

console.log(date1.toString());
console.log(date2.toString());

console.log(randomDate(date1, date2).toString());

// task 5 https://www.codewars.com/kata/merged-objects
function objConcat(objArr) {
  let res = {};
  for (obj of objArr) res = {...res, ...obj};
  return res;
}

// task 6 https://www.codewars.com/kata/547f1a8d4a437abdf800055c
function NamedOne(first, last) {
  this.firstName = first;
  this.lastName = last;

  Object.defineProperty(this, 'fullName', {
    get() {
      return this.firstName + ' ' + this.lastName;
    },
    set(newFullName) {
      newFullName = newFullName.split(' ');
      if (newFullName.length !== 2) return;
      this.firstName = newFullName[0];
      this.lastName = newFullName[1];
    },
  });
}

// task 7 https://www.codewars.com/kata/54834b3559e638b39d0009a2
function OnceNamedOne(first, last) {
  Object.defineProperties(this, {
    firstName: {
      get() {
        return first;
      },
    },
    lastName: {
      get() {
        return last;
      },
    },
    fullName: {
      get() {
        return first + ' ' + last;
      },
    },
  });
}

// task 8 https://www.codewars.com/kata/partial-keys
function partialKeys(obj) {
  return new Proxy(obj, {
    get(target, prop) {
      const keys = Object.keys(target).sort();
      for (let key of keys) if (key.startsWith(prop)) return target[key];
    },
  });
}

// task 9 https://www.codewars.com/kata/human-readable-time
function humanReadable(seconds) {
  const hours = Math.floor(seconds / 3600)
    .toString()
    .padStart(2, '0');
  seconds %= 3600;
  const minutes = Math.floor(seconds / 60)
    .toString()
    .padStart(2, '0');
  seconds = Math.floor(seconds % 60)
    .toString()
    .padStart(2, '0');
  return `${hours}:${minutes}:${seconds}`;
}
