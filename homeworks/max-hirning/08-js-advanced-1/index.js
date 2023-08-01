// task 1 https://github.com/qaprosoft/react-laba-international-2/blob/main/lectures/08-js-advanced-1/task.md#1-pluck
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
};

// console.log(pluck(user, 'preferences.sound.value')); // 30
// console.log(pluck(user, 'unknown.key')); // null
// console.log(pluck(randomValue, 'unknown.key')); // null
// console.log(pluck(nullValue, 'unknown.key')); // null

// task 2 https://github.com/qaprosoft/react-laba-international-2/blob/main/lectures/08-js-advanced-1/task.md#2-deep-clone
// task 3 https://github.com/qaprosoft/react-laba-international-2/blob/main/lectures/08-js-advanced-1/task.md#3-a-long-time-ago
// task 4 https://github.com/qaprosoft/react-laba-international-2/blob/main/lectures/08-js-advanced-1/task.md#4-random-dates
// task 5 https://www.codewars.com/kata/merged-objects
// task 6 https://www.codewars.com/kata/547f1a8d4a437abdf800055c
// task 7 https://www.codewars.com/kata/54834b3559e638b39d0009a2
// task 8 https://www.codewars.com/kata/partial-keys
// task 9 https://www.codewars.com/kata/human-readable-time