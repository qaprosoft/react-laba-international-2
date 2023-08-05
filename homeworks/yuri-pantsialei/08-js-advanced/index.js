const user = {
  username: 'testuser1',
  preferences: {
    sound: {
      maxValue: 50,
      value: 30,
    },
  },
};

//1. Pluck
//Create a function to access the properties of an object.

const randomValue = Math.random();
const nullValue = null;

function pluck(obj, property) {
  if (typeof obj !== 'object' || obj === null) return null;
  const propertyRoute = property.split('.');
  let value = obj[propertyRoute[0]];

  for (let i = 1; i < propertyRoute.length; i++) {
    if (value === undefined) {
      break;
    }
    value = value[propertyRoute[i]];
  }

  return value || null;
}

console.log(pluck(user, 'preferences.sound.value')); // 30
console.log(pluck(user, 'unknown.key')); // null
console.log(pluck(randomValue, 'unknown.key')); // null
console.log(pluck(nullValue, 'unknown.key')); // null

//2. Deep Clone
//Create custom deep clone function.

function clone(obj) {
  let newObj = {};
  for (prop in obj) {
    if (typeof obj[prop] !== 'object' || obj[prop] === null) {
      newObj[prop] = obj[prop];
    } else {
      newObj[prop] = clone(obj[prop]);
    }
  }

  return newObj;
}

console.log(clone(user));

const clonedUser = clone(user);

clonedUser.preferences.sound.maxValue = 70;

console.log(
  user.preferences.sound.maxValue === clonedUser.preferences.sound.maxValue,
); // false

//3. "A long time ago"
//Create a function that returns how long ago a certain day was.

function moment(dateString, format) {
  const parts = {};
  const regex = /(\w+)/g;
  let match;

  while ((match = regex.exec(format))) {
    const formatPart = match[0];
    const value = parseInt(
      dateString.substr(match.index, formatPart.length),
      10,
    );
    parts[formatPart] = value;
  }

  const year = parts['YYYY'];
  const month = parts['MM'] - 1; // Months are 0-based in JavaScript Date
  const day = parts['DD'];
  const hour = parts['hh'] || 0;
  const minute = parts['mm'] || 0;
  const second = parts['ss'] || 0;

  return new Date(year, month, day, hour, minute, second).getTime();
}

function offset(milliseconds) {
  const dateNow = new Date('02.23.2021, 14:00:00').getTime();
  const dateGap = new Date(dateNow - milliseconds);
  const millisecondsPerDay = 24 * 60 * 60 * 1000;

  const months = dateGap.getUTCMonth();
  const days = Math.floor(dateGap / millisecondsPerDay);
  const hours = dateGap.getUTCHours();
  const minutes = dateGap.getUTCMinutes();
  const seconds = dateGap.getUTCSeconds();

  let resultString = '';

  if (months) {
    resultString += months === 1 ? '1 month ' : `${months} months `;
  }
  if (days) {
    resultString += days === 1 ? '1 day ' : `${days} days `;
  }
  if (hours) {
    resultString += hours === 1 ? '1 hour ' : `${hours} hours `;
  }
  if (minutes) {
    resultString += minutes === 1 ? '1 minute ' : `${minutes} minutes `;
  }
  if (seconds) {
    resultString += seconds === 1 ? '1 second ' : `${seconds} seconds `;
  }

  return resultString + 'ago';
}

// E.g. Today is 23.02.2021, 14:00:00
console.log(offset(moment('23/02/2021 13:30:00', 'DD/MM/YYYY hh:mm:ss')));
console.log(offset(moment('02/23/2021 13:30:00', 'MM/DD/YYYY hh:mm:ss')));
console.log(offset(moment('2021/23/02 13:30:00', 'YYYY/DD/MM hh:mm:ss')));
// 30 minutes ago

console.log(offset(moment('23/02/2021 13:00:00', 'DD/MM/YYYY hh:mm:ss')));
// 1 hour ago

