// // 1. Pluck. https://github.com/qaprosoft/react-laba-international-2/blob/main/lectures/08-js-advanced-1/task.md#1-pluck

function pluck(obj, path) {
  if (typeof obj !== 'object' || obj === null) {
    return null;
  }

  const keys = path.split('.');
  let value = obj;

  for (const key of keys) {
    if (value !== null && value.hasOwnProperty(key)) {
      value = value[key];
    } else {
      return null;
    }
  }

  return value;
}
//example
// const user = {
//   username: 'testuser1',
//   preferences: {
//     sound: {
//       maxValue: 50,
//       value: 30,
//     },
//   },
// };
const user = {
  username: 'testuser1',
  preferences: {
    sound: {
      maxValue: 50,
      value: null,
    },
  },
};
const randomValue = Math.random();
const nullValue = null;
console.log('1 ' + pluck(user, 'preferences.sound.value'));
console.log('2 ' + pluck(user, 'preferences.sound.value.test'));
console.log('3 ' + pluck(user, 'unknown.key'));
console.log('4 ' + pluck(randomValue, 'unknown.key'));
console.log('5 ' + pluck(nullValue, 'unknown.key'));

// // 2. Deep Clone https://github.com/qaprosoft/react-laba-international-2/blob/main/lectures/08-js-advanced-1/task.md#2-deep-clone
function clone(obj) {
  if (typeof obj !== 'object' || obj === null) {
    return obj;
  }
  const cloneObj = Array.isArray(obj) ? [] : {};
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      cloneObj[key] = clone(obj[key]);
    }
  }

  return cloneObj;
}

//example
const user2 = {
  username: 'testuser1',
  preferences: {
    sound: {
      maxValue: 70,
      value: 30,
    },
  },
};
const clonedUser = clone(user2);
clonedUser.preferences.sound.maxValue = 40;
console.log(
  user2.preferences.sound.maxValue === clonedUser.preferences.sound.maxValue,
);

// // 3. "A long time ago" https://github.com/qaprosoft/react-laba-international-2/blob/main/lectures/08-js-advanced-1/task.md#3-a-long-time-ago

function offset(previousTime) {
  const currentTime = new Date();
  const timeDifference = currentTime - previousTime;
  const minutes = Math.floor(timeDifference / (1000 * 60));
  const hours = Math.floor(timeDifference / (1000 * 60 * 60));
  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const months = Math.floor(timeDifference / (1000 * 60 * 60 * 24 * 30));
  const years = Math.floor(timeDifference / (1000 * 60 * 60 * 24 * 365));
  // console.log(years)
  if (years > 0) {
    return `${years} year${years > 1 ? 's' : ''} ago`;
  } else if (months > 0) {
    return `${months} month${months > 1 ? 's' : ''} ago`;
  } else if (days > 0) {
    return `${days} day${days > 1 ? 's' : ''} ago`;
  } else if (hours > 0) {
    return `${hours} hour${hours > 1 ? 's' : ''} ago`;
  } else {
    return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
  }
}

// example
console.log(offset(new Date('2023-02-23T13:30:00')));
console.log(offset(new Date('2021-02-23T13:00:00')));
console.log(offset(new Date('2021-02-23T11:30:00')));
console.log(offset(new Date('2021-02-22T14:00:00')));
console.log(offset(new Date('2020-02-23T10:00:00')));

// // 4. Random dates https://github.com/qaprosoft/react-laba-international-2/blob/main/lectures/08-js-advanced-1/task.md#4-random-dates
function randomDate(secondDate) {
  const currentTime = new Date();
  const secondTimestamp = secondDate.getTime();

  const randomTimestamp =
    secondTimestamp + Math.random() * (currentTime - secondTimestamp);
  const randomDate = new Date(randomTimestamp);

  return randomDate;
}

// example
const date1 = new Date('2021-01-23');
const randomDateResult = randomDate(date1);
console.log(randomDateResult);

// Codewars
// 5. https://www.codewars.com/kata/merged-objects
var objConcat = o => {
  let merged = {};

  for (let obj of o) {
    for (let key in obj) {
      if (!merged.hasOwnProperty(key) || obj[key] >= merged[key]) {
        merged[key] = obj[key];
      }
    }
  }

  return merged;
};
// // 6. https://www.codewars.com/kata/547f1a8d4a437abdf800055c
class NamedOne {
  constructor(firstName, lastName) {
    this._firstName = firstName;
    this._lastName = lastName;
  }
  get firstName() {
    return this._firstName;
  }
  set firstName(value) {
    this._firstName = value;
    this.updateFullName();
  }
  get lastName() {
    return this._lastName;
  }
  set lastName(value) {
    this._lastName = value;
    this.updateFullName();
  }
  get fullName() {
    return this._firstName + ' ' + this._lastName;
  }
  set fullName(value) {
    if (typeof value === 'string' && value.includes(' ')) {
      const [firstName, lastName] = value.split(' ');
      this._firstName = firstName;
      this._lastName = lastName;
    }
  }
  updateFullName() {
    this._fullName = this._firstName + ' ' + this._lastName;
  }
}
// // 7. https://www.codewars.com/kata/54834b3559e638b39d0009a2
function OnceNamedOne(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.fullName = this.firstName + ' ' + this.lastName;
  Object.freeze(this);
}
// // 8. https://www.codewars.com/kata/partial-keys
function partialKeys(obj) {
  const result = {};

  for (const key in obj) {
    result[key] = obj[key];
    for (let i = 1; i < key.length; i++) {
      const partialKey = key.slice(0, i);
      if (!(partialKey in result) && !(partialKey in obj)) {
        result[partialKey] = obj[key];
      }
    }
  }
  return result;
}

// // 9. https://www.codewars.com/kata/human-readable-time
function humanReadable(seconds) {
  if (seconds < 0 || seconds > 359999) {
    throw new Error('Invalid input.');
  }
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;

  const formattedHours = String(hours).padStart(2, '0');
  const formattedMinutes = String(minutes).padStart(2, '0');
  const formattedSeconds = String(remainingSeconds).padStart(2, '0');

  return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
}
