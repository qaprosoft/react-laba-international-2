// Codewars tasks
// task 1: https://www.codewars.com/kata/5715eaedb436cf5606000381
function positiveSum(arr) {
  return arr.reduce((sum, current) => (current > 0 ? sum + current : sum), 0);
}

// task 2: https://www.codewars.com/kata/5a3e1319b6486ac96f000049
function pairs(array) {
  let count = 0;
  for (let i = 0; i < array.length - 1; i += 2) {
    Math.abs(array[i] - array[i + 1]) == 1 ? count++ : count;
  }
  return count;
}

// task 3: https://www.codewars.com/kata/5aba780a6a176b029800041c
function maxMultiple(divisor, bound) {
  return Math.floor(bound / divisor) * divisor;
}

// task 4: https://www.codewars.com/kata/514a6336889283a3d2000001
function getEvenNumbers(numbersArray) {
  return numbersArray.filter(element => element % 2 == 0);
}

// task 5: https://www.codewars.com/kata/5a090c4e697598d0b9000004
function solve(arr) {
  const sorted = [...arr].sort((x, y) => y - x);
  for (let i = 1; i < arr.length; i += 2) {
    sorted.splice(i, 0, sorted.pop());
  }
  return sorted;
}

// task 6: https://www.codewars.com/kata/566044325f8fddc1c000002c
function evenChars(string) {
  if (string.length < 2 || string.length > 100) return 'invalid string';
  const stringArray = string.split('');
  return stringArray.filter((_element, index) => index % 2 != 0);
}

// task 7: https://www.codewars.com/kata/545a4c5a61aa4c6916000755
function gimme(triplet) {
  const middle = triplet.find(
    element => element > Math.min(...triplet) && element < Math.max(...triplet),
  );
  return triplet.indexOf(middle);
}

// task 8: https://www.codewars.com/kata/578553c3a1b8d5c40300037c
const binaryArrayToNumber = arr => {
  return arr
    .reverse()
    .reduce(
      (sum, current, index) => (current == 1 ? sum + Math.pow(2, index) : sum),
      0,
    );
};

// with parseInt:
const binaryArrayToNumber2 = arr => {
  return parseInt(arr.join(''), 2);
};

// task 9: https://www.codewars.com/kata/585d7d5adb20cf33cb000235
function findUniq(arr) {
  return arr.find(element => arr.indexOf(element) == arr.lastIndexOf(element));
}

//task 10: https://www.codewars.com/kata/581e014b55f2c52bb00000f8
function decipherThis(str) {
  return str
    .split(' ')
    .map(element =>
      element
        .replace(/\d+/g, code => String.fromCharCode(code))
        .replace(/(\w)(\w)(\w*)(\w)/, '$1$4$3$2'),
    )
    .join(' ');
}

// task 11: https://www.codewars.com/kata/578aa45ee9fd15ff4600090d
function sortArray(array) {
  const sorted = [...array];
  const odds = sorted.filter(element => element % 2 != 0).sort((x, y) => y - x);
  for (let i = 0; i < array.length; i++) {
    if (sorted[i] % 2 !== 0) sorted[i] = odds.pop();
  }
  return sorted;
}

// Optional (advanced)
// task 1: https://www.codewars.com/kata/515bb423de843ea99400000a
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
    if (this.itemCount() == 0) return 0;
    const div = parseInt(this.itemCount() / this.itemsPerPage);
    return this.itemCount() % this.itemsPerPage == 0 ? div : div + 1;
  }
  pageItemCount(pageIndex) {
    // returns the number of items on the current page. page_index is zero based.
    // this method should return -1 for pageIndex values that are out of range
    if (pageIndex >= this.pageCount() || pageIndex < 0) return -1;
    return (pageIndex + 1) * this.itemsPerPage <= this.itemCount()
      ? this.itemsPerPage
      : this.itemCount() % this.itemsPerPage;
  }
  pageIndex(itemIndex) {
    // determines what page an item is on. Zero based indexes
    // this method should return -1 for itemIndex values that are out of range
    if (itemIndex >= this.itemCount() || itemIndex < 0) return -1;
    return parseInt(itemIndex / this.itemsPerPage);
  }
}

// task 2: https://www.codewars.com/kata/52597aa56021e91c93000cb0
function moveZeros(arr) {
  return arr
    .filter(element => element !== 0)
    .concat(arr.filter(element => element === 0));
}

// task 3: https://www.codewars.com/kata/585d8c8a28bc7403ea0000c3 -- find the unique string
// task 4: https://www.codewars.com/kata/5296bc77afba8baa690002d7 -- sudoku solver
