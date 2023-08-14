// task 1 http://www.codewars.com/kata/opposite-number
const opposite = number => -number;

// task 2 https://www.codewars.com/kata/basic-mathematical-operations
const basicOp = (operation, value1, value2) => {
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
};

// task 3 https://www.codewars.com/kata/printing-array-elements-with-comma-delimiters
const printArray = array => array.join(',');

// task 4 https://www.codewars.com/kata/transportation-on-vacation
const rentalCarCost = days => {
  const dailyPrice = 40;
  const sevenDaysDiscount = 50;
  const threeDaysDiscount = 20;
  let price = days * dailyPrice;

  if (days >= 7) {
    price -= sevenDaysDiscount;
  } else if (days >= 3) {
    price -= threeDaysDiscount;
  }

  return price;
};

// task 5 https://www.codewars.com/kata/calculating-with-functions
const zero = fn => (fn ? fn(0) : 0);
const one = fn => (fn ? fn(1) : 1);
const two = fn => (fn ? fn(2) : 2);
const three = fn => (fn ? fn(3) : 3);
const four = fn => (fn ? fn(4) : 4);
const five = fn => (fn ? fn(5) : 5);
const six = fn => (fn ? fn(6) : 6);
const seven = fn => (fn ? fn(7) : 7);
const eight = fn => (fn ? fn(8) : 8);
const nine = fn => (fn ? fn(9) : 9);

const plus = secondOperand => firstOperand => secondOperand + firstOperand;
const minus = secondOperand => firstOperand => firstOperand - secondOperand;
const dividedBy = secondOperand => firstOperand =>
  Math.floor(firstOperand / secondOperand);
const times = secondOperand => firstOperand => secondOperand * firstOperand;

// task 6 https://www.codewars.com/kata/get-the-middle-character
const getMiddle = str => {
  const length = str.length;

  return length % 2
    ? str[Math.floor(length / 2)]
    : str[length / 2 - 1] + str[length / 2];
};

// task 7 https://www.codewars.com/kata/partition-on
const partitionOn = (pred, items) => {
  const untruthful = [];
  const truthful = [];

  items.forEach(el => (pred(el) ? truthful.push(el) : untruthful.push(el)));
  items.splice(0, items.length, ...untruthful, ...truthful);

  return untruthful.length;
};

// task 8 http://www.codewars.com/kata/word-count
//not available

// task 9 https://www.codewars.com/kata/find-the-odd-int
const findOdd = array =>
  array.find(item => array.filter(el => el === item).length % 2);

// task 10 https://www.codewars.com/kata/find-the-parity-outlier
const findOutlier = integers =>
  integers.filter(el => el % 2 === 0).length === 1
    ? integers.filter(el => el % 2 === 0)[0]
    : integers.filter(el => el % 2 !== 0)[0];

// task 11 https://www.codewars.com/kata/zipwith
const zipWith = (fn, array0, array1) => {
  const result = [];
  const minLength = Math.min(array0.length, array1.length);

  for (let i = 0; i < minLength; i++) {
    result.push(fn(array0[i], array1[i]));
  }

  return result;
};

// task 12 https://www.codewars.com/kata/filter-the-number
const filterString = str => +str.replace(/[^\d]/g, '');

// task 13 https://www.codewars.com/kata/n-th-fibonacci
const nthFibo = n => {
  let [previous, current] = [0, 1];

  for (let i = 1; i < n; i++)
    [previous, current] = [current, previous + current];

  return previous;
};

// task 14 https://www.codewars.com/kata/cat-and-mouse-2d-version
const catMouse = (map, moves) => {
  if (/m/gi.test(map) && /c/gi.test(map)) {
    const rows = map.split('\n');

    const catX = rows.map(row => row.indexOf('C')).filter(i => i !== -1)[0];
    const catY = rows.map(row => row.includes('C')).indexOf(true) + 1;

    const mouseX = rows.map(row => row.indexOf('m')).filter(i => i !== -1)[0];
    const mouseY = rows.map(row => row.includes('m')).indexOf(true) + 1;

    return Math.abs(catX - mouseX) + Math.abs(catY - mouseY) <= moves
      ? 'Caught!'
      : 'Escaped!';
  }

  return 'boring without two animals';
};

// task 15 https://www.codewars.com/kata/duplicate-encoder
const duplicateEncode = word =>
  word
    .toLowerCase()
    .split('')
    .map(el =>
      word.toLowerCase().indexOf(el) === word.toLowerCase().lastIndexOf(el)
        ? '('
        : ')',
    )
    .join('');

// task 16 https://www.codewars.com/kata/5693239fb761dc8670000001
const findAdditiveNumbers = num => {
  for (let i = 1; i < num.length - 1; i++) {
    for (j = i + 1; j < num.length; j++) {
      const currentNumbers = [num.slice(0, i), num.slice(i, j)];

      if (
        (currentNumbers[0][0] === '0' && currentNumbers[0].length > 1) ||
        (currentNumbers[1][0] === '0' && currentNumbers[1].length > 1)
      )
        continue;

      let currentString = currentNumbers.join('');

      while (currentString.length < num.length) {
        const sum = (
          +currentNumbers[currentNumbers.length - 1] +
          +currentNumbers[currentNumbers.length - 2]
        ).toString();

        currentString += sum;
        currentNumbers.push(sum);

        if (!num.startsWith(currentString)) break;
      }

      if (currentString === num) return currentNumbers;
    }
  }
  return [];
};

// task 17 https://www.codewars.com/kata/576757b1df89ecf5bd00073b
const towerBuilder = nFloors => {
  const tower = [];

  for (let i = 0; i < nFloors; i++) {
    tower.push(
      ' '.repeat(nFloors - i - 1) +
        '*'.repeat(i * 2 + 1) +
        ' '.repeat(nFloors - i - 1),
    );
  }

  return tower;
};

// task 18 https://www.codewars.com/kata/58f5c63f1e26ecda7e000029
const wave = str => {
  const result = [];

  for (let i = 0; i < str.length; i++) {
    const currentLetter = str[i];

    if (currentLetter !== ' ') {
      result.push(
        str.slice(0, i) + currentLetter.toUpperCase() + str.slice(i + 1),
      );
    }
  }

  return result;
};

// task 19 https://www.codewars.com/kata/59d398bb86a6fdf100000031
const stringBreakers = (n, string) => {
  const result = [];
  const joinedStr = string.replace(/\s/g, '');

  for (let i = 0; i < joinedStr.length; i += n) {
    result.push(joinedStr.slice(i, i + n));
  }

  return result.join('\n');
};

// task 20 https://www.codewars.com/kata/514a024011ea4fb54200004b
const domainName = url =>
  url
    .replace('http://', '')
    .replace('https://', '')
    .replace('www.', '')
    .split('.')[0];
