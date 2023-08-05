// task 1 http://www.codewars.com/kata/opposite-number
function opposite(number) {
  return number * -1;
}

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
      if (value2 === 0) {
        return 'error: division by zero';
      }
      return value1 / value2;
    default:
      throw new Error('error: invalid operation');
  }
}

// task 3 http://www.codewars.com/kata/printing-array-elements-with-comma-delimiters
function printArray(array) {
  return array.toString();
}

// task 4 http://www.codewars.com/kata/transportation-on-vacation
function rentalCarCost(days) {
  const costPerDay = 40
  const discount3To6Days = 20
  const discount7OrMoreDays = 50
  if (days < 3) return days * costPerDay
  if (7 > days && days >= 3) return days * costPerDay - discount3To6Days
  if (days >= 7) return days * costPerDay - discount7OrMoreDays
}


// task 5 http://www.codewars.com/kata/calculating-with-functions
const n = d => f => f ? f(d) : d;
const zero = n(0);
const one = n(1);
const two = n(2);
const three = n(3);
const four = n(4);
const five = n(5);
const six = n(6);
const seven = n(7);
const eight = n(8);
const nine = n(9);

const plus = f => n => n + f;
const minus = f => n => n - f;
const times = f => n => n * f;
const dividedBy = f => n => Math.floor(n / f);

// task 6 http://www.codewars.com/kata/get-the-middle-character
function getMiddle(string) {
  let middleIndex = string.length / 2;
  if (string.length % 2 === 0) {
    return string.slice(middleIndex - 1, middleIndex + 1);
  } else {
    return string.charAt(middleIndex);
  }
}

// task 7 http://www.codewars.com/kata/partition-on
function partitionOn(pred, items) {
  const isTrue = items.filter(el => pred(el));
  const isFalse = items.filter(el => !pred(el));
  items.splice(0, items.length, ...isFalse, ...isTrue);
  return isFalse.length;
}

// task 8 skip

// task 9 https://www.codewars.com/kata/find-the-odd-int/
function findOdd(arr) {
  let odd = {};
  for (let i = 0; i < arr.length; i++) {
    if (odd[arr[i]]) {
      odd[arr[i]]++;
    } else {
      odd[arr[i]] = 1;
    }
  }
  let result;
  for (let key in odd) {
    if (odd[key] % 2 !== 0) {
      result = odd[key];
      return Number(key);
    }
  }
}

// task 10 https://www.codewars.com/kata/find-the-parity-outlier
function findOutlier(integers) {
  let even = 0;
  let odd = 0;
  let tempEven = 0;
  let tempOdd = 0;
  for (let el of integers) {
    if (el % 2 === 0) {
      even++;
      tempEven = el;
    } else {
      odd++;
      tempOdd = el;
    }
  }
  if (even > 1) {
    return tempOdd;
  }
  if (odd > 1) {
    return tempEven;
  }
}

// task 11 https://www.codewars.com/kata/zipwith
function zipWith(fn, a0, a1) {
  let result = [];
  let min = Math.min(a0.length, a1.length);
  for (let i = 0; i < min; i++) {
    result.push(fn(a0[i], a1[i]));
  }
  return result;
}

// task 12 https://www.codewars.com/kata/filter-the-number
function filterString(value) {
  const numbers = value.match(/\d+/g);
  const result = numbers ? numbers.join('') : '';
  return +result;
}

// task 13 https://www.codewars.com/kata/n-th-fibonacci
function nthFibo(n) {
  let a = 0,
    b = 1;

  for (let i = 3; i <= n; i++) {
    let c = a + b;
    a = b;
    b = c;
  }
  return n === 1 ? a : b;
}

// task 14 https://www.codewars.com/kata/cat-and-mouse-2d-version/
function catMouse(map, moves) {
  const rowsMap = map.split('\n');

  const getPos = hero => {
    const pos = [];

    for (let i = 0; i < rowsMap.length; i++) {
      const x = rowsMap[i].indexOf(hero);

      if (x !== -1) {
        pos.push(i + 1);
        pos.push(x + 1);
      }
    }
    return pos;
  };

  const posCat = getPos('C');
  const posMouse = getPos('m');

  if (posCat.length < 2 || posMouse.length < 2)
    return 'boring without two animals';

  let moveY = 0;
  let moveX = 0;

  const calcDistance = (first, second) => {
    const distance = first - second;
    let move = 0;

    const isMore = distance > 0;
    if (isMore) {
      move = distance;
    } else {
      move = distance * -1;
    }

    return move;
  };

  moveY = calcDistance(posCat[0], posMouse[0]);
  moveX = calcDistance(posCat[1], posMouse[1]);

  const remainMoves = moves - moveY - moveX;

  return remainMoves >= 0 ? 'Caught!' : 'Escaped!';
}

// task 15 https://www.codewars.com/kata/duplicate-encoder
function duplicateEncode(word) {
  let unique = '';
  word = word.toLowerCase();

  for (let i = 0; i < word.length; i++) {
    if (word.lastIndexOf(word[i]) === word.indexOf(word[i])) {
      unique += '(';
    } else {
      unique += ')';
    }
  }
  return unique;
}

// task 16 https://www.codewars.com/kata/5693239fb761dc8670000001
function findAdditiveNumbers(string) {
  const length = string.length;

  for (let i = 1; i < length; i++) {
    for (let j = i + 1; j < length; j++) {
      const left = string.slice(0, i);
      const right = string.slice(i, j);

      if ((+left && left[0] === '0') || (+right && right[0] === '0')) continue;

      const full = [left, right];

      for (let k = j; k < length; ) {
        const next = `${+full[full.length - 1] + +full[full.length - 2]}`;

        if (!string.slice(k).startsWith(next)) break;

        full.push(next);
        k += next.length;
      }

      if (full.join('').length === string.length) return full;
    }
  }

  return [];
}

// task 17 https://www.codewars.com/kata/576757b1df89ecf5bd00073b
function towerBuilder(nFloors) {
  let space,
    star,
    tower = [];

  for (let i = 1; i <= nFloors; i++) {
    space = ' '.repeat(nFloors - i);
    star = '*'.repeat(2 * i - 1);
    tower.push(`${space}${star}${space}`);
  }
  return tower;
}

// task 18 https://www.codewars.com/kata/58f5c63f1e26ecda7e000029
function wave(str) {
  let arr = [];

  for (let i = 0; i < str.length; i++) {
    let copy = str.split('');
    if (copy[i] !== ' ') {
      copy[i] = copy[i].toUpperCase();
      arr.push(copy.join(''));
    }
  }
  return arr;
}

// task 19 https://www.codewars.com/kata/59d398bb86a6fdf100000031
function stringBreakers(n, string) {
  string = string.split(' ').join('');
  let stringBreak = '';

  for (let i = 0; i < string.length; i++) {
    if (i % n === 0 && i !== 0) {
      stringBreak = stringBreak + '\n' + string[i];
    } else {
      stringBreak = stringBreak + string[i];
    }
  }
  return stringBreak;
}

// task 20 https://www.codewars.com/kata/514a024011ea4fb54200004b
function domainName(url) {
  url = url.replace('www.', '');
  url = url.replace('http://', '');
  url = url.replace('https://', '');
  return url.substring(0, url.indexOf('.'));
}
