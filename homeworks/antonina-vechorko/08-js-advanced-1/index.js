// task 1 https://github.com/qaprosoft/react-laba-international-2/blob/main/lectures/08-js-advanced-1/task.md#1-pluck
function pluck(obj, props) {
  const keys = props.split('.');
  let value = obj;
  for (const key of keys) {
    if (value === null || typeof value !== 'object' || !(key in value)) {
      return null;
    }
    value = value[key];
  }
  return value;
}

// task 2 https://github.com/qaprosoft/react-laba-international-2/blob/main/lectures/08-js-advanced-1/task.md#2-deep-clone
function clone(obj) {
  return JSON.parse(JSON.stringify(obj));
}

// task 3 https://github.com/qaprosoft/react-laba-international-2/blob/main/lectures/08-js-advanced-1/task.md#3-a-long-time-ago
function offset(dateTimeStr) {
  const now = new Date();
  const [day, month, year, hour, minute, second] = dateTimeStr
    .match(/\d+/g)
    .map(Number);
  const dateTime = new Date(year, month - 1, day, hour, minute, second);

  const diffMillis = now - dateTime;

  const millisecondsPerMinute = 60 * 1000;
  const millisecondsPerHour = 60 * millisecondsPerMinute;
  const millisecondsPerDay = 24 * millisecondsPerHour;
  const millisecondsPerYear = 365 * millisecondsPerDay;

  if (diffMillis < millisecondsPerMinute) {
    return 'just now';
  } else if (diffMillis < millisecondsPerHour) {
    const minutes = Math.floor(diffMillis / millisecondsPerMinute);
    return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
  } else if (diffMillis < millisecondsPerDay) {
    const hours = Math.floor(diffMillis / millisecondsPerHour);
    const remainingMillis = diffMillis % millisecondsPerHour;
    const minutes = Math.floor(remainingMillis / millisecondsPerMinute);
    return `${hours} hour${hours > 1 ? 's' : ''} ${minutes} minute${
      minutes > 1 ? 's' : ''
    } ago`;
  } else if (diffMillis < millisecondsPerYear) {
    const days = Math.floor(diffMillis / millisecondsPerDay);
    const remainingMillis = diffMillis % millisecondsPerDay;
    const hours = Math.floor(remainingMillis / millisecondsPerHour);
    const minutes = Math.floor(
      (remainingMillis % millisecondsPerHour) / millisecondsPerMinute,
    );
    return `${days} day${days > 1 ? 's' : ''} ${hours} hour${
      hours > 1 ? 's' : ''
    } ${minutes} minute${minutes > 1 ? 's' : ''} ago`;
  } else {
    const years = Math.floor(diffMillis / millisecondsPerYear);
    const remainingMillis = diffMillis % millisecondsPerYear;
    const days = Math.floor(remainingMillis / millisecondsPerDay);
    const remainingMillis2 = remainingMillis % millisecondsPerDay;
    const hours = Math.floor(remainingMillis2 / millisecondsPerHour);
    const minutes = Math.floor(
      (remainingMillis2 % millisecondsPerHour) / millisecondsPerMinute,
    );
    return `${years} year${years > 1 ? 's' : ''} ${days} day${
      days > 1 ? 's' : ''
    } ${hours} hour${hours > 1 ? 's' : ''} ${minutes} minute${
      minutes > 1 ? 's' : ''
    } ago`;
  }
}

// task 4 https://github.com/qaprosoft/react-laba-international-2/blob/main/lectures/08-js-advanced-1/task.md#4-random-dates
function randomDate(startDate, endDate) {
  const startMillis = startDate.getTime();
  const endMillis = endDate.getTime();
  const randomMillis = startMillis + Math.random() * (endMillis - startMillis);
  return new Date(randomMillis);
}

const date1 = new Date('2021-01-23');
const date2 = new Date('2023-02-23');

const randomGeneratedDate = randomDate(date1, date2);
const formattedRandomDate = randomGeneratedDate.toLocaleDateString('en-GB');

// console.log(formattedRandomDate);

// task 5 https://www.codewars.com/kata/merged-objects
function objConcat(o) {
  let result = {};
  o.map(object => {
    for (let key in object) {
      result[key] = object[key];
    }
  });
  return result;
}

// task 6 https://www.codewars.com/kata/547f1a8d4a437abdf800055c
class NamedOne {
  constructor(first, last) {
    this.firstName = first;
    this.lastName = last;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  set fullName(value) {
    const names = value.split(' ');
    if (names.length === 2) {
      this.firstName = names[0];
      this.lastName = names[1];
    }
  }
}

// task 7 https://www.codewars.com/kata/partial-keys
function partialKeys(obj) {
  const proxy = new Proxy(obj, {
    get(target, prop) {
      const matchingKeys = Object.keys(target).filter(key =>
        key.startsWith(prop),
      );
      if (matchingKeys.length > 0) {
        return target[matchingKeys.sort()[0]];
      }
      return undefined;
    },
  });

  return proxy;
}

// task 8 https://www.codewars.com/kata/52685f7382004e774f0001f7/train/javascript
function humanReadable(seconds) {
  if (seconds < 0 || seconds > 359999) {
    throw new Error('Invalid input: seconds must be between 0 and 359999');
  }

  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;

  const formattedTime = [
    String(hours).padStart(2, '0'),
    String(minutes).padStart(2, '0'),
    String(secs).padStart(2, '0'),
  ].join(':');

  return formattedTime;
}
