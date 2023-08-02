// task 1 http://www.codewars.com/kata/opposite-number
const opposite = number => -number;

// task 2 http://www.codewars.com/kata/basic-mathematical-operations
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
    default:
      return 'Operation must be one of + - * /';
  }
}

// task 3 http://www.codewars.com/kata/printing-array-elements-with-comma-delimiters
const printArray = array => array.join(',');

// task 4 http://www.codewars.com/kata/transportation-on-vacation
const rentalCarCost = d => {
  const CAR_COST_PER_DAY = 40;
  const DISCOUNT_AFTER_7_DAYS = 50;
  const DISCOUNT_AFTER_3_DAYS = 20;

  // calculate whole sum spent on a car
  let totalCost = CAR_COST_PER_DAY * d;

  // calculate discount
  if (d >= 7) totalCost -= DISCOUNT_AFTER_7_DAYS;
  else if (d >= 3) totalCost -= DISCOUNT_AFTER_3_DAYS;

  return totalCost;
};

// task 5 http://www.codewars.com/kata/calculating-with-functions
const zero = operation => (operation ? operation(0) : 0);
const one = operation => (operation ? operation(1) : 1);
const two = operation => (operation ? operation(2) : 2);
const three = operation => (operation ? operation(3) : 3);
const four = operation => (operation ? operation(4) : 4);
const five = operation => (operation ? operation(5) : 5);
const six = operation => (operation ? operation(6) : 6);
const seven = operation => (operation ? operation(7) : 7);
const eight = operation => (operation ? operation(8) : 8);
const nine = operation => (operation ? operation(9) : 9);

const plus = (num1, num2) => {
  if (num2 === undefined) return plus.bind(null, num1);
  return num2 + num1;
};
const minus = (num1, num2) => {
  if (num2 === undefined) return minus.bind(null, num1);
  return num2 - num1;
};
const times = (num1, num2) => {
  if (num2 === undefined) return times.bind(null, num1);
  return num2 * num1;
};
const dividedBy = (num1, num2) => {
  if (num2 === undefined) return dividedBy.bind(null, num1);
  return Math.floor(num2 / num1);
};

// task 6 http://www.codewars.com/kata/get-the-middle-character
const getMiddle = s => {
  const middleIndex = (s.length - 1) / 2;
  const middleIndexRounded = parseInt(middleIndex);
  return middleIndexRounded == middleIndex
    ? s[middleIndex]
    : s[middleIndexRounded] + s[middleIndexRounded + 1];
};

// task 7 http://www.codewars.com/kata/partition-on
const partitionOn = (pred, items) => {
  const falseArr = items.filter(n => !pred(n));
  const trueArr = items.filter(n => pred(n));

  items.splice(0, items.length, ...falseArr, ...trueArr);
  return falseArr.length;
};

// task 8 http://www.codewars.com/kata/word-count
// link is invalid

// task 9 https://www.codewars.com/kata/find-the-odd-int/
const findOdd = A => {
  let numberCountMap = {};
  A.forEach(n => {
    numberCountMap[n] ? (numberCountMap[n] += 1) : (numberCountMap[n] = 1);
  });

  for (let n in numberCountMap) {
    if (numberCountMap[n] % 2 !== 0) return +n;
  }
};

// task 10 https://www.codewars.com/kata/find-the-parity-outlier
const findOutlier = integers => {
  const evenArr = integers.filter(n => n % 2 === 0);

  return evenArr.length === 1 ? evenArr[0] : integers.find(n => n % 2 !== 0);
};

// task 11 https://www.codewars.com/kata/zipwith
const zipWith = (fn, a0, a1) => {
  const minLength = a0.length < a1.length ? a0.length : a1.length;
  const newArr = [];
  for (let i = 0; i < minLength; i++) {
    newArr[i] = fn(a0[i], a1[i]);
  }
  return newArr;
};

// task 12 https://www.codewars.com/kata/filter-the-number
const filterString = function (value) {
  const numbers = value.split('').filter(n => !isNaN(n));
  return +numbers.join('');
};

// task 13 https://www.codewars.com/kata/n-th-fibonacci
// function using Binet's formula
// https://artofproblemsolving.com/wiki/index.php/Binet%27s_Formula
const nthFibo = n => {
  // decrement n because formula considers 1 as fibonacci numbers start
  --n;
  const phi = (Math.sqrt(5) + 1) / 2;
  return Math.floor((Math.pow(phi, n) - Math.pow(-phi, -n)) / Math.sqrt(5));
};

