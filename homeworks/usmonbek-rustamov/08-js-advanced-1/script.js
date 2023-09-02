// Example for task 1 and 2
const user = {
  username: 'testuser1',
  preferences: {
    sound: {
      maxValue: 50,
      value: 30,
    },
  },
};

// Task 1: Pluck
// https://github.com/qaprosoft/react-laba-international-2/blob/main/lectures/08-js-advanced-1/task.md#1-pluck
function pluck(obj, path) {
  const properties = path.split('.');
  let value = obj;

  for (let key of properties) {
    if (!value?.hasOwnProperty(key)) {
      return null;
    }
    value = value[key];
  }

  return value;
}
// const randomValue = Math.random();
// const nullValue = null;

// console.log(pluck(user, 'preferences.sound.value')); // 30
// console.log(pluck(user, 'unknown.key')); // null
// console.log(pluck(randomValue, 'unknown.key')); // null
// console.log(pluck(nullValue, 'unknown.key')); // null

// Task 2: Deep Clone
// https://github.com/qaprosoft/react-laba-international-2/blob/main/lectures/08-js-advanced-1/task.md#2-deep-clone
function clone(obj) {
  let newObj = {};
  const id = Symbol('id');
  const stack = [[id, obj]];

  let currentObj = newObj;
  while (stack.length !== 0) {
    const [key, objectToCopy] = stack.pop();
    currentObj[key] = {...objectToCopy};
    currentObj = currentObj[key];

    for (let [key, value] of Object.entries(objectToCopy)) {
      if (typeof value === 'object') {
        stack.push([key, value]);
      }
    }
  }

  return newObj[id];
}

// const clonedUser = clone(user);

// clonedUser.preferences.sound.maxValue = 70;

// console.log(
//   user.preferences.sound.maxValue === clonedUser.preferences.sound.maxValue,
// ); // false

/////////////////////////////////////////
// Utility for task 3 and 4
/////////////////////////////////////////
function moment(dateString, format) {
  // function assumes those values are present in format
  const formatPattern = {
    YYYY: '(\\d{4})',
    MM: '(\\d{2})',
    DD: '(\\d{2})',
    hh: '(\\d{2})',
    mm: '(\\d{2})',
    ss: '(\\d{2})',
  };

  // create a pattern from format string
  const pattern = new RegExp(
    format.replace(/YYYY|MM|DD|hh|mm|ss/g, match => formatPattern[match]),
  );
  const dateValues = dateString.match(pattern);

  // the order which these format parts appear
  const formatParts = format.match(/YYYY|MM|DD|hh|mm|ss/g);

  // create an object mapping format parts to date values
  const date = {};
  formatParts.forEach((part, index) => {
    date[part] = Number.parseInt(dateValues[index + 1]);
  });

  return new Date(
    date?.['YYYY'] ?? 0,
    (date?.['MM'] ?? 1) - 1,
    date?.['DD'] ?? 0,
    date?.['hh'] ?? 0,
    date?.['mm'] ?? 0,
    date?.['ss'] ?? 0,
  );
}

// Task 3: "A long time ago"
// https://github.com/qaprosoft/react-laba-international-2/blob/main/lectures/08-js-advanced-1/task.md#3-a-long-time-ago
function offset(date) {
  const currentTime = new Date(2021, 1, 23, 14);
  if (date >= currentTime) {
    return 'Invalid value';
  }

  const pluralize = (baseString, value) =>
    value > 1 ? `${baseString}s` : baseString;

  const dayDifference = Math.floor(
    (currentTime - date) / (24 * 60 * 60 * 1000),
  );

  if (dayDifference > 0) {
    const dayPlural = pluralize('day', dayDifference);
    return `${dayDifference} ${dayPlural} ago`;
  }

  const hourDifference = Math.floor((currentTime - date) / (1000 * 60 * 60));
  const minuteDifference = Math.floor(
    ((currentTime - date) / (1000 * 60)) % 60,
  );
  const hourPlural = pluralize('hour', hourDifference);
  const minutePlural = pluralize('minute', minuteDifference);

  if (minuteDifference === 0) {
    return `${hourDifference} ${hourPlural} ago`;
  }

  if (hourDifference === 0) {
    return `${minuteDifference} ${minutePlural} ago`;
  }

  return `${hourDifference} ${hourPlural} ${minuteDifference} ${minutePlural} ago`;
}

