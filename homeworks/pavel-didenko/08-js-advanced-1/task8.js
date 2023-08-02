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

function randomDate(minDate, maxDate){
  return new Date(Math.floor(Math.random() * (maxDate - minDate) + minDate.getTime()));
}

Date.prototype.format = function (format) {
  const formatSplited = format.split('/');

  const obj = {
    YYYY: this.getFullYear(),
    MM: '0' + (this.getMonth() + 1),
    DD: this.getDate() < 10? '0' + this.getDate().toString(): this.getDate().toString(),
  };

  let result = '';

  for(let item of formatSplited){
    result += obj[item] + '/';
  }

  return result.slice(0, -1);
}

console.log(randomDate(date1, date2).format('DD/MM/YYYY'));
