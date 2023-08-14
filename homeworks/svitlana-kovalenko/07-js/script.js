'use strict';
// https://www.codewars.com/kata/5715eaedb436cf5606000381
function positiveSum(arr) {
  const sumWithInitial = arr.reduce((accumulator, currentValue) => {
    if (currentValue > 0) {
      return accumulator + currentValue;
    } else {
      return accumulator;
    }
  }, 0);
  return sumWithInitial;
}
// https://www.codewars.com/kata/5a3e1319b6486ac96f000049
function pairs(arr) {
  let counter = 0;
  for (let i = 0; i < arr.length; i += 2) {
    if (arr[i] + 1 === arr[i + 1] || arr[i] - 1 === arr[i + 1]) {
      counter++;
    }
  }
  return counter;
}
// https://www.codewars.com/kata/5aba780a6a176b029800041c
function maxMultiple(divisor, bound) {
  return Math.floor(bound / divisor) * divisor;
}
// https://www.codewars.com/kata/514a6336889283a3d2000001
function getEvenNumbers(numbersArray) {
  return numbersArray.filter(odd => odd % 2 === 0);
}
// https://www.codewars.com/kata/566044325f8fddc1c000002c
function evenChars(string) {
  const res = [];
  string = string.split('');
  if (string.length > 1 && string.length < 100) {
    for (let i = 0; i < string.length; i++) {
      i % 2 !== 0 ? res.push(string[i]) : null;
    }
    return res;
  } else {
    return 'invalid string';
  }
}
// https://www.codewars.com/kata/545a4c5a61aa4c6916000755
function gimme(triplet) {
  let middleIndex = [];
  triplet.forEach(el => {
    if (Math.max(...triplet) !== el && Math.min(...triplet) !== el) {
      middleIndex = triplet.indexOf(el);
    }
  });
  return middleIndex;
}
// https://www.codewars.com/kata/578553c3a1b8d5c40300037c
const binaryArrayToNumber = arr => {
  arr = arr.join('');
  return parseInt(arr, 2);
};
// https://www.codewars.com/kata/585d7d5adb20cf33cb000235
function findUniq(arr) {
  return arr.filter((el, i, arr) => arr.indexOf(el) === arr.lastIndexOf(el));
}
