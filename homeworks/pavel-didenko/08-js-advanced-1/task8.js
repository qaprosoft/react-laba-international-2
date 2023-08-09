//task1

const user = {
  username: 'testuser1',
  preferences: {
    sound: {
      maxValue: 50,
      value: 30,
    },
  },
};

function pluck(obj, property) {
  if (obj === null || typeof obj !== 'object') return null;

  const splited = property.split('.');

  if (splited.length > 1 && splited[0] in obj) {
    return pluck(obj[splited[0]], property.slice(splited[0].length + 1));
  } else if (splited.length === 1 && splited[0] in obj) {
    return obj[splited[0]];
  } else {
    return null;
  }
}

const randomValue = Math.random();
const nullValue = null;

/* console.log(pluck(user, 'preferences.sound.value')); // 30
console.log(pluck(user, 'unknown.key')); // null
console.log(pluck(randomValue, 'unknown.key')); // null
console.log(pluck(nullValue, 'unknown.key')); // null */

// task2

const clone = obj => {
  return structuredClone(obj);
};

const clonedUser = clone(user);

clonedUser.preferences.sound.maxValue = 70;

/* console.log(
  user.preferences.sound.maxValue === clonedUser.preferences.sound.maxValue,
); // false */

//task3
function offset(value) {
  // const today = new Date('2021-02-23 14:00'); //keep it for testing matters
  const today = Date.now();
  if (value >= today) {
    return "It wasn't in the past";
  }

  const daysDifference = Math.floor(
    Math.abs(today - value) / (1000 * 60 * 60 * 24),
  );

  const dayPlural = daysDifference > 1 ? 'days' : 'day';

  if (daysDifference > 0) {
    return `${daysDifference} ${dayPlural} ago`;
  }

  const hourDifference = Math.floor(Math.abs(today - value) / (1000 * 60 * 60));

  const minutesDifference = Math.floor(
    (Math.abs(today - value) / (1000 * 60)) % 60,
  );

  const hourPlural = hourDifference > 1 ? 'hours' : 'hour';
  const minutePlural =
    minutesDifference > 1 || minutesDifference < 1 ? 'minutes' : 'minute';

  if (hourDifference > 0 && minutesDifference > 0) {
    return `${hourDifference} ${hourPlural} ${minutesDifference} ${minutePlural} ago`;
  } else if (hourDifference > 0 && minutesDifference === 0) {
    return `${hourDifference} ${hourPlural} ago`;
  } else {
    return `${minutesDifference} ${minutePlural} ago`;
  }
}

//Needed format YYYY-MM-DD THH:mm:ss.sssZ

function moment(pastDate, presentDate) {
  const splitedPastDate = pastDate.split(' ');

  splitedPastDate[0] =
    splitedPastDate[0].split('/').reverse().join().replaceAll(',', '-') + 'T';

  const result =
    splitedPastDate.length > 1
      ? new Date(splitedPastDate.join(''))
      : new Date(splitedPastDate[0].slice(0, splitedPastDate[0].length - 1));

  return result;
}

// E.g. Today is 23.02.2021, 14:00:00
// console.log(offset(moment('23/02/2021 13:30:00', 'DD/MM/YYYY hh:mm:ss')));
// 30 minutes ago

// console.log(offset(moment('23/02/2021 13:00:00', 'DD/MM/YYYY hh:mm:ss')));
// 1 hour ago

// console.log(offset(moment('23/02/2021 11:30:00', 'DD/MM/YYYY hh:mm:ss')));
// 2 hours 30 minutes ago

// console.log(offset(moment('22/02/2021 14:00:00', 'DD/MM/YYYY hh:mm:ss')));
// 1 day ago

// console.log(offset(moment('23/02/2020 10:00:00', 'DD/MM/YYYY hh:mm:ss')));
// 366 days ago

const date1 = moment('23/01/2021', 'DD/MM/YYYY');
const date2 = moment('23/02/2021', 'DD/MM/YYYY');

function randomDate(minDate, maxDate) {
  return new Date(
    Math.floor(Math.random() * (maxDate - minDate) + minDate.getTime()),
  );
}

Date.prototype.format = function (format) {
  const formatSplited = format.split('/');

  const obj = {
    YYYY: this.getFullYear(),
    MM: '0' + (this.getMonth() + 1),
    DD:
      this.getDate() < 10
        ? '0' + this.getDate().toString()
        : this.getDate().toString(),
  };

  let result = '';

  for (let item of formatSplited) {
    result += obj[item] + '/';
  }

  return result.slice(0, -1);
};

// console.log(randomDate(date1, date2).format('DD/MM/YYYY'));

//task5: https://www.codewars.com/kata/merged-objects

function objConcat(arr) {
  let result = {};

  for (let i = 0; i < arr.length; i++) {
    Object.assign(result, arr[i]);
  }

  return result;
}

//task6: https://www.codewars.com/kata/547f1a8d4a437abdf800055c

class NamedOne {
  // -- SHOULD be changed --
  constructor(first, last) {
    this._firstName = first;
    this._lastName = last;
    this._fullName = this.firstName + ' ' + this.lastName;
  }

  get firstName() {
    return this._firstName;
  }

  get lastName() {
    return this._lastName;
  }

  get fullName() {
    return this._fullName;
  }

  set firstName(name) {
    this._firstName = name;
    this._fullName = this.firstName + ' ' + this.lastName;
  }

  set lastName(lname) {
    this._lastName = lname;
    this._fullName = this.firstName + ' ' + this.lastName;
  }

  set fullName(fname) {
    const splitedName = fname.split(' ');
    if (splitedName.length > 1) {
      this._firstName = splitedName[0];
      this._lastName = splitedName[1];
      this._fullName = this._firstName + ' ' + this._lastName;
    }
  }
}

//task7: https://www.codewars.com/kata/54834b3559e638b39d0009a2;

function OnceNamedOne(first, last) {
  // -- SHOULD be changed --
  this.firstName = first;
  this.lastName = last;
  this.fullName = this.firstName + ' ' + this.lastName;
  Object.freeze(this);
}

//task8: https://www.codewars.com/kata/partial-keys

//not solved

//task9: https://www.codewars.com/kata/human-readable-time;

function humanReadable(seconds) {
  let hours = Math.floor(seconds / 60 / 60);
  let minutes = Math.floor((seconds / 60) % 60);
  let secs = Math.floor((seconds % 60) % 60);

  return `${hours > 9 ? hours : '0' + hours}:${
    minutes > 9 ? minutes : '0' + minutes
  }:${secs > 9 ? secs : '0' + secs}`;
}
