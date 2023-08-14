'use strict';
// 1 --------------------------------------
function opposite(number) {
  return -number;
}
// 2 ---------------------------------------
function basicOp(operation, value1, value2) {
  switch (operation) {
    case '+':
      return value1 + value2;
    case '-':
      return value1 - value2;
    case '*':
      return value1 * value2;
    case '/':
      return value1 / value2;
  }
}
// 3 ------------------------------------------
function printArray(array) {
  return [...array];
}
// 4 --------------------------------------------
function rentalCarCost(d) {
  let result;
  if (d < 3) {
    result = d * 40;
  } else if (d >= 3 && d < 7) {
    result = d * 40 - 20;
  } else if (d >= 7) {
    result = d * 40 - 50;
  }
  return result;
}
// 5 ---------------------------------------------
function zero(operation) {
  let result;
  result = `0${operation || ''}`;
  return eval(result);
}
function one(operation) {
  let result;
  result = `1${operation || ''}`;
  return eval(result);
}
function two(operation) {
  let result;
  result = `2${operation || ''}`;
  return eval(result);
}
function three(operation) {
  let result;
  result = `3${operation || ''}`;
  return eval(result);
}
function four(operation) {
  let result;
  result = `4${operation || ''}`;
  return eval(result);
}
function five(operation) {
  let result;
  result = `5${operation || ''}`;
  return eval(result);
}
function six(operation) {
  let result;
  result = `6${operation || ''}`;
  return eval(result);
}
function seven(operation) {
  let result;
  result = `7${operation || ''}`;
  return eval(result);
}
function eight(operation) {
  let result;
  result = `8${operation || ''}`;
  return eval(result);
}
function nine(operation) {
  let result;
  result = `9${operation || ''}`;
  return eval(result);
}

function plus(n) {
  return `+${n}`;
}
function minus(n) {
  return `-${n}`;
}
function times(n) {
  return `*${n}`;
}
function dividedBy(n) {
  return `/${n}`;
}
// 6 -------------------------------------
function getMiddle(s) {
  if (s.length % 2 === 0) {
    let result = s.length / 2;
    return s[result - 1] + s[result];
  } else {
    let result = parseInt(s.length / 2);
    return s[result];
  }
}
// 7 ---------------------------------------------
function partitionOn(pred, items) {
  const arrTrue = [];
  const arrFalse = [];

  items.forEach(item => {
    if (pred(item)) {
      arrTrue.push(item);
    } else {
      arrFalse.push(item);
    }
  });

  return arrFalse.concat(arrTrue);
}
// 8 ---------------------404 Not Found :(( -----
// 9 --------------------------------------------
function findOdd(A) {
  let result = 0;
  for (let i = 0; i < A.length; i++) {
    result ^= A[i];
  }
  return result;
}
// 10 --------------------------------------------
function findOutlier(integers) {
  const even = integers.filter(item => item % 2 === 0);
  const odd = integers.filter(item => item % 2 !== 0);

  return even.length === 1 ? even[0] : odd[0];
}
// 11 ----------------------------------------------
function zipWith(fn, a0, a1) {
  const zipArr = [];

  const minLength = Math.min(a0.length, a1.length);
  for (let i = 0; i < minLength; i++) {
    zipArr.push(fn(a0[i], a1[i]));
  }
  return zipArr;
}
// 12 -------------------------------------------------
const filterString = function (value) {
  const result = [];
  [...value].forEach(item => {
    if (!isNaN(item)) {
      result.push(item);
    }
  });
  return result.join('');
};
// 13 --------------------------------------------------
function nthFibo(n) {
  if (n === 1) {
    return 0;
  } else if (n === 2) {
    return 1;
  } else {
    return nthFibo(n - 1) + nthFibo(n - 2);
  }
}
