//task 1: http://www.codewars.com/kata/opposite-number

function opposite(number) {
  return number > 0 ? number - number * 2 : Math.abs(number);
}

//task2: http://www.codewars.com/kata/basic-mathematical-operations

function basicOp(operation, value1, value2) {
  if (operation == '+') return value1 + value2;
  if (operation == '-') return value1 - value2;
  if (operation == '*') return value1 * value2;
  if (operation == '/') return value1 / value2;
}

//task3: https://www.codewars.com/kata/printing-array-elements-with-comma-delimiters

function printArray(array) {
  return array.join(',');
}

//task4: http://www.codewars.com/kata/transportation-on-vacation

function rentalCarCost(d) {
  const rentalCarCost = 40;
  const sevenDaysDiscount = 50;
  const threeDaysDiscount = 20;

  if (d >= 7) {
    return rentalCarCost * d - sevenDaysDiscount;
  } else if (d >= 3) {
    return d * rentalCarCost - threeDaysDiscount;
  } else {
    return d * rentalCarCost;
  }
}

//task 5: https://www.codewars.com/kata/calculating-with-functions

function calculator(value1, operator, value2) {
  if (operator === '+') {
    return value1 + value2;
  } else if (operator === '-') {
    return value1 - value2;
  } else if (operator === '*') {
    return value1 * value2;
  } else if (operator === '/') {
    return Math.floor(value1 / value2);
  }
}

function zero(args) {
  return args ? calculator(0, args[0], args[1]) : 0;
}

function one(args) {
  return args ? calculator(1, args[0], args[1]) : 1;
}

function two(args) {
  return args ? calculator(2, args[0], args[1]) : 2;
}
function three(args) {
  return args ? calculator(3, args[0], args[1]) : 3;
}
function four(args) {
  return args ? calculator(4, args[0], args[1]) : 4;
}
function five(args) {
  return args ? calculator(5, args[0], args[1]) : 5;
}
function six(args) {
  return args ? calculator(6, args[0], args[1]) : 6;
}
function seven(args) {
  return args ? calculator(7, args[0], args[1]) : 7;
}
function eight(args) {
  return args ? calculator(8, args[0], args[1]) : 8;
}
function nine(args) {
  return args ? calculator(9, args[0], args[1]) : 9;
}

function plus(num) {
  return ['+', num];
}

function minus(num) {
  return ['-', num];
}
function times(num) {
  return ['*', num];
}
function dividedBy(num) {
  return ['/', num];
}

//task6: https://www.codewars.com/kata/get-the-middle-character

function getMiddle(s) {
  if (s.length % 2 == 0) {
    return s[s.length / 2 - 1] + s[s.length / 2];
  } else {
    return s[(s.length + 1) / 2 - 1];
  }
}

//task7: http://www.codewars.com/kata/partition-on

function partitionOn(pred, items) {
  const falses = items.filter(item => !pred(item));
  const truthes = items.filter(item => pred(item));

  items.splice(0, falses.length, ...falses);
  items.splice(falses.length, truthes.length, ...truthes);

  return falses.length;
}

//task8: http://www.codewars.com/kata/loweredWord-count

//not available

//task9: https://www.codewars.com/kata/find-the-odd-int/

function findOdd(arr) {
  let obj = {};
  arr.forEach(item => {
    if (item in obj) {
      obj[item] += 1;
    } else {
      obj[item] = 1;
    }
  });

  for (let key in obj) {
    if (obj[key] % 2 !== 0) {
      return parseInt(key);
    }
  }
}

//task 10: https://www.codewars.com/kata/find-the-parity-outlier

function findOutlier(integers) {
  const evens = integers.filter(int => int % 2 === 0);
  const odds = integers.filter(int => int % 2 !== 0);

  return evens.length < odds.length ? evens[0] : odds[0];
}

//task11: https://www.codewars.com/kata/zipwith

function zipWith(fn, arr1, arr2) {
  if (arr1.length <= arr2.length) {
    return arr1.map((item, index) => fn(item, arr2[index]));
  } else {
    return arr2.map((item, index) => fn(arr1[index], item));
  }
}

//task12: https://www.codewars.com/kata/filter-the-number

const filterString = function (value) {
  let result = '';

  for (let i in value) {
    if (!isNaN(parseInt(value[i]))) {
      result += value[i].toString();
    }
  }

  return parseInt(result);
};

//task13: https://www.codewars.com/kata/n-th-fibonacci

