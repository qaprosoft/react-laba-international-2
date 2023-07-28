// 1 http://www.codewars.com/kata/opposite-number
function opposite(number) {
    return -number;
  }
  
// 2 http://www.codewars.com/kata/basic-mathematical-operations
function basicOp(operation, value1, value2) {
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
      throw new Error('invalid operation');
  }
}
// 3 http://www.codewars.com/kata/printing-array-elements-with-comma-delimiters
function printArray(array) {
  return array.join(',');
}

// 4 http://www.codewars.com/kata/transportation-on-vacation
function rentalCarCost(days) {
  const dailyRate = 40;
  let totalCost = days * dailyRate;

  if (days >= 7) {
    totalCost -= 50;
  } else if (days >= 3) {
    totalCost -= 20;
  }

  return totalCost;
}
// 5 http://www.codewars.com/kata/calculating-with-functions
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

function plus(rightOperand) {
  return function (leftOperand) {
    return leftOperand + rightOperand;
  };
}

function minus(rightOperand) {
  return function (leftOperand) {
    return leftOperand - rightOperand;
  };
}

function times(rightOperand) {
  return function (leftOperand) {
    return leftOperand * rightOperand;
  };
}

function dividedBy(rightOperand) {
  return function (leftOperand) {
    return Math.floor(leftOperand / rightOperand);
  };
}
// 6 http://www.codewars.com/kata/get-the-middle-character
function getMiddle(word) {
  const length = word.length;
  const middleIndex = Math.floor(length / 2);

  if (length % 2 === 0) {
    return word.substring(middleIndex - 1, middleIndex + 1);
  } else {
    return word.charAt(middleIndex);
  }
}

// 7 http://www.codewars.com/kata/partition-on
function partitionOn(predicate, items) {
  const falseItems = items.filter(item => !predicate(item));
  const trueItems = items.filter(item => predicate(item));
  const result = [...falseItems, ...trueItems];
  const firstTrueIndex = falseItems.length;
  
  for (let i = 0; i < items.length; i++) {
    items[i] = result[i];
  }
  
  return firstTrueIndex;
}
// 8 http://www.codewars.com/kata/word-count

// 9 https://www.codewars.com/kata/find-the-odd-int/
function findOdd(arr) {
  const countMap = new Map();

  for (let num of arr) {
    countMap.set(num, (countMap.get(num) || 0) + 1);
  }

  for (const [num, count] of countMap) {
    if (count % 2 !== 0) {
      return num;
    }
  }
}
//10 https://www.codewars.com/kata/find-the-parity-outlier
function findOutlier(arr) {
  let oddCount = 0;
  let evenCount = 0;
  let oddNumber, evenNumber;

  for (const num of arr) {
    if (num % 2 === 0) {
      evenCount++;
      evenNumber = num;
    } else {
      oddCount++;
      oddNumber = num;
    }

    if (evenCount > 1 && oddCount === 1) {
      return oddNumber;
    }
    if (oddCount > 1 && evenCount === 1) {
      return evenNumber;
    }
  }
}

//11 https://www.codewars.com/kata/zipwith
function zipWith(actionFunction, arr1, arr2) {
  const result = [];
  const minLength = Math.min(arr1.length, arr2.length);

  for (let i = 0; i < minLength; i++) {
    result.push(actionFunction(arr1[i], arr2[i]));
  }

  return result;
}
//12 https://www.codewars.com/kata/filter-the-number
function filterString(string) {
  let numbers = string.match(/\d+/g);
  return numbers ? Number(numbers.join('')) : null;
}
//13 https://www.codewars.com/kata/n-th-fibonacci
function nthFibo(n) {
  if (n <= 0) return null;
  if (n === 1) return 0;
  if (n === 2) return 1;

  let previous = 0;
  let current = 1;

  for (let i = 3; i <= n; i++) {
    const next = previous + current;
    previous = current;
    current = next;
  }

  return current;
}
//14 https://www.codewars.com/kata/cat-and-mouse-2d-version/
function catMouse(field, allowedMoves) {
  const catIndex = field.indexOf('C');
  const mouseIndex = field.indexOf('m');

  if (catIndex === -1 || mouseIndex === -1) {
    return "boring without two animals";
  }

  const rows = field.indexOf('\n') + 1;
  const catRow = Math.floor(catIndex / rows) + 1;
  const catCol = catIndex % rows + 1;
  const mouseRow = Math.floor(mouseIndex / rows) + 1;
  const mouseCol = mouseIndex % rows + 1;

  const distance = Math.abs(catRow - mouseRow) + Math.abs(catCol - mouseCol);

  return distance <= allowedMoves ? "Caught!" : "Escaped!";
}
//15 https://www.codewars.com/kata/duplicate-encoder
function duplicateEncode(word) {
  const symbolFrequency = {};
  const result = [];

  const lowercaseWord = word.toLowerCase();

  for (const symbol of lowercaseWord) {
    symbolFrequency[symbol] = (symbolFrequency[symbol] || 0) + 1;
  }
  for (const symbol of lowercaseWord) {
    result.push(symbolFrequency[symbol] === 1 ? '(' : ')');
  }

  return result.join('');
}
//16 https://www.codewars.com/kata/5693239fb761dc8670000001

//17 https://www.codewars.com/kata/576757b1df89ecf5bd00073b
function towerBuilder(nFloors) {
  const tower = [];
  const maxWidth = nFloors * 2 - 1;

  for (let i = 0; i < nFloors; i++) {
    const stars = i * 2 + 1;
    const spaces = (maxWidth - stars) / 2;

    const floor = " ".repeat(spaces) + "*".repeat(stars) + " ".repeat(spaces);
    tower.push(floor);
  }

  return tower;
}
//18 https://www.codewars.com/kata/58f5c63f1e26ecda7e000029
function wave(str) {
  const wave = [];

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== ' ') {
      const wavedStr = str.slice(0, i) + str[i].toUpperCase() + str.slice(i + 1);
      wave.push(wavedStr);
    }
  }

  return wave;
}
//19 https://www.codewars.com/kata/59d398bb86a6fdf100000031

//20 https://www.codewars.com/kata/514a024011ea4fb54200004b







