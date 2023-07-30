// Task 1: https://www.codewars.com/kata/56dec885c54a926dcd001095/train/javascript
function opposite(number) {
  return -number;
}

// Task 2: https://www.codewars.com/kata/57356c55867b9b7a60000bd7/train/javascript
function basicOp(operation, value1, value2) {
  return eval(value1 + operation + value2);
}

// Task 3: https://www.codewars.com/kata/56e2f59fb2ed128081001328/train/javascript
function printArray(array) {
  return array.join();
}

// Task 4: https://www.codewars.com/kata/568d0dd208ee69389d000016/train/javascript
function rentalCarCost(days) {
  const rentPrice = 40;
  let discount = 0;

  if (days >= 7) {
    discount = 50;
  } else if (days >= 3) {
    discount = 20;
  }

  return days * rentPrice - discount;
}

// Task 5: https://www.codewars.com/kata/525f3eda17c7cd9f9e000b39/train/javascript
const zero = operator => (operator ? operator(0) : 0);
const one = operator => (operator ? operator(1) : 1);
const two = operator => (operator ? operator(2) : 2);
const three = operator => (operator ? operator(3) : 3);
const four = operator => (operator ? operator(4) : 4);
const five = operator => (operator ? operator(5) : 5);
const six = operator => (operator ? operator(6) : 6);
const seven = operator => (operator ? operator(7) : 7);
const eight = operator => (operator ? operator(8) : 8);
const nine = operator => (operator ? operator(9) : 9);

const plus = operandRight => operandLeft => operandLeft + operandRight;
const minus = operandRight => operandLeft => operandLeft - operandRight;
const times = operandRight => operandLeft => operandLeft * operandRight;
const dividedBy = operandRight => operandLeft =>
  Math.trunc(operandLeft / operandRight);

// Task 6: https://www.codewars.com/kata/56747fd5cb988479af000028/train/javascript
function getMiddle(str) {
  const startIndex = Math.ceil(str.length / 2) - 1;
  const endIndex = Math.floor(str.length / 2) + 1;
  return str.slice(startIndex, endIndex);
}

// Task 7: https://www.codewars.com/kata/525a037c82bf42b9f800029b/train/javascript
function partitionOn(pred, items) {
  let firstTrueIndex = 0;

  for (let currIndex = 0; currIndex < items.length; currIndex++) {
    const currItem = items[currIndex];
    if (pred(currItem)) continue;

    for (let swapIndex = currIndex; swapIndex > firstTrueIndex; swapIndex--) {
      items[swapIndex] = items[swapIndex - 1];
    }

    items[firstTrueIndex] = currItem;
    firstTrueIndex += 1;
  }

  return firstTrueIndex;
}

// Task 8: https://www.codewars.com/kata/word-count
// 404: No kata in this link

// Task 9: https://www.codewars.com/kata/54da5a58ea159efa38000836/train/javascript
function findOdd(numbers) {
  const occurrence = {};
  numbers.forEach(number => {
    if (occurrence.hasOwnProperty(number)) {
      occurrence[number]++;
    } else {
      occurrence[number] = 1;
    }
  });

  for (let [number, occur] of Object.entries(occurrence)) {
    if (occur % 2 === 1) return +number;
  }
}

// Task 10: https://www.codewars.com/kata/5526fc09a1bbd946250002dc/train/javascript
function findOutlier(integers) {
  const first = Math.abs(integers[0]) % 2;
  const second = Math.abs(integers[1]) % 2;
  const third = Math.abs(integers[2]) % 2;

  // check if normal type is even or odd
  const normalType = first + second + third > 1 ? 1 : 0;

  // find the outlier
  for (let number of integers) {
    if (Math.abs(number) % 2 !== normalType) {
      return number;
    }
  }
}

// Task 11: https://www.codewars.com/kata/5825792ada030e9601000782/train/javascript
function zipWith(zipFunc, firstArr, secondArr) {
  const length = Math.min(firstArr.length, secondArr.length);

  const zippedArr = [];
  for (let i = 0; i < length; i++) {
    zippedArr.push(zipFunc(firstArr[i], secondArr[i]));
  }

  return zippedArr;
}

// Task 12: https://www.codewars.com/kata/55b051fac50a3292a9000025/train/javascript
function filterString(value) {
  let number = '';
  for (let char of value) {
    if (!isNaN(char)) {
      number += char;
    }
  }

  return Number.parseInt(number);
}

