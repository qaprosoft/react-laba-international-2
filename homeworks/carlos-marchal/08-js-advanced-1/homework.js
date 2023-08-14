// task 1 Pluck

function pluck(obj, param) {
  if (typeof obj !== 'object' || obj === null) {
    return null;
  }

  let keys = param.split('.');

  for (let key of keys) {
    return key in obj ? obj[key] : null;
  }
}

// task 2 Deep Clone

const user = {
  username: 'testuser1',
  preferences: {
    sound: {
      maxValue: 50,
      value: 30,
    },
  },
};

const deepCloneCreator = function (obj) {
  return JSON.parse(JSON.stringify(obj));
  // return structuredClone(obj);
};

// task 3 "A long time ago"

function offset(date) {
  const arrDate = date.split(' ');
  const days = arrDate[0].split('/').reverse().join('-');
  const fullDate = new Date(days + 'T' + arrDate[1]);
  const millsPerHour = 3.6e6;
  const millsPerDay = 8.64e7;
  const millsPerYear = 3.154e10;
  const millDifference = Date.now() - fullDate.getTime();

  if (millDifference > millsPerYear) {
    return (
      'the date was ' +
      (millDifference / millsPerYear).toFixed(2) +
      ' years ago'
    );
  } else if (millDifference > millsPerDay) {
    return (
      'the date was ' + (millDifference / millsPerDay).toFixed(2) + ' days ago'
    );
  } else {
    return (
      'the date was ' +
      (millDifference / millsPerHour).toFixed(2) +
      ' hours ago'
    );
  }
}

//task 4 Random dates

function randomDate(date1, date2) {
  const [year1, month1, day1] = date1.split('/').reverse();
  const [year2, month2, day2] = date2.split('/').reverse();
  const date1Milliseconds = new Date(year1, month1 - 1, day1).getTime();
  const date2Milliseconds = new Date(year2, month2 - 1, day2).getTime();

  return date2Milliseconds > date1Milliseconds
    ? new Date(
        Math.random() * (date2Milliseconds - date1Milliseconds) +
          date1Milliseconds,
      )
    : new Date(
        Math.random() * (date1Milliseconds - date2Milliseconds) +
          date2Milliseconds,
      );
}

// task 5 https://www.codewars.com/kata/596cf5b0e1665a2d02000007

function objConcat(o) {
  const result = Object.assign({}, ...o);

  return result;
}

// task 6 https://www.codewars.com/kata/547f1a8d4a437abdf800055c

function NamedOne(first, last) {
  this.first = first;
  this.last = last;
  Object.defineProperties(this, {
    firstName: {
      get: function () {
        return this.first;
      },
      set: function (first) {
        this.first = first;
      },
    },
    lastName: {
      get: function () {
        return this.last;
      },
      set: function (last) {
        this.last = last;
      },
    },
    fullName: {
      get: function () {
        return this.first + ' ' + this.last;
      },
      set: function (fullName) {
        if (
          fullName.search(/[^a-zA-Z' ']/g) &&
          fullName.split(' ').length > 1
        ) {
          this.first = fullName.split(' ')[0];
          this.last = fullName.split(' ')[1];
        }
      },
    },
  });
}

// 7 404

// task 8 https://www.codewars.com/kata/54834b3559e638b39d0009a2

function OnceNamedOne(first, last) {
  this.first = first;
  this.last = last;
  Object.defineProperties(this, {
    firstName: {
      get: function () {
        return this.first;
      },
    },
    lastName: {
      get: function () {
        return this.last;
      },
    },
    fullName: {
      get: function () {
        return this.first + ' ' + this.last;
      },
    },
  });
  this.fullName = this.first + ' ' + this.last;
}

// task 9

function partialKeys(obj) {
  const getter = {
    get: (obj, prop) => {
      let res = Object.keys(obj)
        .sort()
        .find(key => key.indexOf(prop) === 0);
      return res ? obj[res] : undefined;
    },
  };

  return new Proxy(obj, getter);
}

// task 10

function humanReadable(seconds) {
  const hours = Math.floor(seconds / 60 / 60)
    .toString()
    .padStart(2, '0');
  const minutes = (Math.floor(seconds / 60) % 60).toString().padStart(2, '0');
  const sec = (seconds % 60).toString().padStart(2, '0');
  return `${hours}:${minutes}:${sec}`;
}
