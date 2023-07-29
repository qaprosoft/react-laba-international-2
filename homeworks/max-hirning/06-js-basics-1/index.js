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
        return 'Error: Division by zero';
      }
      return value1 / value2;
    default:
      throw new Error('Error: Invalid operation'); // also can use this throw "Error: Invalid operation"
    // just heard that it's good experience write as class init
  }
}
// or
const basicOp2 = (operation, value1, value2) =>
  operation === '+'
    ? value1 + value2
    : operation === '-'
    ? value1 - value2
    : operation === '*'
    ? value1 * value2
    : operation === '/'
    ? value2 === 0
      ? 'Error: Division by zero'
      : value1 / value2
    : 'Error: Invalid operation';

// task 3 http://www.codewars.com/kata/printing-array-elements-with-comma-delimiters
function printArray(array) {
  let result = '';
  for (let i = 0; i < array.length; i++) {
    result += `${array[i]}${i + 1 === array.length ? '' : ','}`;
  }
  return result;

  // better solution
  // return array.join(",");
}

// task 4 http://www.codewars.com/kata/transportation-on-vacation
function rentalCarCost(d) {
  const evereyDayRent = 40;
  const sevenMoreDayOff = 50;
  const threeMoreDayOff = 30;

  let result = d * evereyDayRent;
  if (d >= 7) {
    result -= sevenMoreDayOff;
  } else if (d >= 3) {
    result -= threeMoreDayOff;
  }
  return result;
}

// task 5 http://www.codewars.com/kata/calculating-with-functions
function zero(operation) {
  return operation ? operation(0) : 0;
}
function one(operation) {
  return operation ? operation(1) : 1;
}
function two(operation) {
  return operation ? operation(2) : 2;
}
function three(operation) {
  return operation ? operation(3) : 3;
}
function four(operation) {
  return operation ? operation(4) : 4;
}
function five(operation) {
  return operation ? operation(5) : 5;
}
function six(operation) {
  return operation ? operation(6) : 6;
}
function seven(operation) {
  return operation ? operation(7) : 7;
}
function eight(operation) {
  return operation ? operation(8) : 8;
}
function nine(operation) {
  return operation ? operation(9) : 9;
}

function plus(x) {
  return function (y) {
    return x + y;
  };
}

function minus(x) {
  return function (y) {
    return y - x;
  };
}

function times(x) {
  return function (y) {
    return x * y;
  };
}

function dividedBy(x) {
  return function (y) {
    return Math.floor(y / x);
  };
}

// task 6 http://www.codewars.com/kata/get-the-middle-character
function getMiddle(s) {
  const length = s.length;
  const middleIndex = Math.floor(length / 2);

  return length % 2 === 0
    ? s.substring(middleIndex - 1, middleIndex + 1)
    : s.charAt(middleIndex);
}

// task 7 http://www.codewars.com/kata/partition-on
function partitionOn(pred, items) {
  const falseItems = [];
  const trueItems = [];

  // Separate items based on the pred into falseItems and trueItems arrays
  for (const item of items) {
    if (pred(item)) {
      trueItems.push(item);
    } else {
      falseItems.push(item);
    }
  }

  // Merge the falseItems and trueItems back into the original items array
  for (let i = 0; i < items.length; i++) {
    items[i] =
      i < falseItems.length ? falseItems[i] : trueItems[i - falseItems.length];
  }

  return falseItems.length; // Return the index of the first true value (boundary index)
}

// task 8 http://www.codewars.com/kata/word-count       //SKIP

// task 9 https://www.codewars.com/kata/find-the-odd-int/
function findOdd(A) {
  let result;

  const countedObj = A.reduce((res, el) => {
    res[el] = res[el] ? res[el] + 1 : 1;
    return res;
  }, {});

  Object.entries(countedObj).map(el => {
    if (el[1] % 2) {
      result = el[0];
      return true;
    }
  });

  return +result;
}

// task 10 https://www.codewars.com/kata/find-the-parity-outlier
function findOutlier(integers) {
  // Count the number of even and odd integers in the array
  let evenCount = 0;
  let oddCount = 0;
  let evenOutlier = 0;
  let oddOutlier = 0;

  for (const num of integers) {
    if (num % 2 === 0) {
      evenCount++;
      evenOutlier = num; // Keep track of the last even number found
    } else {
      oddCount++;
      oddOutlier = num; // Keep track of the last odd number found
    }
  }

  // Determine if the outlier is the even or odd number
  if (evenCount === 1) {
    return evenOutlier;
  } else {
    return oddOutlier;
  }
}

// task 11 https://www.codewars.com/kata/zipwith
function zipWith(fn, a0, a1) {
  const res = [];
  const length = a0.length > a1.length ? a1.length : a0.length;

  for (let i = 0; i < length; i++) {
    res.push(fn(a0[i], a1[i]));
  }
  return res;
}

// task 12 https://www.codewars.com/kata/filter-the-number
function filterString(value) {
  const numbersOnly = value.match(/\d+/g); // Match all sequences of digits
  const originalNumber = numbersOnly ? numbersOnly.join('') : '';
  return +originalNumber;
}

// task 13 https://www.codewars.com/kata/n-th-fibonacci
function nthFibo(n) {
  if (n === 1) {
    return 0; // Base case for n = 1
  } else if (n === 2) {
    return 1; // Base case for n = 2
  } else {
    return nthFibo(n - 1) + nthFibo(n - 2); // Recursive call
  }
}

