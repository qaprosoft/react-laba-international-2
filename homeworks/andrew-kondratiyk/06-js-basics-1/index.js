// task 1 http://www.codewars.com/kata/opposite-number
const opposite = (number) => -number;

// task 2 http://www.codewars.com/kata/basic-mathematical-operations
const basicOp = (operation, value1, value2) => eval(value1 + operation + value2);

// task 3 http://www.codewars.com/kata/printing-array-elements-with-comma-delimiters
const printArray = (array) => array.join(',');

// task 4 http://www.codewars.com/kata/transportation-on-vacation
const rentalCarCost = (d) => {
  const CAR_COST_PER_DAY = 40;
  const SMALL_DISCOUNT = 20;
  const BIG_DISCOUNT = 50;
  const carCost = d * CAR_COST_PER_DAY;
  let discount = 0;

  if (d < 3) {
    discount = 0;
  } else if (d < 7) {
    discount = SMALL_DISCOUNT;
  } else {
    discount = BIG_DISCOUNT;
  }

  return carCost - discount;
}

// task 5 http://www.codewars.com/kata/calculating-with-functions
function zero(fn) {
  return fn ? fn(0) : 0
}

function one(fn) {
  return fn ? fn(1) : 1
}

function two(fn) {
  return fn ? fn(2) : 2
}

function three(fn) {
  return fn ? fn(3) : 3
}

function four(fn) {
  return fn ? fn(4) : 4
}

function five(fn) {
  return fn ? fn(5) : 5
}

function six(fn) {
  return fn ? fn(6) : 6
}

function seven(fn) {
  return fn ? fn(7) : 7
}

function eight(fn) {
  return fn ? fn(8) : 8
}

function nine(fn) {
  return fn ? fn(9) : 9
}

function plus(value2) {
  return function (value1) {
    return Math.trunc(value1 + value2)
  }
}

function minus(value2) {
  return function (value1) {
    return Math.trunc(value1 - value2)
  }
}

function times(value2) {
  return function (value1) {
    return Math.trunc(value1 * value2)
  }
}

function dividedBy(value2) {
  return function (value1) {
    return Math.trunc(value1 / value2)
  }
}

// task 6 http://www.codewars.com/kata/get-the-middle-character
const getMiddle = (s) => {
  const stringLength = s.length;
  const middleIndex = (stringLength - 1) / 2;
  if (middleIndex % 1 !== 0) {
    return s[Math.floor(middleIndex)] + s[Math.ceil(middleIndex)]
  }

  return s[middleIndex];
}

// task 7 http://www.codewars.com/kata/partition-on
const partitionOn = (pred, items) => {
  const falseItems = items.filter(item => !pred(item));
  const trueItems = items.filter(item => pred(item));
  items.splice(0, items.length, ...falseItems, ...trueItems);

  return falseItems.length;
};

// task 8 http://www.codewars.com/kata/word-count
// task 9 https://www.codewars.com/kata/find-the-odd-int/
const findOdd = (array) => {
  const set = new Set();
  array.forEach(e => set.has(e) ? set.delete(e) : set.add(e));
  return [...set][0];
}

// task 10 https://www.codewars.com/kata/find-the-parity-outlier
const findOutlier = (integers) => {
  const isArrayOdd = integers.filter(x => x % 2).length === 1;

  return integers.find(x => (isArrayOdd ? Math.abs(x % 2) === 1 : x % 2 === 0))
}

// task 11 https://www.codewars.com/kata/zipwith
const zipWith = (fn, a0, a1) => {
  return a0.map((item, index) => {
    if (a0[index] !== undefined && a1[index] !== undefined) {
      return fn(a0[index], a1[index])
    }
  }).filter(item => item !== undefined);
};

// task 12 https://www.codewars.com/kata/filter-the-number
const filterString = (value) => +value.replace(/\D/g, '');

// task 13 https://www.codewars.com/kata/n-th-fibonacci
const nthFibo = (n) => {
  const sequence = [0, 1];

  for (let i = 2; i <= n; i++) {
    const nextNumber = sequence[i - 1] + sequence[i - 2];
    sequence.push(nextNumber);
  }

  return sequence[n - 1];
}

// task 14 https://www.codewars.com/kata/cat-and-mouse-2d-version/
var map=
  `..C......
.........
....m....`;
const catMouse = (map, moves) => {
  const mapMatrix = map.split('\n').map(row => row.split(''));
  const catCoordinates = [];
  const mouseCoordinates = [];
  mapMatrix.forEach((row, rowIndex) => {
    row.forEach((column, columnIndex) => {
      if(mapMatrix[rowIndex][columnIndex] === 'C') {
        catCoordinates.push(rowIndex, columnIndex);
      }
      if(mapMatrix[rowIndex][columnIndex] === 'm') {
        mouseCoordinates.push(rowIndex, columnIndex);
      }
    })
  })

  if(catCoordinates.length === 0 || mouseCoordinates.length === 0) {
    return 'boring without two animals'
  }

  const distance = Math.abs(mouseCoordinates[0] - catCoordinates[0]) + Math.abs(mouseCoordinates[1] - catCoordinates[1]);

  return distance > moves ? 'Escaped!' : 'Caught!';
}

// task 15 https://www.codewars.com/kata/duplicate-encoder
const duplicateEncode = (word) => {
  const lowerCaseWord = word.toLowerCase();
  const charCount = {};

  for (const char of lowerCaseWord) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  return lowerCaseWord
    .split('')
    .map((char) => (charCount[char] === 1 ? '(' : ')'))
    .join('');
};
// task 16 https://www.codewars.com/kata/5693239fb761dc8670000001
// task 17 https://www.codewars.com/kata/576757b1df89ecf5bd00073b
const towerBuilder = (nFloors) => {
  const towerWidth = (nFloors - 1) * 2 + 1;

  return new Array(nFloors).fill('').map((floor, index) => {
    const starsCount = index * 2 + 1;
    const sideEmptyBlocks = (towerWidth - starsCount) / 2;
    return ' '.repeat(sideEmptyBlocks) + '*'.repeat(starsCount) + ' '.repeat(sideEmptyBlocks);
  })
}

// task 18 https://www.codewars.com/kata/58f5c63f1e26ecda7e000029
const wave = (str) => {
  const strLowerCase  = str.toLowerCase();
  return strLowerCase.split('').map((char, index) => {
    if(char === ' ') {
      return
    }
    return strLowerCase.slice(0, index) + char.toUpperCase() + strLowerCase.slice(index + 1, strLowerCase.length)
  }).filter(item => item !== undefined);
}

// task 19 https://www.codewars.com/kata/59d398bb86a6fdf100000031
const stringBreakers = (n, string) => {
  const joinedString = string.split(' ').join('');
  const breakersCount = Math.ceil(joinedString.length / n);

  return new Array(breakersCount).fill('').map((item, index) => joinedString.slice(index * n, index * n + n)).join('\n')
}

// task 20 https://www.codewars.com/kata/514a024011ea4fb54200004b
const domainName = (url) => {
  const regex = /^(?:https?:\/\/)?(?:www\.)?([a-z0-9.-]+)(?:\/|$)/i;
  const matches = url.match(regex);
  return matches[1].split('.')[0]
}