// task 1 https://www.codewars.com/kata/5715eaedb436cf5606000381

function positiveSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      sum = sum + arr[i];
    }
  }
  return sum;
}

// task 2 https://www.codewars.com/kata/5a3e1319b6486ac96f000049
function pairs(arr) {
  let pairs = 0;
  for (let i = 0; i < arr.length; i += 2) {
    if (Math.abs(arr[i] - arr[i + 1]) === 1) pairs++;
  }
  return pairs;
}

// task 3 https://www.codewars.com/kata/5aba780a6a176b029800041c

function maxMultiple(divisor, bound) {
  let mBound = bound;
  do {
    if (mBound % divisor === 0) {
      return mBound;
    }
    mBound--;
  } while (mBound >= divisor);
}

// task 4 https://www.codewars.com/kata/514a6336889283a3d2000001

const getEvenNumbers = numbersArray => numbersArray.filter(f => f % 2 === 0);

// task 5 https://www.codewars.com/kata/5a090c4e697598d0b9000004

function solve(arr) {
  const sortedArr = arr.sort((a, b) => b - a);
  for (let i = 0; i < sortedArr.length; i += 2) {
    sortedArr.splice(i + 1, 0, sortedArr[sortedArr.length - 1]);
    sortedArr.pop();
  }
  return sortedArr;
}

// task 6 ttps://www.codewars.com/kata/566044325f8fddc1c000002c

function evenChars(string) {
  if (string.length < 2 || string.length > 100) return 'invalid string';

  return string.split('').filter((char, i) => (i + 1) % 2 === 0);
}

// task 7 https://www.codewars.com/kata/545a4c5a61aa4c6916000755

const gimme = triplet => triplet.indexOf([...triplet].sort((a, b) => a - b)[1]);

// task 8 https://www.codewars.com/kata/578553c3a1b8d5c40300037c

const binaryArrayToNumber = arr => {
  return arr.reverse().reduce((accumulator, currentValue, i) => {
    return (accumulator += Math.pow(2, i) * currentValue);
  }, 0);
};

// task 9 https://www.codewars.com/kata/585d7d5adb20cf33cb000235

function findUniq(arr) {
  const sortedArr = arr.sort((a, b) => a - b);
  return sortedArr[0] !== sortedArr[1]
    ? sortedArr[0]
    : sortedArr[sortedArr.length - 1];
}

//task 10 https://www.codewars.com/kata/581e014b55f2c52bb00000f8

function decipherThis(str) {
  const splitedStr = str.split(' ');
  const resultArr = [];
  for (let i = 0; i < splitedStr.length; i++) {
    const subStr = splitedStr[i].split('');
    const arrOfNumbers = [];
    for (let j = 0; j < subStr.length; j++) {
      if (!isNaN(subStr[j])) {
        arrOfNumbers.push(subStr[j]);
      }
    }
    subStr.splice(0, arrOfNumbers.length);
    const lastChar = subStr[subStr.length - 1];

    if (subStr.length > 1) {
      subStr.splice(subStr.length - 1, 1, subStr[0]);
      subStr.splice(0, 1, lastChar);
    }

    subStr.unshift(String.fromCharCode(arrOfNumbers.join('')));

    resultArr.push(subStr.join(''));
  }
  return resultArr.join(' ');
}

//task 11 https://www.codewars.com/kata/578aa45ee9fd15ff4600090d

function sortArray(arr) {
  const array = [...arr];
  const oddArr = array.filter(f => f % 2 !== 0).sort((a, b) => a - b);
  for (let i = 0, j = 0; i < array.length; i++) {
    if (array[i] % 2 !== 0) {
      array.splice(i, 1, oddArr[j]);
      j++;
    }
  }
  return array;
}

//advanced

//task 1 https://www.codewars.com/kata/515bb423de843ea99400000a

class PaginationHelper {
  constructor(collection, itemsPerPage) {
    // The constructor takes in an array of items and a integer indicating how many
    // items fit within a single page
    this.collection = collection;
    this.itemsPerPage = itemsPerPage;
  }
  itemCount() {
    // returns the number of items within the entire collection
    return this.collection.length;
  }
  pageCount() {
    // returns the number of pages
    return Math.ceil(this.collection.length / this.itemsPerPage);
  }
  pageItemCount(pageIndex) {
    // returns the number of items on the current page. page_index is zero based.
    // this method should return -1 for pageIndex values that are out of range
    if (
      pageIndex >= Math.ceil(this.collection.length / this.itemsPerPage) ||
      pageIndex < 0
    )
      return -1;

    return this.collection.slice(
      pageIndex * this.itemsPerPage,
      pageIndex * this.itemsPerPage + this.itemsPerPage,
    ).length;
  }
  pageIndex(itemIndex) {
    // determines what page an item is on. Zero based indexes
    // this method should return -1 for itemIndex values that are out of range
    if (itemIndex > this.collection.length - 1 || itemIndex < 0) return -1;
    return Math.floor(itemIndex / this.itemsPerPage);
  }
}

//task 2 https://www.codewars.com/kata/52597aa56021e91c93000cb0

function moveZeros(arr) {
  const array = [...arr];
  const zerosArr = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 0) {
      array.splice(i, 1);
      zerosArr.push(0);
      i--;
    }
  }
  return array.concat(zerosArr);
}

//task 3 https://www.codewars.com/kata/585d8c8a28bc7403ea0000c3

function findUniq(arr) {
  const uniqueArr = arr.map(e => [...new Set(e.toLowerCase())].sort());
  let requiredId = null;
  for (let i = 0; i < uniqueArr.length; i++) {
    for (let j = 0; j < uniqueArr[i].length; j++) {
      if (uniqueArr[i][j] !== uniqueArr[i + 1][j]) {
        if (i === uniqueArr.length - 2) {
          requiredId = i + 1;
          return arr[requiredId];
        }
        if (uniqueArr[i][j] !== uniqueArr[i + 2][j]) {
          requiredId = i;
        } else {
          requiredId = i + 1;
        }
        return arr[requiredId];
      }
    }
  }

  return arr[requiredId];
}

//task 4 https://www.codewars.com/kata/5296bc77afba8baa690002d7

//in progress...
