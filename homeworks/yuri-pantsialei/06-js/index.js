// task 1 http://www.codewars.com/kata/opposite-number

const opposite = number => -number;

// task 2 http://www.codewars.com/kata/basic-mathematical-operations

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
    default:
      return 0;
  }
}

// task 3 http://www.codewars.com/kata/printing-array-elements-with-comma-delimiters

const printArray = array => array.join(',');

// task 4 http://www.codewars.com/kata/transportation-on-vacation

const rentalCarCost = d => {
  const totalSum = d * 40;
  return d > 6 ? totalSum - 50 : d > 2 ? totalSum - 20 : totalSum;
};

// task 5 http://www.codewars.com/kata/calculating-with-functions

function zero(calcFunc) {
  if (calcFunc) {
    return calcFunc(0);
  }
  return 0;
}
function one(calcFunc) {
  if (calcFunc) {
    return calcFunc(1);
  }
  return 1;
}
function two(calcFunc) {
  if (calcFunc) {
    return calcFunc(2);
  }
  return 2;
}
function three(calcFunc) {
  if (calcFunc) {
    return calcFunc(3);
  }
  return 3;
}
function four(calcFunc) {
  if (calcFunc) {
    return calcFunc(4);
  }
  return 4;
}
function five(calcFunc) {
  if (calcFunc) {
    return calcFunc(5);
  }
  return 5;
}
function six(calcFunc) {
  if (calcFunc) {
    return calcFunc(6);
  }
  return 6;
}
function seven(calcFunc) {
  if (calcFunc) {
    return calcFunc(7);
  }
  return 7;
}
function eight(calcFunc) {
  if (calcFunc) {
    return calcFunc(8);
  }
  return 8;
}
function nine(calcFunc) {
  if (calcFunc) {
    return calcFunc(9);
  }
  return 9;
}

function plus(a) {
  return function (b) {
    return a + b;
  };
}
function minus(a) {
  return function (b) {
    return b - a;
  };
}
function times(a) {
  return function (b) {
    return a * b;
  };
}
function dividedBy(a) {
  return function (b) {
    return Math.floor(b / a);
  };
}

// task 6 http://www.codewars.com/kata/get-the-middle-character

function getMiddle(s) {
  const evenNum = s.length / 2 - 1;
  const oddNum = Math.floor(s.length / 2);
  return s.length % 2 === 0
    ? s.split('').splice(evenNum, 2).join('')
    : s.split('').splice(oddNum, 1).join('');
}

// task 7 http://www.codewars.com/kata/partition-on

function partitionOn(pred, items) {
  const arrT = [];
  const arrF = [];

  items.forEach(e => {
    if (pred(e)) {
      arrT.push(e);
    } else {
      arrF.push(e);
    }
  });

  const newArr = [...arrF, ...arrT];

  for (let i = 0; i < items.length; i++) {
    items[i] = newArr[i];
  }

  return arrF.length;
}

// task 8 http://www.codewars.com/kata/word-count
//skip

//task 9 https://www.codewars.com/kata/find-the-odd-int/

function findOdd(A) {
  if (A.length === 1) {
    return A[0];
  }
  const sortedArr = A.sort((a, b) => a - b);
  for (let i = 1; i < sortedArr.length + 1; i++) {
    if (sortedArr[i] !== sortedArr[i - 1]) {
      return sortedArr[i - 1];
    }
    i++;
  }

  return;
}

//task 10 https://www.codewars.com/kata/find-the-parity-outlier

function findOutlier(integers) {
  const oddArr = [];
  const evenArr = [];
  for (let i = 0; i < integers.length; i++) {
    if (integers[i] % 2 === 0) {
      evenArr.push(integers[i]);
    } else {
      oddArr.push(integers[i]);
    }
    if (i > 1 && oddArr >= 1 && evenArr >= 1) {
      break;
    }
  }
  return oddArr.length === 1 ? oddArr[0] : evenArr[0];
}

//task 11 https://www.codewars.com/kata/zipwith

function zipWith(fn, a0, a1) {
  const resultArr = [];
  const operationsLength = a0.length <= a1.length ? a0.length : a1.length;

  for (let i = 0; i < operationsLength; i++) {
    resultArr[i] = fn(a0[i], a1[i]);
  }

  return resultArr;
}

//task 12 https://www.codewars.com/kata/filter-the-number

function filterString(value) {
  const numbersArr = [];
  value.split('').forEach(e => {
    if (typeof +e === 'number' && !isNaN(e)) {
      numbersArr.push(e);
    }
  });
  return +numbersArr.join('');
}

//task 13 https://www.codewars.com/kata/n-th-fibonacci

