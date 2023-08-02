// task 1 https://www.codewars.com/kata/5715eaedb436cf5606000381
const positiveSum = arr =>
  arr.reduce((prev, cur) => (prev += cur > 0 ? cur : 0), 0);

// task 2 https://www.codewars.com/kata/5a3e1319b6486ac96f000049
const pairs = arr => {
  let consecutivePairs = 0;
  for (let i = 0; i + 1 < arr.length; i += 2)
    if (Math.abs(arr[i] - arr[i + 1]) === 1) consecutivePairs++;
  return consecutivePairs;
};

// task 3 https://www.codewars.com/kata/5aba780a6a176b029800041c
function maxMultiple(divisor, bound) {
  for (let res = bound; res > 0; res--) {
    if (res % divisor === 0) return res;
  }
}

// task 4 https://www.codewars.com/kata/514a6336889283a3d2000001
const getEvenNumbers = numbersArray => numbersArray.filter(n => n % 2 === 0);

// task 5 https://www.codewars.com/kata/5a090c4e697598d0b9000004
function solve(arr) {
  let newArr = [];
  while (arr.length > 0) {
    const maxIndex = arr.indexOf(Math.max(...arr));
    newArr.push(...arr.splice(maxIndex, 1));

    const minIndex = arr.indexOf(Math.min(...arr));
    newArr.push(...arr.splice(minIndex, 1));
  }
  return newArr;
}

// task 6 https://www.codewars.com/kata/566044325f8fddc1c000002c
function evenChars(string) {
  if (string.length <= 1 || string.length > 100) return 'invalid string';

  const res = [];
  for (let i = 1; i < string.length; i += 2) res.push(string[i]);

  return res;
}

// task 7 https://www.codewars.com/kata/545a4c5a61aa4c6916000755
function gimme(triplet) {
  const max = Math.max(...triplet);
  const min = Math.min(...triplet);

  for (let i = 0; i < triplet.length; i++)
    if (triplet[i] !== max && triplet[i] !== min) return i;
}

// task 8 https://www.codewars.com/kata/578553c3a1b8d5c40300037c
const binaryArrayToNumber = arr => parseInt(arr.join(''), 2);

// task 9 https://www.codewars.com/kata/585d7d5adb20cf33cb000235
function findUniq(arr) {
  arr.sort();
  // because all numbers are equal except for one 
  // than after sort unique number will be either first or last
  return arr[0] == arr[1] ? arr[arr.length - 1] : arr[0];
}

// task 10 https://www.codewars.com/kata/581e014b55f2c52bb00000f8
function decipherThis(str) {
  const words = str.split(' ');
  for (let i = 0; i < words.length; i++) {
    // change number into corresponding letter
    const num = words[i].match(/\d/g).join('');
    let decipheredWord = words[i].replace(num, String.fromCharCode(num));
    //switch 2 and last letter
    if (decipheredWord.length >= 3)
      decipheredWord =
        decipheredWord[0] +
        decipheredWord.slice(-1) +
        decipheredWord.slice(2, -1) +
        decipheredWord[1];
    words[i] = decipheredWord;
  }
  return words.join(' ');
}

// task 11 https://www.codewars.com/kata/578aa45ee9fd15ff4600090d
function sortArray(array) {
  let odd = array
    .filter(n => n % 2 !== 0)
    .sort((a, b) => {
      return a - b;
    });
  return array.map(x => (x % 2 ? odd.shift() : x));
}
