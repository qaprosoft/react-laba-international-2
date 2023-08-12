// task 1
function pluck(obj, key) {
  if (obj && typeof obj === 'object' && obj.constructor === Object) {
    const res = key
      .split('.')
      .reduce(
        (acc, currKey) =>
          acc && typeof acc === 'object' ? acc[currKey] : null,
        obj,
      );

    return res !== undefined ? res : null;
  }
  return null;
}

const user = {
  username: 'testuser1',
  preferences: {
    sound: {
      maxValue: 50,
      value: 30,
    },
  },
};

// const randomValue = Math.random();
// const nullValue = null;

// console.log(pluck(user, 'preferences.sound.value')); // 30
// console.log(pluck(user, 'unknown.key')); // null
// console.log(pluck(randomValue, 'unknown.key')); // null
// console.log(pluck(nullValue, 'unknown.key')); // null

// task 2
function clone(obj) {
  return JSON.parse(JSON.stringify(obj));
}

// const clonedUser = clone(user);

// clonedUser.preferences.sound.maxValue = 70;

// console.log(
//   user.preferences.sound.maxValue === clonedUser.preferences.sound.maxValue,
// ); // false

// task 3
function offset(dateString, format) {
  const targetDate = moment(dateString, format);
  const currentDate = moment();
  const timeDifference = currentDate.diff(targetDate, 'milliseconds');

  const intervals = [
    {unit: 'year', duration: 31536000000},
    {unit: 'month', duration: 2629800000},
    {unit: 'day', duration: 86400000},
    {unit: 'hour', duration: 3600000},
    {unit: 'minute', duration: 60000},
  ];

  for (const interval of intervals) {
    const count = Math.floor(timeDifference / interval.duration);
    if (count > 0) {
      return `${count} ${interval.unit}${count === 1 ? '' : 's'} ago`;
    }
  }

  return 'Just now';
}

// E.g. Today is 23.02.2021, 14:00:00
//console.log(offset(moment('23/02/2021 13:30:00', 'DD/MM/YYYY hh:mm:ss')));
// 30 minutes ago

//console.log(offset(moment('23/02/2021 13:00:00', 'DD/MM/YYYY hh:mm:ss')));
// 1 hour ago

//console.log(offset(moment('23/02/2021 11:30:00', 'DD/MM/YYYY hh:mm:ss')));
// 2 hours 30 minutes ago

//console.log(offset(moment('22/02/2021 14:00:00', 'DD/MM/YYYY hh:mm:ss')));
// 1 day ago

//console.log(offset(moment('23/02/2020 10:00:00', 'DD/MM/YYYY hh:mm:ss')));
// 366 days ago

// task 4
function randomDate(start, end) {
  const date = new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime()),
  );

  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();

  return `${day}/${month}/${year}`;
}

//const date1 = moment('23/01/2021', 'DD/MM/YYYY');
//const date2 = moment('23/02/2021', 'DD/MM/YYYY');

//console.log(randomDate(date1, date2).format('DD/MM/YY')); // 20/02/2021

// task 5 https://www.codewars.com/kata/merged-objects
function objConcat(arr) {
  let res = {};
  for (let obj of arr) {
    for (let key in obj) {
      res[key] = obj[key];
    }
  }
  return res;
}

// task 6 https://www.codewars.com/kata/547f1a8d4a437abdf800055c
function NamedOne(first, last) {
  this.firstName = first;
  this.lastName = last;
}

Object.defineProperty(NamedOne.prototype, 'fullName', {
  get() {
    return `${this.firstName} ${this.lastName}`;
  },
  set(fn) {
    const [firstName, lastName] = fn.split(' ');
    if (lastName !== undefined) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
  },
});

// task 7 https://www.codewars.com/kata/54834b3559e638b39d0009a2
function OnceNamedOne(first, last) {
  Object.defineProperties(this, {
    firstName: {value: first, writable: false},
    lastName: {value: last, writable: false},
    fullName: {value: first + ' ' + last, writable: false},
  });
}

// task 8 https://www.codewars.com/kata/partial-keys
function partialKeys(obj) {
  function sortStr(str, str2) {
    return str.localeCompare(str2);
  }

  let protoObj = {};
  let keyArr = Object.keys(obj).sort(sortStr);

  for (let value of keyArr) {
    for (let i = 1; i < value.length; i++) {
      if (!protoObj[value.slice(0, i)]) {
        protoObj[value.slice(0, i)] = obj[value];
      }
    }
  }

  Object.setPrototypeOf(obj, protoObj);
  return obj;
}

// task 9 https://www.codewars.com/kata/human-readable-time
function humanReadable(seconds) {
  if (typeof seconds !== 'number' || seconds < 0 || seconds > 359999) {
    throw new Error('Invalid number of seconds');
  }

  const h = Math.floor(seconds / 3600);
  const min = Math.floor((seconds % 3600) / 60);
  const restSec = seconds % 60;

  const HH = h.toString().padStart(2, '0');
  const MM = min.toString().padStart(2, '0');
  const SS = restSec.toString().padStart(2, '0');

  return `${HH}:${MM}:${SS}`;
}
