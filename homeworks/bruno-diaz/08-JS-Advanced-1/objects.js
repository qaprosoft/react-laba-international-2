const user = {
  name: "Bruno",
  preferences: {
    sound: {
      maxValue: 50,
      value: 30,
    },
  },
};

const randomValue = Math.random();
const nullValue = null;

// // 1. Pluck
function pluck(object, propertyName) {
  return propertyName.split(".").reduce((value, property) => {
    if (value && value.hasOwnProperty(property)) {
      return value[property];
    } else {
      return null;
    }
  }, object);
}

// console.log(pluck(user, "preferences.sound.value"));
// console.log(pluck(user, "uknown.key"));
// console.log(pluck(randomValue, "uknown.key"));
// console.log(pluck(nullValue, "unknown.key"));

// // 2. Deep Clone

const deepClone = (target, source) => {
  if (!source || typeof source !== "object") {
    return target;
  }

  if (!target || typeof target !== "object") {
    target = Array.isArray(source) ? [] : {};
  }

  for (const key of Object.keys(source)) {
    if (source[key] instanceof Object) {
      target[key] = deepClone(target[key], source[key]);
    } else {
      target[key] = source[key];
    }
  }
  return target;
};

const clonedUser = deepClone({}, user);
clonedUser.preferences.sound.maxValue = 70;

console.log(
  clonedUser.preferences.sound.maxValue === user.preferences.sound.maxValue
);

// 3. A long time ago
function daysOfDifference(date) {
  const today = new Date();
  const difference = today.getTime() - date.getTime();

  if (difference < 3.6e6) {
    const result = Math.floor(difference / (1000 * 60));
    return result + (result === 1 ? " minute" : " minutes") + "ago";
  } else if (difference < 8.64e7) {
    const result = Math.floor(difference / (1000 * 60 * 60));
    return result + (result === 1 ? " hour" : " hours") + " ago";
  } else {
    const result = Math.floor(difference / (1000 * 60 * 60 * 24));
    return result + (result === 1 ? " day" : " days") + " ago";
  }
}

// 4. Random dates

function randomDate(date1, date2) {
  const startRange = date1.getTime();
  const endRange = date2.getTime();
  if (startRange > endRange) {
    return "Start date must be before end date!";
  }

  const timeRange = endRange - startRange;

  const randomTimeRange = timeRange + Math.random() * timeRange;

  const randomDate = new Date(randomTimeRange);

  return randomDate.toLocaleDateString();
}

const otherDate = new Date();
const date = new Date("2000-01-27");

// console.log(randomDate(date, otherDate))

// some katas :D
// task 5 https://www.codewars.com/kata/596cf5b0e1665a2d02000007/train/javascript

const objConcat = (objects) => {
  return Object.assign({}, ...objects);
};

// task 6 https://www.codewars.com/kata/547f1a8d4a437abdf800055c

function NamedOne(first, last) {
  this.firstName = first;
  this.lastName = last;

  Object.defineProperty(this, "fullName", {
    set: function (value) {
      const parts = value.split(" ");
      if (parts.length === 2) {
        this.firstName = parts[0];
        this.lastName = parts[1];
      }
    },

    get: function () {
      return this.firstName + " " + this.lastName;
    },
  });
}
