const solution1 = num => num * -1;

// task 2: http://www.codewars.com/kata/basic-mathematical-operations;
const solution2 = (operator, number1, number2) => {
  switch (operator) {
    case '+':
      return number1 + number2;
    case '*':
      return number1 * number2;
    case '-':
      return number1 - number2;
    case '/':
      return number1 / number2;
    default:
      return 'Wrong operator, try again';
  }
};

// task 3: https://www.codewars.com/kata/printing-array-elements-with-comma-delimiters
const solution3 = arr => arr.join();

// task 4: http://www.codewars.com/kata/transportation-on-vacation
const solution4 = numberOfDays => {
  const dailyPrice = 40;
  const minumumDiscount = 20;
  const maximumDiscount = 50;
  const price = dailyPrice * numberOfDays;
  if (numberOfDays >= 7) return price - maximumDiscount;
  else if (numberOfDays >= 3) return price - minumumDiscount;
  else return price;
};

// task 5: https://www.codewars.com/kata/calculating-with-functions
const solution5 = () => {
  const expression = (number, operation) =>
    operation ? operation(number) : number;

  const zero = operation => expression(0, operation);
  const one = operation => expression(1, operation);
  const two = operation => expression(2, operation);
  const three = operation => expression(3, operation);
  const four = operation => expression(4, operation);
  const five = operation => expression(5, operation);
  const six = operation => expression(6, operation);
  const seven = operation => expression(7, operation);
  const eight = operation => expression(8, operation);
  const nine = operation => expression(9, operation);

  const plus = x => y => y + x;
  const minus = x => y => y - x;
  const times = x => y => y * x;
  const dividedBy = x => y => Math.floor(y / x);
};

// task 6: https://www.codewars.com/kata/get-the-middle-character
const solution6 = word => {
  const wordArr = [...word];
  const wordLength = wordArr.length;
  if (wordLength % 2 == 0) {
    return wordArr[wordLength / 2 - 1] + wordArr[wordLength / 2];
  } else {
    return wordArr[Math.floor(wordLength / 2)];
  }
};

// task 7: https://www.codewars.com/kata/partition-on
const solution7 = (pred, items) => {
  const falseItems = [];
  const trueItems = [];
  for (const item of items) {
    if (pred(item)) {
      trueItems.push(item);
    } else {
      falseItems.push(item);
    }
  }
  items.splice(0, items.length, ...falseItems, ...trueItems);
  return falseItems.length;
};

// task 9: https://www.codewars.com/kata/find-the-odd-int/
const solution9 = array => {
  const isEven = num => num % 2 == 0;
  let rep;
  for (let i = 0; i < array.length; i++) {
    rep = 1;
    for (let j = 0; j < array.length; j++) {
      if (i !== j) {
        if (A[j] == A[i]) {
          rep++;
        }
      }
    }
    if (!isEven(rep)) {
      return array[i];
    }
  }
};

// Task 10: https://www.codewars.com/kata/find-the-parity-outlier
const solution10 = integers => {
  const evenNumbers = [];
  const oddNumbers = [];
  const isEven = num => num % 2 == 0;
  for (const int of integers) {
    if (isEven(int)) evenNumbers.push(int);
    else oddNumbers.push(int);
  }
  if (evenNumbers.length > oddNumbers.length) return oddNumbers[0];
  else return evenNumbers[0];
};

// Task 11: https://www.codewars.com/kata/zipwith
const solution11 = (fn, a0, a1) => {
  let minLenght;
  const zipped = [];
  if (a0.length > a1.length) minLenght = a1.length;
  else minLenght = a0.length;
  for (let i = 0; i < minLenght; i++) {
    zipped.push(fn(a0[i], a1[i]));
  }
  return zipped;
};

// Task 12: https://www.codewars.com/kata/filter-the-number
const solution12 = value => {
  let numbers = '';
  for (let i = 0; i < value.length; i++) {
    const char = value[i];
    if (!isNaN(char)) {
      numbers += char;
    }
  }

  return parseInt(numbers);
};

// Task 13: https://www.codewars.com/kata/n-th-fibonacci
const solution13 = n => {
  let first = 0;
  let second = 1;
  let result = 0;
  if (n > 1) {
    for (let i = 0; i < n - 3; i++) {
      let aux = second;
      second = first + second;
      first = aux;
    }
    result = first + second;
  }
  return result;
};

// Task 14: https://www.codewars.com/kata/cat-and-mouse-2d-version/
// This task is not solvable according to the comment.

// Task 15: https://www.codewars.com/kata/duplicate-encoder
const solution15 = word => {
  const lowerWord = word.toLowerCase();
  const repeated = [];
  let result = '';
  let i = 0;
  let counter = 0;
  for (let j = 0; j < lowerWord.length; j++) {
    counter = 0;
    i = j + 1;
    if (!repeated.includes(lowerWord[j])) {
      while (i < lowerWord.length && counter == 0) {
        if (lowerWord[j] == lowerWord[i]) {
          counter++;
          repeated.push(lowerWord[j]);
        }
        i++;
      }
      if (counter == 0) {
        result += '(';
      } else result += ')';
    } else {
      result += ')';
    }
  }
  return result;
};

// Task 16: https://www.codewars.com/kata/5693239fb761dc8670000001
// This task is not solvable according to the comment.

// Task 17: https://www.codewars.com/kata/576757b1df89ecf5bd00073b
const solution17 = nFloors => {
  const result = [];
  const size = nFloors + nFloors - 1;
  for (let i = 0; i < nFloors; i++) {
    let j = 0;
    let aux = '';
    while (j < size) {
      if (j >= Math.floor(size / 2) - i && j <= Math.floor(size / 2) + i)
        aux += '*';
      else aux += ' ';
      j++;
    }
    result.push(aux);
  }
  return result;
};

// Task 18: https://www.codewars.com/kata/58f5c63f1e26ecda7e000029
const solution18 = str => {
  const lowerString = str.toLowerCase();
  const aux = [];
  const result = [];
  for (let i = 0; i < str.length; i++) {
    aux.push(...lowerString);

    aux[i] = aux[i].toUpperCase();

    if (aux[i] !== ' ') {
      result.push(aux.join(''));
    }
    aux.length = 0;
  }
  return result;
};

// Task 19: https://www.codewars.com/kata/514a024011ea4fb54200004b
const solution19 = url => {
  let domain = url.replace(/^(https?:\/\/)?(www\.)?/, '');
  domain = domain.replace(/\.[^.]+$/, '');
  return domain;
};

const solution20 = (n, string) => {
  let str = string.replaceAll(' ', '');
  const num = Math.floor(str.length / n);
  const arr = [];
  let counter = 0;
  for (let i = 0; i < str.length; i++) {
    if (i % num == 0 && counter < n) {
      arr.push('\n');
      counter++;
    }
    arr.push(str[i]);
  }
  return arr.join('');
};