// task 13 computing each next fibonacci number
const nthFibo2 = n => {
  let [prev, curr] = [0, 1];
  for (let i = 1; i < n; i++) [prev, curr] = [curr, prev + curr];
  return prev;
};

// task 14 https://www.codewars.com/kata/cat-and-mouse-2d-version/
const catMouse = (map, moves) => {
  if (!map.includes('C') || !map.includes('m'))
    return 'boring without two animals';

  let catY, catX, mouseY, mouseX;

  const mapLines = map.split('\n');
  mapLines.forEach((line, index) => {
    if (line.includes('C')) catY = index;
    if (line.includes('m')) mouseY = index;
  });

  catX = mapLines[catY].indexOf('C');
  mouseX = mapLines[mouseY].indexOf('m');

  return Math.abs(catY - mouseY) + Math.abs(catX - mouseX) <= moves
    ? 'Caught!'
    : 'Escaped!';
};

// task 15 https://www.codewars.com/kata/duplicate-encoder
const duplicateEncode = word => {
  let charCountMap = {};
  for (let char of word) {
    char = char.toLowerCase();
    charCountMap[char] ? (charCountMap[char] += 1) : (charCountMap[char] = 1);
  }

  let encodedString = '';
  for (let char of word)
    encodedString += charCountMap[char.toLowerCase()] > 1 ? ')' : '(';

  return encodedString;
};

// task 16 https://www.codewars.com/kata/5693239fb761dc8670000001
// check for leading 0
const isInvalidNumber = num => num.length > 1 && num.charAt(0) === '0';

// recursive function
// checks if a and b add up to c
// if not checks if it is possible to split c into two new numbers d and e
// so that a + b == d
const checkSum = (res, a, b, c) => {
  if (isInvalidNumber(a) || isInvalidNumber(b)) return false;

  let sum = (parseInt(a) + parseInt(b)).toString();
  if (sum === c) {
    res.push(sum);
    return true;
  }

  // check if there are possible next sequence
  // if sum length is greater than c
  // OR if c string doesn't start with sum,
  // than no further sequence is possible
  if (c.length <= sum.length || sum !== c.slice(0, sum.length)) return false;
  else {
    res.push(sum);

    // check next couple of numbers
    // where b is first number, sum is second and
    // c string without sum prefix is third number
    return checkSum(res, b, sum, c.slice(sum.length));
  }
};

const findAdditiveNumbers = num => {
  let res = [];

  for (let i = 1; i <= num.length / 2; i++) {
    for (let j = 1; j <= (num.length - i) / 2; j++) {
      const a = num.slice(0, i);
      const b = num.slice(i, i + j);
      const c = num.slice(i + j);
      if (checkSum(res, a, b, c))
        // add first two numbers to the start
        // if sequence was found
        return [a, b, ...res];
      // clear res for next iteration
      else res = [];
    }
  }

  return res;
};

// task 17 https://www.codewars.com/kata/576757b1df89ecf5bd00073b
const towerBuilder = nFloors => {
  const tower = [];
  const baseLength = nFloors * 2 - 1;
  const middleIndex = Math.floor(baseLength / 2);
  for (let i = 1; i <= nFloors; i++) {
    const floor = Array.from({length: baseLength}, () => ' ');
    floor[middleIndex] = '*';
    for (let j = 1; j < i; j++) {
      floor[middleIndex + j] = '*';
      floor[middleIndex - j] = '*';
    }
    tower.push(floor.join(''));
  }
  return tower;
};

// task 18 https://www.codewars.com/kata/58f5c63f1e26ecda7e000029
const wave = str => {
  const resultArr = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === ' ') continue;
    resultArr.push(str.slice(0, i) + str[i].toUpperCase() + str.slice(i + 1));
  }
  return resultArr;
};

// task 19 https://www.codewars.com/kata/59d398bb86a6fdf100000031
const stringBreakers = (n, string) => {
  const stringWithoutSpaces = string.replace(/ /g, '');
  let result = '';
  for (let i = 0; i * n < stringWithoutSpaces.length; i++) {
    result += stringWithoutSpaces.slice(i * n, (i + 1) * n) + '\n';
  }
  return result.slice(0, -1); // remove last new line
};

//task 20 https://www.codewars.com/kata/514a024011ea4fb54200004b
const domainName = url => {
  let protocolRelativeUrl = url.replace(/(http[s]?:\/\/)|(www.)/g, '');
  return protocolRelativeUrl.slice(0, protocolRelativeUrl.indexOf('.'));
};