console.log(offset(moment('23/02/2021 11:30:00', 'DD/MM/YYYY hh:mm:ss')));
// 2 hours 30 minutes ago

console.log(offset(moment('22/02/2021 14:00:00', 'DD/MM/YYYY hh:mm:ss')));
// 1 day ago

console.log(offset(moment('23/02/2020 10:00:00', 'DD/MM/YYYY hh:mm:ss')));
// 366 days ago

//4. Random dates
//Create a function that generate a random date between to dates

const date1 = moment('23/01/2021', 'DD/MM/YYYY');
const date2 = moment('23/02/2021', 'DD/MM/YYYY');

function randomDate(dateOneInMiliseconds, dateTwoInMiliseconds) {
  const randomDateInMiliseconds =
    Math.random() * (dateOneInMiliseconds - dateTwoInMiliseconds) +
    dateOneInMiliseconds;

  return new Date(randomDateInMiliseconds);
}

console.log(randomDate(date1, date2).format('DD/MM/YY'));
// 20/02/2021

//task 5 https://www.codewars.com/kata/merged-objects

function objConcat(arrOfObjects) {
  let obj = {};
  for (let i = 0; i < arrOfObjects.length; i++) {
    for (prop in arrOfObjects[i]) {
      obj[prop] = arrOfObjects[i][prop];
    }
  }
  return obj;
}

//task 6 https://www.codewars.com/kata/547f1a8d4a437abdf800055c

function NamedOne(first, last) {
  // -- SHOULD be changed --
  this._firstName = first;
  this._lastName = last;
  this._fullName = first + ' ' + last;
}

Object.defineProperty(NamedOne.prototype, 'firstName', {
  get() {
    return this._firstName;
  },
  set(value) {
    this._firstName = value;
    this._fullName = this._firstName + ' ' + this._lastName;
  },
});

Object.defineProperty(NamedOne.prototype, 'lastName', {
  get() {
    return this._lastName;
  },
  set(value) {
    this._lastName = value;
    this._fullName = this._firstName + ' ' + this._lastName;
  },
});

Object.defineProperty(NamedOne.prototype, 'fullName', {
  get() {
    return this._fullName;
  },
  set(value) {
    if (value.split(' ').length > 1) {
      const splitedFullName = value.split(' ');
      this._firstName = splitedFullName[0];
      this._lastName = splitedFullName[1];
      this._fullName = value;
    }
  },
});

//task 8 https://www.codewars.com/kata/54834b3559e638b39d0009a2

function OnceNamedOne(first, last) {
  // -- SHOULD be changed --
  this._firstName = first;
  this._lastName = last;
  this._fullName = first + ' ' + last;

  Object.defineProperty(this, 'firstName', {
    get() {
      return this._firstName;
    },
  });

  Object.defineProperty(this, 'lastName', {
    get() {
      return this._lastName;
    },
  });

  Object.defineProperty(this, 'fullName', {
    get() {
      return this._fullName;
    },
  });
}

//task 9 https://www.codewars.com/kata/partial-keys

function partialKeys(obj) {
  return new Proxy(obj, {
    get(target, property, receiver) {
      const properties = [];
      for (let targetProp in target) {
        if (targetProp.startsWith(property)) {
          properties.push(targetProp);
        }
      }
      return properties.length > 0 ? target[properties.sort()[0]] : undefined;
    },
  });
}

//task 10 https://www.codewars.com/kata/human-readable-time

function humanReadable(sec) {
  const secondsInHour = 60 * 60;
  const secondsInMinute = 60;
  const hours = Math.floor(sec / secondsInHour);
  const minutes = Math.floor((sec - hours * secondsInHour) / secondsInMinute);
  const seconds = sec - hours * secondsInHour - minutes * secondsInMinute;

  return `${hours.toString().padStart(2, '0')}:${minutes
    .toString()
    .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}
