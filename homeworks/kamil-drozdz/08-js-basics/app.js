// 1. Pluck
function pluck(obj, key) {
  if (typeof obj === 'object' && obj !== null) {
    const keys = key.split('.');
    let result = obj;
    for (let k of keys) {
      if (result && typeof result === 'object') {
        result = result[k];
      } else {
        return null;
      }
    }
    return result !== undefined ? result : null;
  }
  return null;
}

// 2. Clone// the problem is that the functions don't pass and it's best to use the lodash library, for deepclone
function clone(obj) {
  return JSON.parse(JSON.stringify(obj));
}

// 3. Offset
function offset(dateString, format) {
  const targetDate = moment(dateString, format);
  const currentDate = moment();
  const timeDifference = currentDate.diff(targetDate, 'milliseconds');

  const intervals = [
    { unit: 'year', duration: 31536000000 },
    { unit: 'month', duration: 2629800000 },
    { unit: 'day', duration: 86400000 },
    { unit: 'hour', duration: 3600000 },
    { unit: 'minute', duration: 60000 },
  ];

  for (const interval of intervals) {
    const count = Math.floor(timeDifference / interval.duration);
    if (count > 0) {
      return `${count} ${interval.unit}${count === 1 ? '' : 's'} ago`;
    }
  }

  return 'Just now';
}

// 4. Random Date
function randomDate(start, end) {
  const date = new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );

  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();

  return `${day}/${month}/${year}`;
}

// 5. Object Concatenation
function objConcat(arr) {
  let response = {};
  for (let obj of arr) {
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        response[key] = obj[key];
      }
    }
  }
  return response;
}

// 6. NamedOne
class NamedOne {
  constructor(first, last) {
    this.firstName = first;
    this.lastName = last;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  set fullName(fn) {
    const [firstName, lastName] = fn.split(' ');
    if (lastName !== undefined) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
  }
}

// 7. OnceNamedOne
function OnceNamedOne(first, last) {
  Object.defineProperties(this, {
    firstName: { value: first, writable: false },
    lastName: { value: last, writable: false },
    fullName: { value: first + ' ' + last, writable: false },
  });
}

// 8. Partial Keys
function partialKeys(obj) {
  function sortStr(str1, str2) {
    return str1.localeCompare(str2);
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

// 9. Human Readable
function humanReadable(seconds) {
  if (typeof seconds !== 'number' || seconds < 0 || seconds > 359999) {
    throw new Error('Invalid number of seconds');
  }

  const h = Math.floor(seconds / 3600);
  const min = Math.floor((seconds % 3600) / 60);
  const restSec = seconds % 60;

  const HH = String(h).padStart(2, '0');
  const MM = String(min).padStart(2, '0');
  const SS = String(restSec).padStart(2, '0');

  return `${HH}:${MM}:${SS}`;
}
