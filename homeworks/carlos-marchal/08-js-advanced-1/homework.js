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

let deepCloneCreator = function (obj) {
  return JSON.parse(JSON.stringify(obj));
  // return structuredClone(obj);
};

clonedUser.preferences.sound.maxValue = 70;

// task 3 "A long time ago"

function offset(date) {
  let arrDate = date.split(' ');
  let days = arrDate[0].split('/').reverse().join('-');
  let fullDate = new Date(days + 'T' + arrDate[1]);
  let millsPerHour = 3.6e6;
  let millsPerDay = 8.64e7;
  let millsPerYear = 3.154e10;
  let millDifference = Date.now() - fullDate.getTime();

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
      'the date was ' + (millDifference / millsPerHour).toFixed(2) + 'hours ago'
    );
  }
}

//task 4 Random dates

function randomDate(date1, date2) {
  let [year1, month1, day1] = date1.split('/').reverse();
  let [year2, month2, day2] = date2.split('/').reverse();
  let date1Milliseconds = new Date(year1, month1 - 1, day1).getTime();
  let date2Milliseconds = new Date(year2, month2 - 1, day2).getTime();

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
  let result = Object.assign({}, ...o);

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
  // -- SHOULD be changed --
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
