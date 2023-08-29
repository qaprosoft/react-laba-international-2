// task 1 http://www.codewars.com/kata/opposite-number
const opposite = n => -n;

// task 2 http://www.codewars.com/kata/basic-mathematical-operations
const basicOp = (operator, value1, value2) => {
  switch (operator) {
    case '+':
      return value1 + value2;
    case '-':
      return value1 - value2;
    case '*':
      return value1 * value2;
    case '/':
      return value1 / value2;
    default:
      break;
  }
};

// task 3 http://www.codewars.com/kata/printing-array-elements-with-comma-delimiters
const printArray = array => {
  let string = '';
  array.forEach((element, index) => {
    string =
      index !== array.length - 1 ? string + element + ',' : string + element;
  });
  return string;
};

// task 4 http://www.codewars.com/kata/transportation-on-vacation
const rentalCarCost = d => {
  let cost = d * 40;
  if (d >= 3) {
    if (d < 7) cost -= 20;
    else cost -= 50;
  }
  return cost;
};

// task 5 http://www.codewars.com/kata/calculating-with-functions
const calculateString = string => {
  switch (string[1]) {
    case '+':
      return parseInt(string[0]) + parseInt(string[2]);
    case '-':
      return parseInt(string[0]) - parseInt(string[2]);
    case '*':
      return parseInt(string[0]) * parseInt(string[2]);
    case '/':
      return parseInt(parseInt(string[0]) / parseInt(string[2]));
    default:
      break;
  }
};
const zero = operation => {
  if (operation) {
    let string = '0' + operation;
    return calculateString(string);
  } else return 0;
};
const one = operation => {
  if (operation) {
    let string = '1' + operation;
    return calculateString(string);
  } else return 1;
};
const two = operation => {
  if (operation) {
    let string = '2' + operation;
    return calculateString(string);
  } else return 2;
};
const three = operation => {
  if (operation) {
    let string = '3' + operation;
    return calculateString(string);
  } else return 3;
};
const four = operation => {
  if (operation) {
    let string = '4' + operation;
    return calculateString(string);
  } else return 4;
};
const five = operation => {
  if (operation) {
    let string = '5' + operation;
    return calculateString(string);
  } else return 5;
};
const six = operation => {
  if (operation) {
    let string = '6' + operation;
    return calculateString(string);
  } else return 6;
};
const seven = operation => {
  if (operation) {
    let string = '7' + operation;
    return calculateString(string);
  } else return 7;
};
const eight = operation => {
  if (operation) {
    let string = '8' + operation;
    return calculateString(string);
  } else return 8;
};
const nine = operation => {
  if (operation) {
    let string = '9' + operation;
    return calculateString(string);
  } else return 9;
};

const plus = rightOperand => {
  return '+' + rightOperand;
};
const minus = rightOperand => {
  return '-' + rightOperand;
};
const times = rightOperand => {
  return '*' + rightOperand;
};
const dividedBy = rightOperand => {
  return '/' + rightOperand;
};

// task 6 http://www.codewars.com/kata/get-the-middle-character
const getMiddle = word => {
  const middle = parseInt(word.length / 2);
  if (word.length % 2 === 0) return word.slice(middle - 1, middle + 1);
  else return word[middle];
};

// task 7 http://www.codewars.com/kata/partition-on
const partitionOn = (pred, arr) => {
  let tsArray = [],
    fsArray = [];
  arr.forEach(item => (pred(item) ? tsArray.push(item) : fsArray.push(item)));
  arr.splice(0, arr.length, ...fsArray.concat(tsArray));
  return tsArray.length > 0
    ? fsArray.length
    : 'There is no boundary index! All the values are false.';
};

// task 8 http://www.codewars.com/kata/word-count
// Error 404

// task 9 https://www.codewars.com/kata/find-the-odd-int/
const findOdd = array => {
  let activeNumber = array[0],
    counter = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] === activeNumber) counter++;
    if (i === array.length - 1) {
      if (counter % 2 === 0)
        return findOdd(array.filter(item => item !== activeNumber));
      else return activeNumber;
    }
  }
};

// task 10 https://www.codewars.com/kata/find-the-parity-outlier
const findOutlier = array => {
  if (Math.abs(array[0]) % 2 === 0) {
    if (array[1] % 2 === 0)
      for (let i = 2; i < array.length; i++) {
        if (Math.abs(array[i]) % 2 === 1) return array[i];
      }
    else {
      if (Math.abs(array[2]) % 2 === 1) return array[0];
      else return array[1];
    }
  } else {
    if (Math.abs(array[1]) % 2 === 1)
      for (let i = 2; i < array.length; i++) {
        if (Math.abs(array[i]) % 2 === 0) return array[i];
      }
    else {
      if (Math.abs(array[2]) % 2 === 1) return array[1];
      else return array[0];
    }
  }
};

// task 11 https://www.codewars.com/kata/zipwith
const zipWith = (fn, a0, a1) => {
  let l = Math.min(a0.length, a1.length);
  let finalArray = [];
  for (let i = 0; i < l; i++) finalArray.push(fn(a0[i], a1[i]));
  return finalArray;
};

