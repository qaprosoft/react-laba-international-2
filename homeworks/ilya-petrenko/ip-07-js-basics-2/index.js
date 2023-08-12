// task 1 https://www.codewars.com/kata/5715eaedb436cf5606000381

function positiveSum(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      total += arr[i];
    }
  }
  return total;
}

// task 2 https://www.codewars.com/kata/5a3e1319b6486ac96f000049

function pairs(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i += 2)
    if (arr[i] - 1 === arr[i + 1] || arr[i] + 1 === arr[i + 1]) count++;
  return count;
}

// task 3 https://www.codewars.com/kata/5aba780a6a176b029800041c

function maxMultiple(divisor, bound) {
  while (bound % divisor) {
    bound--;
  }

  return bound;
}

// task 4 https://www.codewars.com/kata/514a6336889283a3d2000001

function getEvenNumbers(numbersArray) {
  function isEven(num) {
    return num % 2 === 0;
  }
  return numbersArray.filter(isEven);
}

// task 5 https://www.codewars.com/kata/5a090c4e697598d0b9000004

function solve(arr) {
  let res = [];
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    if (i % 2 === 0) {
      let max = Math.max(...arr);
      arr.splice(arr.indexOf(max), 1);
      res.push(max);
    } else {
      let min = Math.min(...arr);
      arr.splice(arr.indexOf(min), 1);
      res.push(min);
    }
  }
  return res;
}

// task 6 https://www.codewars.com/kata/566044325f8fddc1c000002c

function evenChars(s) {
  if (s.length < 2 || s.length > 100) return 'invalid string';
  let output = [];
  for (let i = 1; i < s.length; i += 2) {
    output.push(s[i]);
  }
  return output;
}

// task 7 https://www.codewars.com/kata/545a4c5a61aa4c6916000755

function gimme(triplet) {
  let min = Math.min(...triplet);
  let max = Math.max(...triplet);

  return triplet.findIndex(x => x > min && x < max);
}

// task 8 https://www.codewars.com/kata/578553c3a1b8d5c40300037c

function binaryArrayToNumber(arr) {
  return arr.reduce((a, b) => (a << 1) | b);
}

// task 9 https://www.codewars.com/kata/585d7d5adb20cf33cb000235

function findUniq(arr) {
  return arr.find(n => arr.indexOf(n) === arr.lastIndexOf(n));
}

// task 10 https://www.codewars.com/kata/581e014b55f2c52bb00000f8

function decipherThis(str) {
  let words = str.split(' ');
  let finalArr = [];
  for (let word of words) {
    let newWord = [];

    newWord.push(String.fromCharCode(parseInt(word)));
    const wordStr = word.split('').filter(x => isNaN(x));
    newWord.push(wordStr[wordStr.length - 1]);
    newWord.push(wordStr.slice(1, wordStr.length - 1).join(''));
    if (wordStr.length > 1) {
      newWord.push(wordStr[0]);
    }

    finalArr.push(newWord);
  }
  let str1 = '';
  finalArr.forEach(wordArr => {
    str1 += ' ' + wordArr.join('');
  });
  return str1.trim();
}

// task 11 https://www.codewars.com/kata/578aa45ee9fd15ff4600090d

function sortArray(array) {
  let oddNumbers = [];

  if (array === []) {
    return array;
  }

  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 1) {
      oddNumbers.push(array[i]);
    }
  }

  let finalArray = oddNumbers.sort((a, b) => a - b);

  for (let j = 0; j < array.length; j++) {
    if (array[j] % 2 === 0) {
      finalArray.splice(j, 0, array[j]);
    }
  }

  return finalArray;
}

// task 13 https://www.codewars.com/kata/52597aa56021e91c93000cb0

function moveZeros(array) {
  return array.sort((a, b) => -(b === 0));
}
