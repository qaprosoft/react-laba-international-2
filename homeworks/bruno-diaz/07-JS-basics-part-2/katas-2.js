// task 1 https://www.codewars.com/kata/5715eaedb436cf5606000381

function positiveSum(arr) {
  const positiveNumbers = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      positiveNumbers.push(arr[i]);
    }
  }

  if (positiveNumbers.length === 0) {
    return 0;
  } else {
    return positiveNumbers.reduce((sum, current) => sum + current);
  }
}

// task 2 https://www.codewars.com/kata/5a3e1319b6486ac96f000049

function pairs(ar) {
  let pairsCount = 0;

  for (let i = 0; i <= ar.length - 1; i += 2) {
    if (ar[i + 1] - ar[i] === 1 || ar[i + 1] - ar[i] === -1) {
      pairsCount++;
    }
  }

  return pairsCount;
}

// task 3 https://www.codewars.com/kata/5aba780a6a176b029800041c

function maxMultiple(divisor, bound) {
  let number = bound;
  while (number % divisor !== 0) {
    number--;
  }

  return number;
}

// task 4 https://www.codewars.com/kata/514a6336889283a3d2000001

function getEvenNumbers(numbersArray) {
  return numbersArray.filter((numbers) => numbers % 2 == 0);
}

// task 5 https://www.codewars.com/kata/5a090c4e697598d0b9000004

function solve(arr) {
  const sortedArr = arr.slice().sort((a, b) => a - b);
  const result = [];

  for (let i = 0; i < sortedArr.length; i++) {
    if (i % 2 === 0) {
      result.push(sortedArr[sortedArr.length - Math.floor(i / 2) - 1]);
    } else {
      result.push(sortedArr[Math.floor(i / 2)]);
    }
  }

  return result;
}

// task 6 https://www.codewars.com/kata/566044325f8fddc1c000002c

function evenChars(string) {
  if (string.length < 2 || string.length > 100) {
    return "invalid string";
  }

  const evenChars = [];
  for (let i = 1; i < string.length; i += 2) {
    evenChars.push(string[i]);
  }

  return evenChars;
}

// task 7 https://www.codewars.com/kata/545a4c5a61aa4c6916000755

function gimme(a) {
  return a.indexOf(
    a.concat().sort(function (a, b) {
      return a - b;
    })[1]
  );
}

// task 8 https://www.codewars.com/kata/578553c3a1b8d5c40300037c

const binaryArrayToNumber = (arr) => {
  const binaryString = arr.join("");
  const decimalValue = parseInt(binaryString, 2);
  return decimalValue;
};

// task 9 https://www.codewars.com/kata/585d7d5adb20cf33cb000235

function findUniq(arr) {
  const [num1, num2] = Array.from(new Set(arr)).slice(0, 2);
  const isNum1Unique = arr.indexOf(num1) === arr.lastIndexOf(num1);
  return isNum1Unique ? num1 : num2;
}

// task 10 https://www.codewars.com/kata/581e014b55f2c52bb00000f8

function decipherThis(str) {
  return str
    .split(" ")
    .map((i) =>
      i
        .replace(/^\d+/, (a) => String.fromCharCode(a))
        .replace(/^(.)(.)(.*)(.)$/, "$1$4$3$2")
    )
    .join(" ");
}

// task 11 https://www.codewars.com/kata/578aa45ee9fd15ff4600090d

function sortArray(array) {
  const odds = array.filter((n) => n & 1).sort((a, b) => a - b);
  return array.map((n) => (n & 1 ? odds.shift() : n));
}
