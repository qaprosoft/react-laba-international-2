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


// task 14 https://www.codewars.com/kata/cat-and-mouse-2d-version/


// task 15 https://www.codewars.com/kata/duplicate-encoder
function duplicateEncode(word){
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


