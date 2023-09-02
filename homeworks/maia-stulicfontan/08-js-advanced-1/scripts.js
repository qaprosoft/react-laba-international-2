// task 1: https://github.com/qaprosoft/react-laba-international-2/blob/main/lectures/08-js-advanced-1/task.md#1-pluck
// Pluck: create a function to access the properties of an object
// Note: null is being returned only because it's mentioned as the expected outcome in some of the examples
function pluck(object, property) {
  if (typeof object !== 'object' || object === null) return null;
  let obj = object;
  const properties = property.split('.');
  for (const prop of properties) {
    if (prop in obj) {
      if (typeof obj[prop] !== 'object') return obj[prop];
      obj = obj[prop];
    } else {
      break;
    }
  }
  return null;
}

const object1 = {
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
console.log(pluck(object1, 'preferences.sound.value')); // 30
console.log(pluck(object1, 'unknown.key')); // null
console.log(pluck(randomValue, 'unknown.key')); // null
console.log(pluck(nullValue, 'unknown.key')); // null

// task 2: https://github.com/qaprosoft/react-laba-international-2/blob/main/lectures/08-js-advanced-1/task.md#2-deep-clone
// Deep Clone: create custom deep clone function.
function clone(object) {
  return structuredClone(object);
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

const clonedUser = clone(user);
clonedUser.preferences.sound.maxValue = 70;
console.log(clonedUser);
console.log(user);
console.log(
  user.preferences.sound.maxValue === clonedUser.preferences.sound.maxValue,
); // false

// task 3: https://github.com/qaprosoft/react-laba-international-2/blob/main/lectures/08-js-advanced-1/task.md#3-a-long-time-ago
// "A long time ago" : create a function that returns how long ago a certain day was.
// Helper function 'moment' - accepts strings with format 'DD/MM/YYYY HH:mm:ss'
function moment(datetime) {
  const [date, time] = datetime.split(' ');
  const [day, month, year] = date.split('/');
  const [hour, minute, second] = time.split(':');
  return new Date(year, month - 1, day, hour, minute, second);
}

function offset(dateFrom) {
  const timeUnitValues = [];
  const timeUnitNames = ['day', 'hour', 'minute', 'second'];
  const secondsPerDayHourMinute = [86400, 3600, 60];
  let result = '';
  let timeValue;
  let seconds = Math.round(Math.abs(dateFrom - Date.now()) / 1000); // substracting dates returns a value in miliseconds
  for (let i = 0; i < 4; i++) {
    if (i < 3) {
      timeValue = Math.floor(seconds / secondsPerDayHourMinute[i]);
      seconds -= timeValue * secondsPerDayHourMinute[i];
    } else {
      timeValue = seconds;
    }
    timeUnitValues.push(timeValue);
    if (timeValue)
      timeValue === 1
        ? (result += `1 ${timeUnitNames[i]} `)
        : (result += `${timeValue} ${timeUnitNames[i]}s `);
  }
  return result + 'ago';
}

console.log(offset(moment('23/02/2021 13:30:00'))); // 30 minutes ago
console.log(offset(moment('23/02/2021 13:00:00'))); // 1 hour ago
console.log(offset(moment('23/02/2021 11:30:00'))); // 2 hours 30 minutes ago
console.log(offset(moment('22/02/2021 14:00:00'))); // 1 day ago
console.log(offset(moment('23/02/2020 10:00:00'))); // 366 days ago

// task 4: https://github.com/qaprosoft/react-laba-international-2/blob/main/lectures/08-js-advanced-1/task.md#4-random-dates
// Random dates: create a function that generate a random date between to dates
// Note 1: generates random date and time since 'moment' function defined in task 3 works with both
// Note 2: boundary values (date1 or date2) can be returned
function randomDate(date1, date2) {
  const diff = Math.abs(date1 - date2); // difference in miliseconds
  const randomDiff = Math.floor(
    Math.random() * Math.abs(0 - diff + 1) + Math.min(0, diff),
  );
  return new Date(Math.min(date1, date2) + randomDiff).toLocaleString('en-GB');
}

const date1 = moment('10/05/1985 12:00:00');
const date2 = moment('31/01/2023 12:00:02');
console.log(randomDate(date1, date2));

// CODEWARS TASKS
// task 5: https://www.codewars.com/kata/596cf5b0e1665a2d02000007/train/javascript -- merged objects
function objConcat(objectArray) {
  return Object.assign(...objectArray);
}

// task 6: https://www.codewars.com/kata/547f1a8d4a437abdf800055c -- "this" is an other problem
function NamedOne(first, last) {
  this.firstName = first;
  this.lastName = last;
  Object.defineProperty(this, 'fullName', {
    get() {
      return `${this.firstName} ${this.lastName}`;
    },
    set(value) {
      if (/\w+\s\w+/.test(value)) {
        this.firstName = value.split(' ')[0];
        this.lastName = value.split(' ')[1];
      }
    },
  });
}

// Optional (advanced)
// task 7: https://www.codewars.com/kata/54834b3559e638b39d0009a2 -- "this" is an other solution
function OnceNamedOne(first, last) {
  Object.defineProperties(this, {
    firstName: {value: first},
    lastName: {value: last},
    fullName: {value: `${first} ${last}`},
  });
}

// task 8: https://www.codewars.com/kata/partial-keys
function partialKeys(obj) {
  const handler = {
    get(target, property) {
      const regex = new RegExp(`^${property}`);
      const prop = Object.keys(target)
        .sort()
        .find(element => regex.test(element));
      return prop ? target[prop] : undefined;
    },
  };
  return new Proxy(obj, handler);
}

// task 9: https://www.codewars.com/kata/human-readable-time
function humanReadable(seconds) {
  const SECONDS_PER_HOUR = 3600;
  const SECONDS_PER_MINUTE = 60;
  const hours = Math.floor(seconds / SECONDS_PER_HOUR);
  const minutes = Math.floor((seconds % SECONDS_PER_HOUR) / SECONDS_PER_MINUTE);
  const totalSeconds = seconds % SECONDS_PER_MINUTE;
  return [hours, minutes, totalSeconds]
    .map(element => element.toString().padStart(2, '0'))
    .join(':');
}
