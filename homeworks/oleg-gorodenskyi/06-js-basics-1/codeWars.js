// task 1 http://www.codewars.com/kata/opposite-number
function opposite(number) {
  if (number) {
    return number * -1
  } return number
}

// task 2 http://www.codewars.com/kata/basic-mathematical-operations
function basicOp(operation, value1, value2) {
  switch (operation) {
    case "+":
      return value1 + value2;
      break;
    case "-":
      return value1 - value2;
      break;
    case "*":
      return value1 * value2;
      break;
    case "/":
      return value1 / value2;
      break;
  }
}

// task 3 http://www.codewars.com/kata/printing-array-elements-with-comma-delimiters
function printArray(array) {
  return array.join(',')
}

// task 4 http://www.codewars.com/kata/transportation-on-vacation
function rentalCarCost(d) {
  if (d >= 3 && d < 7) {
    return 40 * d - 20;
  }
  else if (d >= 7) {
    return 40 * d - 50;
  }
  else {
    return 40 * d;
  }
}

// task 5 http://www.codewars.com/kata/calculating-with-functions
function zero(func) {
  return func ? func(0) : 0;
}
function one(func) {
  return func ? func(1) : 1;
}
function two(func) {
  return func ? func(2) : 2;
}
function three(func) {
  return func ? func(3) : 3;
}
function four(func) {
  return func ? func(4) : 4;
}
function five(func) {
  return func ? func(5) : 5;
}
function six(func) {
  return func ? func(6) : 6;
}
function seven(func) {
  return func ? func(7) : 7;
}
function eight(func) {
  return func ? func(8) : 8;
}
function nine(func) {
  return func ? func(9) : 9;
}

function plus(num) {
  return (x) => x + num
}
function minus(num) {
  return (x) => x - num
}
function times(num) {
  return (x) => x * num
}
function dividedBy(num) {
  return (x) => Math.floor(x / num)
}

// task 6 http://www.codewars.com/kata/get-the-middle-character
function getMiddle(s) {
  if (s.length % 2 === 0) {
    let startMiddleChar = (s.length / 2) - 1;
    return s.slice(startMiddleChar, startMiddleChar + 2)
  } if (s.length % 2 === 1) {
    let leftPartWord = Math.floor(s.length / 2);
    return s.slice(leftPartWord, leftPartWord + 1)
  }
}

// task 7 http://www.codewars.com/kata/partition-on
function partitionOn(pred, items) {
  let result = []
  let trueArr = []
  let falseArr = []
  let firstTrueIndex;
  for (let key of items) {
    if (pred(key)) {
      trueArr.push(key)
    } else {
      falseArr.push(key)
    }

    result = [...falseArr, ...trueArr]
    firstTrueIndex = result.findIndex(pred)
  }
  return firstTrueIndex, result
}


// task 9 https://www.codewars.com/kata/find-the-odd-int/
function findOdd(A) {
  let quantityOfIntegers = {};
  for (let key of A) {
    quantityOfIntegers[key] = quantityOfIntegers[key] ? quantityOfIntegers[key] += 1 : 1
  }
  for (let key in quantityOfIntegers) {
    if (quantityOfIntegers[key] % 2 === 1) {
      return Number(key)
    }
  }
}

// task 10 https://www.codewars.com/kata/find-the-parity-outlier
function findOutlier(integers) {
  for (let i = 0; i < integers.length; i++) {
    let count = 0;
    for (let j = 0; j < integers.length; j++) {
      if (Math.abs(integers[i] % 2) === Math.abs(integers[j] % 2)) {
        count += 1
      }
    } if (count === 1) {
      return integers[i]
    }
  }
}

// task 11 https://www.codewars.com/kata/zipwith
function zipWith(fn, a0, a1) {
  let result = [];

  if (a0.length > a1.length) {
    for (let i = 0; i < a1.length; i++) {
      result.push(fn(a0[i], a1[i]));
    }
  } else if (a0.length < a1.length) {
    for (let i = 0; i < a0.length; i++) {
      result.push(fn(a0[i], a1[i]));
    }
  } else if (a0.length === 0 || a1.length === 0) {
    return result;
  } else {
    for (let i = 0; i < a0.length; i++) {
      result.push(fn(a0[i], a1[i]));
    }
  }

  return result;
}



