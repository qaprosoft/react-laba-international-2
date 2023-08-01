// task 1 https://github.com/qaprosoft/react-laba-international-2/blob/main/lectures/08-js-advanced-1/task.md#1-pluck
function pluck(obj, key) {
  if (obj && typeof obj === 'object' && obj.constructor === Object) {
    const result = key
      .split('.')
      .reduce(
        (acc, currKey) =>
          acc && typeof acc === 'object' ? acc[currKey] : null,
        obj,
      );

    return result !== undefined ? result : null;
  }
  return null;
}

// task 2 https://github.com/qaprosoft/react-laba-international-2/blob/main/lectures/08-js-advanced-1/task.md#2-deep-clone
function clone(obj) {
    return JSON.parse(JSON.stringify(obj));
}

// task 3 https://github.com/qaprosoft/react-laba-international-2/blob/main/lectures/08-js-advanced-1/task.md#3-a-long-time-ago
// task 4 https://github.com/qaprosoft/react-laba-international-2/blob/main/lectures/08-js-advanced-1/task.md#4-random-dates
// task 5 https://www.codewars.com/kata/merged-objects
function objConcat(arr) {
    return arr.reduce((res, el) => {
        Object.entries(el).forEach(element => {
          res[element[0]] = element[1];
        });

      return res
    }, {});
}

// task 6 https://www.codewars.com/kata/547f1a8d4a437abdf800055c
function NamedOne(first, last) {
  this.firstName = first;
  this.lastName = last;

  Object.defineProperty(this, 'fullName', {
    get: function () {
      return this.firstName + ' ' + this.lastName;
    },
    set: function (value) {
      const names = value.split(' ');
      if (names.length === 2) {
        this.firstName = names[0];
        this.lastName = names[1];
      }
    },
    enumerable: true,
    configurable: true,
  });
}

// task 7 https://www.codewars.com/kata/54834b3559e638b39d0009a2
function OnceNamedOne(first, last) {
    this.firstName = first;
    this.lastName = last;
    this.fullName = this.firstName + ' ' + this.lastName;
    Object.freeze(this);
}

// task 8 https://www.codewars.com/kata/partial-keys
function partialKeys(obj) {
  return new Proxy(obj, {
    get: function (target, name) {
      let keys = Object.keys(target)
        .filter(key => key.startsWith(name))
        .sort();
      if (keys.length > 0) {
        return target[keys[0]];
      }
    },
  });
}

// task 9 https://www.codewars.com/kata/human-readable-time
function humanReadable(seconds) {
  if (typeof seconds !== 'number' || seconds < 0 || seconds > 359999) {
    throw new Error('Invalid input');
  }

  const h = Math.floor(seconds / 3600);
  const min = Math.floor((seconds % 3600) / 60);
  const restSec = seconds % 60;

  const HH = h.toString().padStart(2, '0');
  const MM = min.toString().padStart(2, '0');
  const SS = restSec.toString().padStart(2, '0');

  return(`${HH}:${MM}:${SS}`);
}