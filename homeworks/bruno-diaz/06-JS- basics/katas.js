// task 1 http://www.codewars.com/kata/opposite-number

const opposite = (number) => {
  const oppositeNumber = number * -1;
  return oppositeNumber;
};

// task 2 http://www.codewars.com/kata/basic-mathematical-operations

function basicOp(operation, value1, value2) {
  if (operation === "+") {
    const result = value1 + value2;
    return result;
  } else if (operation === "-") {
    const result = value1 - value2;
    return result;
  } else if (operation === "*") {
    const result = value1 * value2;
    return result;
  } else {
    const result = value1 / value2;
    return result;
  }
}

// task 3 http://www.codewars.com/kata/printing-array-elements-with-comma-delimiters

function printArray(array) {
  const arrayToString = array.toString();
  return arrayToString;
}

// task 4 http://www.codewars.com/kata/transportation-on-vacation

function rentalCarCost(d) {
  if (d >= 3 && d < 7) {
    const cost = d * 40 - 20;
    return cost;
  } else if (d >= 7) {
    const cost = d * 40 - 50;
    return cost;
  } else {
    return d * 40;
  }
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

function plus(value1) {
  return function (value2) {
    return value1 + value2;
  };
}

function minus(value1) {
  return function (value2) {
    return value2 - value1;
  };
}

function times(value1) {
  return function (value2) {
    return value1 * value2;
  };
}

function dividedBy(value1) {
  return function (value2) {
    return Math.floor(value2 / value1);
  };
}

// task 6 http://www.codewars.com/kata/get-the-middle-character

function getMiddle(s) {
  if (s.length % 2 == 0) {
    return s.substr(s.length / 2 - 1, 2);
  } else {
    return s.charAt(s.length / 2);
  }
}

// task 7 http://www.codewars.com/kata/partition-on

function partitionOn(pred, items) {
  let itsFalse = items.filter(function (i) {
    return !pred(i);
  });
  let itsTrue = items.filter(pred);
  items.length = 0;
  for (let i = 0; i < itsFalse.length; i++) {
    items.push(itsFalse[i]);
  }
  for (let i = 0; i < itsTrue.length; i++) {
    items.push(itsTrue[i]);
  }

  return itsFalse.length;
}

// task 9 https://www.codewars.com/kata/find-the-odd-int/

function findOdd(A) {
  let result = 0;
  for (let num of A) {
    result ^= num;
  }
  return result;
}

// task 10 https://www.codewars.com/kata/find-the-parity-outlier

function findOutlier(integers) {
  let oddContainer = 0;
  let evenContainer = 0;

  for (let num of integers) {
    if (num % 2 === 0) {
      evenContainer++;
    } else {
      oddContainer++;
    }
  }

  if (oddContainer === 1) {
    for (let num of integers) {
      if (num % 2 !== 0) {
        return num;
      }
    }
  } else {
    for (let num of integers) {
      if (num % 2 === 0) {
        return num;
      }
    }
  }
}

// task 11 https://www.codewars.com/kata/zipwith

function zipWith(fn, a0, a1) {
  const minLength = Math.min(a0.length, a1.length);
  const result = [];

  for (let i = 0; i < minLength; i++) {
    result.push(fn(a0[i], a1[i]));
  }
  return result;
}

// task 12 https://www.codewars.com/kata/filter-the-number

const filterString = function (value) {
  let onlyNumbers = value.replace(/\D/g, "");
  let numbers = parseInt(onlyNumbers);
  return numbers;
};

// task 13 https://www.codewars.com/kata/n-th-fibonacci

function nthFibo(n) {
  if (n === 1) {
    return 0;
  } else if (n === 2) {
    return 1;
  } else {
    return nthFibo(n - 1) + nthFibo(n - 2);
  }
}

// task 14 https://www.codewars.com/kata/cat-and-mouse-2d-version/

function catMouse(map, moves) {
  if (map.indexOf("C") == -1 || map.indexOf("m") == -1) {
    return "boring without two animals";
  }

  map = map.split("\n");
  let catPos = { x: 0, y: 0 };
  let micePos = { x: 0, y: 0 };

  for (let i = 0; i < map.length; i++) {
    for (let j = 0; j < map[i].length; j++) {
      if (map[i][j] == "C") {
        catPos.x = i;
        catPos.y = j;
      }

      if (map[i][j] == "m") {
        micePos.x = i;
        micePos.y = j;
      }
    }
  }
  const movesToMice =
    Math.abs(micePos.x - catPos.x) + Math.abs(micePos.y - catPos.y);

  return movesToMice <= moves ? "Caught!" : "Escaped!";
}

// task 15 https://www.codewars.com/kata/duplicate-encoder

function duplicateEncode(word) {
  word = word.toLowerCase();
  const charCount = {};
  for (let char of word) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  let newString = "";
  for (let char of word) {
    if (charCount[char] === 1) {
      newString += "(";
    } else {
      newString += ")";
    }
  }
  return newString;
}

// task 16 https://www.codewars.com/kata/5693239fb761dc8670000001

// task 17 https://www.codewars.com/kata/576757b1df89ecf5bd00073b

function towerBuilder(nFloors) {
  if (nFloors <= 0) {
    return [];
  }

  const tower = [];
  const width = 2 * nFloors - 1;

  for (let floor = 1; floor <= nFloors; floor++) {
    const stars = 2 * floor - 1;
    const spaces = Math.floor((width - stars) / 2);
    const row = " ".repeat(spaces) + "*".repeat(stars) + " ".repeat(spaces);
    tower.push(row);
  }
  return tower;
}

// task 18 https://www.codewars.com/kata/58f5c63f1e26ecda7e000029

function wave(str) {
  const waveArr = [];

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== " ") {
      const waveStr = str.slice(0, i) + str[i].toUpperCase() + str.slice(i + 1);
      waveArr.push(waveStr);
    }
  }
  return waveArr;
}

// task 19 https://www.codewars.com/kata/59d398bb86a6fdf100000031

function stringBreakers(n, string) {
  let result = [];
  string = string.replace(/\s/g, "");

  for (let i = 0; i < string.length; i += n) {
    result.push(string.substr(i, n));
  }

  return result.join("\n");
}

// task 20 https://www.codewars.com/kata/514a024011ea4fb54200004b

function domainName(url) {
  return url.replace(/.+\/\/|www.|\..+/g, "");
}
