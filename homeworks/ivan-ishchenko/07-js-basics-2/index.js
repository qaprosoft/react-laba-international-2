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

// Advanced tasks
// task 1 https://www.codewars.com/kata/515bb423de843ea99400000a
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
    return Math.ceil(this.itemCount() / this.itemsPerPage);
  }
  pageItemCount(pageIndex) {
    // returns the number of items on the current page. page_index is zero based.
    // this method returns -1 for pageIndex values that are out of range
    if (pageIndex >= this.pageCount() || pageIndex < 0) return -1;
    if (pageIndex + 1 === this.pageCount()) {
      let itemsOnPage = this.itemCount() % this.itemsPerPage;
      if (itemsOnPage === 0) itemsOnPage = this.itemsPerPage;
      return itemsOnPage;
    }
    return this.itemsPerPage;
  }
  pageIndex(itemIndex) {
    // determines what page an item is on. Zero based indexes
    // this method should return -1 for itemIndex values that are out of range
    if (itemIndex >= this.itemCount() || itemIndex < 0) return -1;
    return Math.floor(itemIndex / this.itemsPerPage);
  }
}

// task 2 https://www.codewars.com/kata/52597aa56021e91c93000cb0
const moveZeros = arr => {
  return arr.filter(e => e !== 0).concat(arr.filter(e => e === 0));
};

// task 3 https://www.codewars.com/kata/585d8c8a28bc7403ea0000c3
function findUniq(arr) {
  const charSet = new Set();

  let transformedArr = arr.map(word => {
    let newWord = word.toLowerCase();
    for (let char of newWord) charSet.add(char);
    return newWord;
  });

  for (let char of charSet) {
    let occurences = transformedArr.filter(word => word.includes(char));
    if (occurences.length === 1)
      return arr[transformedArr.indexOf(occurences[0])];
  }
}

// task 4 https://www.codewars.com/kata/5296bc77afba8baa690002d7
// this function uses backtracking
// it checks if a number can be placed in certain position
// and than calculates whether this placement leads to a solution
// if not it tries next possible number
function sudoku(puzzle, row = 0, col = 0) {
  // this if statement is used to end recursion
  // if condition is fulfilled, solution was found
  if (row == 8 && col == 9) return true;

  // move to the next row
  if (col == 9) {
    row++;
    col = 0;
  }

  // move to the next position if cell isn't empty
  if (puzzle[row][col] != 0) return sudoku(puzzle, row, col + 1);

  for (let i = 1; i <= 9; i++) {
    // check if number can be placed
    if (isSafe(puzzle, i, row, col)) {
      puzzle[row][col] = i;
      // move to the next empty spot
      if (sudoku(puzzle, row, col + 1)) return puzzle;
    }

    // remove assigned num, because assumption was wrong
    puzzle[row][col] = 0;
  }

  // if we reach this point the previously assigned number was wrong
  return false;
}

// checks if it is safe to put number in certain position
// if it's not already present in a given row, column or cell
function isSafe(puzzle, num, row, col) {
  return !(
    rowContains(puzzle, row, num) ||
    columnContains(puzzle, col, num) ||
    cellContains(puzzle, row, col, num)
  );
}

function rowContains(puzzle, row, num) {
  return puzzle[row].includes(num);
}

function columnContains(puzzle, column, num) {
  for (let i = 0; i < 9; i++) if (puzzle[i][column] === num) return true;

  return false;
}

function cellContains(puzzle, row, column, num) {
  let rowStart = row - (row % 3);
  let columnStart = column - (column % 3);

  for (let i = 0; i < 3; i++)
    for (let j = 0; j < 3; j++)
      if (puzzle[rowStart + i][columnStart + j] === num) return true;

  return false;
}