// // E.g. Today is 23.02.2021, 14:00:00
// console.log(offset(moment('23/02/2021 13:30:00', 'DD/MM/YYYY hh:mm:ss')));
// // 30 minutes ago

// console.log(offset(moment('23/02/2021 13:00:00', 'DD/MM/YYYY hh:mm:ss')));
// // 1 hour ago

// console.log(offset(moment('23/02/2021 11:30:00', 'DD/MM/YYYY hh:mm:ss')));
// // 2 hours 30 minutes ago

// console.log(offset(moment('22/02/2021 14:00:00', 'DD/MM/YYYY hh:mm:ss')));
// // 1 day ago

// console.log(offset(moment('23/02/2020 10:00:00', 'DD/MM/YYYY hh:mm:ss')));
// // 366 days ago

// Task 4: Random Dates
// https://github.com/qaprosoft/react-laba-international-2/blob/main/lectures/08-js-advanced-1/task.md#4-random-dates
function randomDate(date1, date2) {
  const maxDate = Math.max(date1, date2);
  const minDate = Math.min(date1, date2);
  return new Date(Math.floor(Math.random() * (maxDate - minDate) + minDate));
}

Date.prototype.format = function (format) {
  const placeholders = {
    YYYY: String(this.getFullYear()),
    YY: String(this.getFullYear()),
    MM: String(this.getMonth() + 1).padStart(2, 0),
    DD: String(this.getDate()).padStart(2, 0),
    hh: String(this.getHours()).padStart(2, 0),
    mm: String(this.getMinutes()).padStart(2, 0),
    ss: String(this.getSeconds()).padStart(2, 0),
  };

  const formatted = format.replace(
    /YYYY|YY|MM|DD|hh|mm|ss/g,
    match => placeholders[match],
  );

  return formatted;
};

// const date1 = moment('23/01/2021', 'DD/MM/YYYY');
// const date2 = moment('23/02/2021', 'DD/MM/YYYY');

// console.log(randomDate(date1, date2).format('DD/MM/YY'));

// Task 5: Merged Objects
// https://www.codewars.com/kata/596cf5b0e1665a2d02000007/train/javascript
function objConcat(objects) {
  return Object.assign({}, ...objects);
}

// Task 6: "this" is an other problem
// https://www.codewars.com/kata/547f1a8d4a437abdf800055c/train/javascript
function NamedOne(first, last) {
  this.firstName = first;
  this.lastName = last;

  Object.defineProperty(this, 'fullName', {
    get() {
      return `${this.firstName} ${this.lastName}`;
    },

    set(value) {
      const parts = value.split(' ');
      if (parts.length !== 2) return;

      this.firstName = parts[0];
      this.lastName = parts[1];
    },
  });
}

// Task 7: "this" is an other solution
// https://www.codewars.com/kata/54834b3559e638b39d0009a2/train/javascript
function OnceNamedOne(first, last) {
  Object.defineProperties(this, {
    firstName: {
      value: first,
    },
    lastName: {
      value: last,
    },
    fullName: {
      value: `${first} ${last}`,
    },
  });
}

// Task 8: Partial Keys
// https://www.codewars.com/kata/5e602796017122002e5bc2ed/train/javascript
function partialKeys(obj) {
  const orderedKeys = Object.keys(obj).sort();

  const handler = {
    get(target, prop) {
      for (let key of orderedKeys) {
        if (key.startsWith(prop)) {
          return target[key];
        }
      }
    },
  };

  return new Proxy(obj, handler);
}

// Task 9: Human Readable Time
// https://www.codewars.com/kata/52685f7382004e774f0001f7/train/javascript
function humanReadable(totalSeconds) {
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = (totalSeconds % 3600) % 60;

  const pad = value => String(value).padStart(2, 0);
  return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
}