function nthFibo(n) {
  let num = 0;
  let count = 0;
  let prev_num = -1;
  let fibo = [0, 1];

  for (let i = 0; i < n; i++) {
    if (num < 3) {
      num += 1;
      prev_num += 1;
      count += 1;
      fibo.push(num);
    } else if (num >= 3) {
      num += prev_num;
      prev_num = num - prev_num;
      count += 1;
      fibo.push(num);
    }
  }
  return fibo[n - 1];
}

//task14: https://www.codewars.com/kata/cat-and-mouse-2d-version/

function catMouse(map, moves) {
  if (!map.includes('C') || !map.includes('m')) {
    return 'boring without two animals';
  }

  const arrayedMap = map.split('\n');

  let mouseRow = 0;
  let mouseColumn = 0;

  let catRow = 0;
  let catColumn = 0;

  arrayedMap.forEach((item, index) => {
    if (item.includes('m')) {
      mouseRow = index + 1;
      mouseColumn = item.indexOf('m') + 1;
    }

    if (item.includes('C')) {
      catRow = index + 1;
      catColumn = item.indexOf('C') + 1;
    }
  });

  const stepsNeeded =
    Math.max(mouseRow, catRow) -
    Math.min(mouseRow, catRow) +
    (Math.max(mouseColumn, catColumn) - Math.min(mouseColumn, catColumn));

  if (stepsNeeded <= moves) {
    return 'Caught!';
  } else {
    return 'Escaped!';
  }
}

//task15: https://www.codewars.com/kata/duplicate-encoder

function duplicateEncode(word) {
  let obj = {};
  const loweredWord = word.toLowerCase();

  for (let i = 0; i < loweredWord.length; i++) {
    if (loweredWord[i] in obj) {
      obj[loweredWord[i]] += 1;
    } else {
      obj[loweredWord[i]] = 1;
    }
  }

  let result = '';

  for (let str of loweredWord) {
    obj[str] === 1 ? (result += '(') : (result += ')');
  }

  return result;
}

// task16: https://www.codewars.com/kata/5693239fb761dc8670000001

function findAdditiveNumbers(num) {
  for (let i = 1; i < num.length; i++) {
    for (j = i + 1; j < num.length; j++) {
      let separatedArrays = [num.slice(0, i), num.slice(i, j)];
      if (
        (separatedArrays[0][0] === '0' && separatedArrays[0].length > 1) ||
        (separatedArrays[1][0] === '0' && separatedArrays[1].length > 1)
      )
        continue;
      let joinedArrays = separatedArrays.join('');
      while (joinedArrays.length < num.length) {
        let sum = (
          +separatedArrays[separatedArrays.length - 1] +
          +separatedArrays[separatedArrays.length - 2]
        ).toString();
        joinedArrays += sum;
        separatedArrays.push(sum);
      }
      if (joinedArrays === num) return separatedArrays;
    }
  }
  return [];
}

//task17: https://www.codewars.com/kata/576757b1df89ecf5bd00073b

function towerBuilder(nFloors) {
  let result = [];
  let columns = 0;

  for (let i = 0; i < nFloors; i++) {
    if (i === 0) {
      result.push('*');
    } else {
      result.push(result[i - 1].concat('**'));
    }
  }

  columns = result[result.length - 1].length;

  result = result.map((item, index, result) => {
    let ln = result[index].length;
    let leftIdent = ' '.repeat(Math.floor((columns - ln) / 2));
    let rightIdent = ' '.repeat(Math.floor((columns - ln) / 2));
    return leftIdent.concat(item, rightIdent);
  });

  return result;
}

//task18: https://www.codewars.com/kata/58f5c63f1e26ecda7e000029

function wave(str) {
  const result = [];

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== ' ') {
      let newString = str.slice(0, i) + str[i].toUpperCase() + str.slice(i + 1);
      result.push(newString);
    }
  }

  return result;
}

//task19: https://www.codewars.com/kata/59d398bb86a6fdf100000031

function stringBreakers(n, string) {
  const stringSplited = string.split(' ').join('');

  let result = '';

  for (let i = 0; i < stringSplited.length; i++) {
    if ((i + 1) % n === 0) {
      result += stringSplited[i];
      result += i !== stringSplited.length - 1 ? '\n' : '';
    } else {
      result += stringSplited[i];
    }
  }
  return result;
}

//task20: https://www.codewars.com/kata/514a024011ea4fb54200004b

function domainName(url) {
  url = url.replace('https://', '');
  url = url.replace('http://', '');
  url = url.replace('www.', '');
  url = url.slice(0, url.indexOf('/'));

  return url.slice(0, url.indexOf('.'));
}
