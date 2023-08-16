'use strict';

// // 1. Pluck
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

function pluck(obj, prop) {
  prop = prop.split('.');
  let result;
  for (const property of prop) {
    obj && typeof obj === 'object' && property in obj
      ? (result = obj = obj[property])
      : (result = null);
  }
  return res;
}

console.log(pluck(user, 'preferences.sound.value')); // 30
console.log(pluck(user, 'unknown.key')); // null
console.log(pluck(randomValue, 'unknown.key')); // null
console.log(pluck(nullValue, 'unknown.key')); // null
// // 2. Deep Clone
const user = {
  username: 'testuser1',
  preferences: {
    sound: {
      maxValue: 50,
      value: 30,
    },
  },
};
// first solution:
function clone(obj) {
  return structuredClone(obj);
}
// second solution:
function clone(obj) {
  return JSON.parse(JSON.stringify(obj));
}
const clonedUser = clone(user);

clonedUser.preferences.sound.maxValue = 70;

console.log(
  user.preferences.sound.maxValue === clonedUser.preferences.sound.maxValue,
); // false

// 3. "A long time ago"
function offset(dateString, format) {
  const targetDate = moment(dateString, format);
  const currentDate = moment();
  const timeDifference = currentDate.diff(targetDate, 'milliseconds');

  const yearsAgo = Math.floor(timeDifference / 31536000000);
  const monthsAgo = Math.floor(timeDifference / 2629800000);
  const daysAgo = Math.floor(timeDifference / 86400000);
  const hoursAgo = Math.floor(timeDifference / 3600000);
  const minutesAgo = Math.floor(timeDifference / 60000);

  if (yearsAgo > 0) {
    return `${yearsAgo} year${yearsAgo === 1 ? '' : 's'} ${monthsAgo} month${
      monthsAgo === 1 ? '' : 's'
    } ${daysAgo} day${daysAgo === 1 ? '' : 's'} ago`;
  } else if (monthsAgo > 0) {
    return `${monthsAgo} month${monthsAgo === 1 ? '' : 's'} ${daysAgo} day${
      daysAgo === 1 ? '' : 's'
    } ago`;
  } else if (daysAgo > 0) {
    return `${daysAgo} day${daysAgo === 1 ? '' : 's'} ago`;
  } else if (hoursAgo > 0) {
    return `${hoursAgo} hour${hoursAgo === 1 ? '' : 's'} ${minutesAgo} minute${
      minutesAgo === 1 ? '' : 's'
    } ago`;
  } else {
    return `${minutesAgo} minute${minutesAgo === 1 ? '' : 's'} ago`;
  }
}

console.log(offset(moment('08/06/2023 13:30:00', 'DD/MM/YYYY hh:mm:ss')));

// 4. Random dates
function randomDate(start, end) {
  const date = new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime()),
  );

  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();

  return `${day}/${month}/${year}`;
}

console.log(randomDate(new Date(2012, 0, 1), new Date(2012, 3, 3)));