// Task 13: https://www.codewars.com/kata/522551eee9abb932420004a0/train/javascript
function nthFibo(n) {
  let leftNumber = 0;
  let rightNumber = 1;
  for (let i = 1; i < n; i++) {
    const nextFib = leftNumber + rightNumber;
    leftNumber = rightNumber;
    rightNumber = nextFib;
  }

  return leftNumber;
}

// Task 14: https://www.codewars.com/kata/57f8842367c96a89dc00018e/train/javascript
function catMouse(map, moves) {
  const catIndex = map.indexOf('C');
  const mouseIndex = map.indexOf('m');

  if (catIndex === -1 || mouseIndex === -1) {
    return 'boring without two animals';
  }

  // Find cat and mouse location
  const rowLength = map.indexOf('\n') + 1;
  const catRow = Math.trunc(catIndex / rowLength);
  const mouseRow = Math.trunc(mouseIndex / rowLength);
  const mouseCol = mouseIndex % rowLength;
  const catCol = catIndex % rowLength;

  if (Math.abs(catRow - mouseRow) + Math.abs(catCol - mouseCol) > moves) {
    return 'Escaped!';
  }
  return 'Caught!';
}

// Task 15: https://www.codewars.com/kata/54b42f9314d9229fd6000d9c/train/javascript
function duplicateEncode(word) {
  // create frequency map: character -> occurence
  const lowerCaseString = word.toLowerCase();
  const charOccurence = {};
  for (let char of lowerCaseString) {
    if (charOccurence.hasOwnProperty(char)) {
      charOccurence[char]++;
    } else {
      charOccurence[char] = 1;
    }
  }

  let newWord = '';
  for (let char of lowerCaseString) {
    if (charOccurence[char] > 1) {
      newWord += ')';
    } else {
      newWord += '(';
    }
  }

  return newWord;
}

// Task 16: https://www.codewars.com/kata/5693239fb761dc8670000001/train/javascript
function findAdditiveNumbers(digits) {
  // Iterate for all possible number1 and number2
  for (let i = 1; i < digits.length; i++) {
    for (let j = i + 1; j < digits.length; j++) {
      const number1 = digits.slice(0, i);
      const number2 = digits.slice(i, j);
      if (number2.startsWith('0') && number2.length > 1) continue;

      // Initialize the sequence with first 2 numbers
      const sequence = [number1, number2];

      // Fill up the rest of the sequence
      let k = j;
      while (k < digits.length) {
        const lastFirst = Number(sequence[sequence.length - 1]);
        const lastSecond = Number(sequence[sequence.length - 2]);
        const next = String(lastFirst + lastSecond);
        if (digits.startsWith(next, k)) {
          sequence.push(next);
          k += next.length;
        } else {
          break;
        }
      }

      if (k === digits.length && sequence.length > 2) {
        return sequence;
      }
    }
  }

  return [];
}

// Task 17: https://www.codewars.com/kata/576757b1df89ecf5bd00073b/train/javascript
function towerBuilder(nFloors) {
  const tower = [];
  const maxStars = 2 * nFloors - 1;

  for (let i = 0; i < nFloors; i++) {
    const stars = '*'.repeat(2 * i + 1);
    const spaces = ' '.repeat(nFloors - i - 1);
    const floor = spaces + stars + spaces;
    tower.push(floor);
  }

  return tower;
}

// Task 18: https://www.codewars.com/kata/58f5c63f1e26ecda7e000029/train/javascript
function wave(str) {
  const result = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== ' ') {
      const newStr =
        str.slice(0, i) + str[i].toUpperCase() + str.slice(i + 1, str.length);
      result.push(newStr);
    }
  }

  return result;
}

// Task 19: https://www.codewars.com/kata/59d398bb86a6fdf100000031/train/javascript
function stringBreakers(n, string) {
  const substrings = [];
  const spaceRemoved = string.replace(/\s/g, '');
  for (let i = 0; i < string.length; i += n) {
    const substring = spaceRemoved.slice(i, i + n);
    substrings.push(substring);
  }

  return substrings.join('\n');
}

// Task 20: https://www.codewars.com/kata/514a024011ea4fb54200004b/train/javascript
function domainName(url) {
  // Remove protocol and www
  let domain = url.replace(/https?:\/\//i, '').replace(/www\./i, '');

  return domain.split('.')[0];
}