// task 12 https://www.codewars.com/kata/filter-the-number
var filterString = function (value) {
  return +value.match(/\d/g).join('')
}

// task 13 https://www.codewars.com/kata/n-th-fibonacci
function nthFibo(n) {
  let startFibo = [0, 1];
  for (let i = 0; i < n; i++) {
    startFibo.push(startFibo[0 + i] + startFibo[i + 1])
  }
  return startFibo[n - 1]
}


// task 14 https://www.codewars.com/kata/cat-and-mouse-2d-version/
function catMouse(map, moves) {
  if (map.indexOf('C') === -1 || map.indexOf('m') === -1) {
    return "boring without two animals"
  }

  const catIndex = map.indexOf('C');
  const mouseIndex = map.indexOf('m');
  const mapWidth = map.indexOf('\n') + 1

  function calculateDistance(cat, mouse) {
    const x1 = cat % mapWidth;
    const y1 = Math.floor(cat / mapWidth)
    const x2 = mouse % mapWidth;
    const y2 = Math.floor(mouse / mapWidth)
    return Math.abs(x1 - x2) + Math.abs(y1 - y2)
  }

  const distance = calculateDistance(catIndex, mouseIndex);
  return distance <= moves ? 'Caught!' : 'Escaped!'
}


// task 15 https://www.codewars.com/kata/duplicate-encoder
function duplicateEncode(word) {
  let result = "";
  let lowerCase = word.toLowerCase()

  for (let i = 0; i < lowerCase.length; i++) {
    let currentChar = lowerCase[i];
    let count = 0;

    for (let j = 0; j < lowerCase.length; j++) {
      if (currentChar === lowerCase[j]) {
        count++;
      }
    }

    if (count === 1) {
      result += "(";
    } else {
      result += ")";
    }
  }

  return result;
}


// task 16 https://www.codewars.com/kata/5693239fb761dc8670000001


// task 17 https://www.codewars.com/kata/576757b1df89ecf5bd00073b
function towerBuilder(nFloors) {
  let spaces = ' ';
  let star = '*'
  let result = [];
  let quantityOfStars = 1;
  for (let i = 1; i <= nFloors; i++) {
    result.push(spaces.repeat(nFloors - i) + star.repeat(quantityOfStars) + spaces.repeat(nFloors - i))
    quantityOfStars += 2
  }
  return result
}



// task 18 https://www.codewars.com/kata/58f5c63f1e26ecda7e000029
function wave(str) {
  let result = [];
  for (let i = 0; i < str.length; i++) {
    let capitalLetter = str[i].toUpperCase();
    if (capitalLetter !== ' ') {
      result.push(str.slice(0, i) + capitalLetter + str.slice(i + 1))
    }
  }
  return result
}

// task 19 https://www.codewars.com/kata/59d398bb86a6fdf100000031
function stringBreakers(n, string) {
  let result = '';
  let noSpaces = string.replace(/\s/g, '')
  for (let i = 0; i < noSpaces.length; i += n) {
    result += noSpaces.slice(i, i + n);
    if (i + n < noSpaces.length) {
      result += '\n'
    }
  }
  return result
}


// task 20 https://www.codewars.com/kata/514a024011ea4fb54200004b
function domainName(url) {
  let result;

  if (url.includes('www.')) {
    const firstStep = url.split('.');
    result = firstStep[1];
  } else if (url.includes('//')) {
    const firstStep = url.split('//')[1];
    if (firstStep.includes('/')) {
      result = firstStep.split('/')[0].split('.')[0];
    } else if (firstStep.includes('.')) {
      result = firstStep.split('.')[0];
    }
  } else {
    result = url.split('.')[0];
  }

  return result;
}