// task 14 https://www.codewars.com/kata/cat-and-mouse-2d-version/
function catAndMouse(map, moves) {
  const rows = map.split('\n');
  const numRows = rows.length;
  const numCols = rows[0].length;
  let catRow = -1;
  let catCol = -1;
  let mouseRow = -1;
  let mouseCol = -1;

  // Find the positions of the cat and the mouse
  for (let row = 0; row < numRows; row++) {
    for (let col = 0; col < numCols; col++) {
      if (rows[row][col] === 'C') {
        catRow = row;
        catCol = col;
      } else if (rows[row][col] === 'm') {
        mouseRow = row;
        mouseCol = col;
      }
    }
  }

  // Check if both the cat and the mouse are present
  if (catRow === -1 || catCol === -1 || mouseRow === -1 || mouseCol === -1) {
    return 'boring without two animals';
  }

  // Calculate the distance between the cat and the mouse
  const distance = Math.abs(catRow - mouseRow) + Math.abs(catCol - mouseCol);

  // Check if the cat can catch the mouse within the given moves
  if (distance <= moves) {
    return 'Caught!';
  } else {
    return 'Escaped!';
  }
}

// task 15 https://www.codewars.com/kata/duplicate-encoder
function duplicateEncode(word) {
  word = word.toLowerCase();
  const wordArr = word.split('');

  const countedObj = wordArr.reduce((res, el) => {
    res[el] = res[el] ? res[el] + 1 : 1;
    return res;
  }, {});

  const res = wordArr.map(el => {
    return countedObj[el] > 1 ? ')' : '(';
  });

  return res.join('');
}

// task 16 https://www.codewars.com/kata/5693239fb761dc8670000001
function findAdditiveNumbers(num) {
  for (let i = 0; i < num.length - 2; i++) {
    const first = num.slice(0, i + 1);
    for (let j = i + 1; j < num.length - 1; j++) {
      const second = num.slice(i + 1, j + 1);
      const remain = num.slice(j + 1);

      if (parseInt(first) + parseInt(second) > parseInt(remain)) {
        break;
      }

      const temp = helper(remain, parseInt(first), parseInt(second), [
        first,
        second,
      ]);
      if (!temp || temp.length <= 2) {
        continue;
      }

      let flag = true;
      for (let k = 0; k < temp.length - 2; k++) {
        if (
          parseInt(temp[k]) + parseInt(temp[k + 1]) !==
          parseInt(temp[k + 2])
        ) {
          flag = false;
          break;
        }
      }

      if (
        flag &&
        temp.every(k => k[0] !== '0' || (k[0] === '0' && k.length === 1))
      ) {
        return temp;
      }
    }
  }
  return [];
}

function helper(num, first, second, arr = []) {
  if (num === '') {
    return arr;
  } else if (first + second > parseInt(num)) {
    return null;
  }

  const res = (first + second).toString();
  for (let i = 0; i < num.length; i++) {
    const temp = num.slice(0, i + 1);
    if ((temp.startsWith('0') && i !== 0) || temp[i] !== res[i]) {
      break;
    } else if (first + second === parseInt(temp)) {
      return helper(num.slice(i + 1), second, parseInt(temp), [...arr, temp]);
    }
  }

  arr[arr.length - 1] += num[0];
  return helper(num.slice(1), first, second * 10 + parseInt(num[0]), arr);
}

console.log(findAdditiveNumbers('112358'), ['1', '1', '2', '3', '5', '8']);
console.log(findAdditiveNumbers('199100199'), ['1', '99', '100', '199']);
console.log(findAdditiveNumbers('1023'), []);
console.log(findAdditiveNumbers('112356'), []);
console.log(findAdditiveNumbers('101'), ['1', '0', '1']);
console.log(findAdditiveNumbers('198001519815'), ['19800', '15', '19815']);
console.log(findAdditiveNumbers('10020120'), ['100', '20', '120']);
console.log(findAdditiveNumbers('7916972717643273704501372383'), [
  '7916',
  '9727',
  '17643',
  '27370',
  '45013',
  '72383',
]);

// task 17 https://www.codewars.com/kata/576757b1df89ecf5bd00073b
function towerBuilder(nFloors) {
  const tower = [];

  for (let i = 1; i <= nFloors; i++) {
    const spaces = ' '.repeat(nFloors - i);
    const asterisks = '*'.repeat(i * 2 - 1);
    const floor = spaces + asterisks + spaces;
    tower.push(floor);
  }

  return tower;
}

// task 18 https://www.codewars.com/kata/58f5c63f1e26ecda7e000029
function wave(str) {
  const waveArr = [];

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== ' ') {
      const waveStr = str.slice(0, i) + str[i].toUpperCase() + str.slice(i + 1);
      waveArr.push(waveStr);
    }
  }

  return waveArr;
}

// task 19 https://www.codewars.com/kata/59d398bb86a6fdf100000031
function stringBreakers(n, string) {
  let word = '';
  const res = [];
  string.split('').map(el => {
    if (el !== ' ') {
      if (n === word.length) {
        res.push(word);
        word = el;
      } else {
        word += el;
      }
    }
  });

  res.push(word);
  return res.join('\n');
}

// task 20 https://www.codewars.com/kata/514a024011ea4fb54200004b
function domainName(url) {
  // Remove the protocol part (http:// or https://)
  let domain = url.replace(/(^\w+:|^)\/\//, '');

  // Extract the domain name using a regular expression
  const domainRegex = /^(?:https?:\/\/)?(?:www\.)?([^./]+)/;
  const match = domain.match(domainRegex);

  if (match) {
    return match[1];
  } else {
    return '';
  }
}