function nthFibo(n) {
  let n1 = 0;
  let n2 = 1;
  let sum = 0;

  if (n === 1) return n1;
  if (n === 2) return n2;

  for (let i = 0; i < n - 2; i++) {
    sum = n1 + n2;
    n1 = n2;
    n2 = sum;
  }

  return sum;
}

//task 14 https://www.codewars.com/kata/cat-and-mouse-2d-version/

function catMouse(map, moves) {
  const arr = map.split('');
  let stringNum = 1;
  let columnNum = 0;
  const catCoordinates = {string: null, column: null};
  const mouseCoordinates = {string: null, column: null};
  for (let i = 0; i < arr.length; i++) {
    columnNum++;
    if (arr[i] !== '.' && arr[i] !== 'C' && arr[i] !== 'm') {
      stringNum++;
      columnNum = 0;
    }

    if (arr[i] === 'C') {
      catCoordinates.string = stringNum;
      catCoordinates.column = columnNum;
    }

    if (arr[i] === 'm') {
      mouseCoordinates.string = stringNum;
      mouseCoordinates.column = columnNum;
    }
  }
  if (!catCoordinates.string || !mouseCoordinates.string)
    return 'boring without two animals';

  const resultCalculating =
    Math.abs(catCoordinates.string - mouseCoordinates.string) +
    Math.abs(catCoordinates.column - mouseCoordinates.column);

  return resultCalculating <= moves ? 'Caught!' : 'Escaped!';
}

//task 15 https://www.codewars.com/kata/duplicate-encoder

function duplicateEncode(word) {
  const wordArr = word.toLowerCase().split('');
  const arr = [];
  for (let i = 0; i < wordArr.length; i++) {
    arr.push(
      wordArr.indexOf(wordArr[i]) == wordArr.lastIndexOf(wordArr[i])
        ? '('
        : ')',
    );
  }
  return arr.join('');
}

// task 16 https://www.codewars.com/kata/5693239fb761dc8670000001

function getAdditiveSequence(num1, num2, aSuffix) {
  let suffix = aSuffix.slice();
  let result = [num1.toString(), num2.toString()];

  let a = num1;
  let b = num2;
  let c = a + b;

  while (suffix.startsWith(c.toString()) && suffix.length > 0) {
    result.push(c.toString());
    suffix = suffix.slice(c.toString().length);

    a = b;
    b = c;
    c = a + b;
  }

  return suffix.length == 0 ? result : [];
}

function findAdditiveNumbers(num) {
  const n = num.length;
  let result = [];

  for (let i = 1; i < n; i++) {
    const num1Str = num.slice(0, i);

    for (let j = i + 1; j < n; j++) {
      const num2Str = num.slice(i, j);

      if (num2Str.length > 1 && num2Str.startsWith('0')) {
        break;
      }

      const num1 = parseInt(num1Str);
      const num2 = parseInt(num2Str);
      const suffix = num.slice(num1Str.length + num2Str.length);

      result = getAdditiveSequence(num1, num2, suffix);
      if (result.length != 0) {
        return result;
      }
    }
  }

  return result;
}

// task 17 https://www.codewars.com/kata/576757b1df89ecf5bd00073b

function towerBuilder(nFloors) {
  const arr = [];

  for (let i = 1; i <= nFloors; i++) {
    const stars = '*'.repeat(i * 2 - 1).split('');
    const emptyStars = ' '.repeat(nFloors - i);
    const starsString = [...emptyStars, ...stars, ...emptyStars];
    arr.push(starsString.join(''));
  }
  return arr;
}

// task 18 https://www.codewars.com/kata/58f5c63f1e26ecda7e000029

function wave(str) {
  let s = str.split('');
  const arr = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== s[i].toUpperCase()) {
      s = s.map((m, j) => (j === i ? m.toUpperCase() : m));
      arr.push(s.join(''));
      s = str.split('');
    }
  }
  return arr;
}

// task 19 https://www.codewars.com/kata/59d398bb86a6fdf100000031

function stringBreakers(n, string) {
  const splitedString = string.replace(/ /g, '').split('');
  const arr = [];
  do {
    if (n > splitedString.length) {
      arr.push(splitedString.splice(0, splitedString.length));
    } else {
      arr.push(splitedString.splice(0, n));
    }
  } while (splitedString.length);

  return arr.map(m => m.join('')).join('\n');
}

// task 20 https://www.codewars.com/kata/514a024011ea4fb54200004b

function domainName(url) {
  return url
    .replace(/^https?:\/\//, '')
    .replace(/^www\./, '')
    .replace(/\..*/, '');
}