// task 12 https://www.codewars.com/kata/filter-the-number
const filterString = string => {
  let filtered = '';
  Array.from(string).forEach(char => {
    if (char >= 0 && char <= 9) filtered += char;
  });
  return parseInt(filtered);
};

// task 13 https://www.codewars.com/kata/n-th-fibonacci
const nthFibo = n => {
  let sum = 1,
    lastN = 1,
    lastLastN = 0;
  if (n === 1) sum = 0;
  else if (n > 2) {
    for (let i = 2; i < n; i++) {
      sum = lastN + lastLastN;
      lastLastN = lastN;
      lastN = sum;
    }
  }
  return sum;
};

// task 14 https://www.codewars.com/kata/cat-and-mouse-2d-version/
const catMouse = (map, moves) => {
  let cat = {row: undefined, col: undefined},
    mouse = {row: undefined, col: undefined},
    minMoves,
    width = 0;
  while (map[width] === '.' || map[width] === 'C' || map[width] === 'm') {
    width++;
  }
  width++;
  for (let i = 0; i < map.length; i++) {
    if (map[i] === 'C') {
      cat.row = parseInt(i / width) + 1;
      cat.col = (i % width) + 1;
    } else if (map[i] === 'm') {
      mouse.row = parseInt(i / width) + 1;
      mouse.col = (i % width) + 1;
    }
  }
  minMoves = Math.abs(cat.row - mouse.row) + Math.abs(cat.col - mouse.col);
  console.log(minMoves, cat.col, cat.row, mouse.col, mouse.row);
  if (mouse.row && cat.col) {
    if (minMoves <= moves) return 'Caught!';
    else return 'Escaped!';
  } else return 'boring without two animals';
};

// task 15 https://www.codewars.com/kata/duplicate-encoder
const duplicateEncode = word => {
  word = word.toLowerCase();
  let encoded = '';
  for (let i = 0; i < word.length; i++) {
    let counter = Array.from(word).filter(item => item === word[i]).length;
    encoded += counter > 1 ? ')' : '(';
  }
  return encoded;
};

// task 16 https://www.codewars.com/kata/5693239fb761dc8670000001
const findAdditiveNumbers = num => {
  const additiveNumbers = [];

  const isAdditive = (start, array) => {
    if (start === num.length) {
      if (array.length >= 3) {
        additiveNumbers.push(...array);
      }
      return;
    }

    for (let i = start + 1; i <= num.length; i++) {
      const curr = num.slice(start, i);
      if (curr.length > 1 && curr[0] === '0') break;

      if (
        array.length < 2 ||
        Number(array[array.length - 1]) + Number(array[array.length - 2]) ===
          Number(curr)
      ) {
        isAdditive(i, [...array, curr]);
      }
    }
  };

  for (let i = 0; i < num.length - 1; i++) {
    const n0 = num.slice(0, i + 1);
    if (n0.length > 1 && n0[0] === '0') break;
    for (let j = i + 1; j < num.length; j++) {
      const n1 = num.slice(i + 1, j + 1);
      if (n1.length > 1 && n1[0] === '0') break;
      isAdditive(j + 1, [n0, n1]);
    }
  }

  return additiveNumbers;
};

// task 17 https://www.codewars.com/kata/576757b1df89ecf5bd00073b
const towerBuilder = n => {
  let tower = [],
    width = (n - 1) * 2 + 1;
  for (let i = 0; i < n; i++) {
    let string = '';
    for (let j = 0; j < i; j++) string += ' ';
    for (let j = 0; j < width - 2 * i; j++) string += '*';
    for (let j = 0; j < i; j++) string += ' ';
    tower.unshift(string);
  }
  return tower;
};

// task 18 https://www.codewars.com/kata/58f5c63f1e26ecda7e000029
const wave = string => {
  let wave = [];
  for (let i = 0; i < string.length; i++) {
    if (string[i] !== ' ') {
      let currentString = '';
      for (let j = 0; j < string.length; j++) {
        if (j === i) currentString += string[j].toUpperCase();
        else currentString += string[j];
      }
      wave.push(currentString);
    }
  }

  return wave;
};

// task 19 https://www.codewars.com/kata/59d398bb86a6fdf100000031
const stringBreakers = (n, string) => {
  string = string.replace(/\s/g, '');
  let edited = '',
    modulo = string.length % n;
  for (let i = 0; i < parseInt(string.length / n); i++) {
    edited = edited + string.substring(i * n, (i + 1) * n);
    if (
      (modulo === 0 && i < parseInt(string.length / n) - 1) ||
      (modulo !== 0 && i < parseInt(string.length / n))
    )
      edited += '\n';
  }
  if (modulo !== 0)
    edited += string.substring(string.length - modulo, string.length);
  return edited;
};

// task 20 https://www.codewars.com/kata/514a024011ea4fb54200004b
const domainName = url => {
  if (url.includes('//')) url = url.split('//')[1];
  if (url.includes('www.')) url = url.split('www.')[1];
  url = url.split('.')[0];
  return url;
};
