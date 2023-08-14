// task 1 https://www.codewars.com/kata/5715eaedb436cf5606000381
const positiveSum = arr =>
  arr.reduce((accum, currentVal) => (accum += Math.max(currentVal, 0)), 0);

// task 2 https://www.codewars.com/kata/5a3e1319b6486ac96f000049
const pairs = arr => {
  let count = 0;

  for (let i = 0; i < arr.length; i += 2) {
    if (Math.abs(arr[i] - arr[i + 1]) === 1) count++;
  }

  return count;
};

// task 3 https://www.codewars.com/kata/5aba780a6a176b029800041c
const maxMultiple = (divisor, bound) => bound - (bound % divisor);

// task 4 https://www.codewars.com/kata/514a6336889283a3d2000001
const getEvenNumbers = numbersArray =>
  numbersArray.filter(number => !(number % 2));

// task 5 https://www.codewars.com/kata/5a090c4e697598d0b9000004
const solve = array => {
  const sorted = [...array].sort((a, b) => a - b);

  return array.map((_, index) => (index % 2 ? sorted.shift() : sorted.pop()));
};

// task 6 https://www.codewars.com/kata/566044325f8fddc1c000002c
const evenChars = string => {
  return string.length < 2 || string.length > 100
    ? 'invalid string'
    : string.split('').filter((_, index) => index % 2);
};

// task 7 https://www.codewars.com/kata/545a4c5a61aa4c6916000755
const gimme = triplet => triplet.indexOf([...triplet].sort((a, b) => a - b)[1]);

// task 8 https://www.codewars.com/kata/578553c3a1b8d5c40300037c
const binaryArrayToNumber = arr => parseInt(arr.join(''), 2);

// task 9 https://www.codewars.com/kata/585d7d5adb20cf33cb000235
const findUniq = arr =>
  arr.filter(el => arr.indexOf(el) === arr.lastIndexOf(el))[0];

// task 10 https://www.codewars.com/kata/581e014b55f2c52bb00000f8
const decipherThis = str =>
  str
    .replace(/\d+/g, code => String.fromCharCode(code))
    .split(' ')
    .map(word =>
      word.length > 2
        ? `${word[0]}${word[word.length - 1]}${word.slice(2, word.length - 1)}${
            word[1]
          }`
        : word,
    )
    .join(' ');

// task 11 https://www.codewars.com/kata/578aa45ee9fd15ff4600090d
const sortArray = array => {
  const odd = array.filter(number => number % 2).sort((a, b) => a - b);

  return array.map(number => (number % 2 ? odd.shift() : number));
};

//Optional (advanced)
// task 1 https://www.codewars.com/kata/515bb423de843ea99400000a
class PaginationHelper {
  constructor(collection, itemsPerPage) {
    this.itemsPerPage = itemsPerPage;
    this.collection = collection;
  }

  itemCount() {
    return this.collection.length;
  }

  pageCount() {
    return Math.ceil(this.itemCount() / this.itemsPerPage);
  }

  pageItemCount(pageIndex) {
    return pageIndex >= this.pageCount() || pageIndex < 0
      ? -1
      : this.collection.slice(
          pageIndex * this.itemsPerPage,
          (pageIndex + 1) * this.itemsPerPage,
        ).length;
  }

  pageIndex(itemIndex) {
    return itemIndex >= this.itemCount() || itemIndex < 0
      ? -1
      : Math.floor(itemIndex / this.itemsPerPage);
  }
}

// task 2 https://www.codewars.com/kata/52597aa56021e91c93000cb0
const moveZeros = arr =>
  arr.filter(el => el !== 0).concat(arr.filter(el => el === 0));

// task 3 https://www.codewars.com/kata/585d8c8a28bc7403ea0000c3
function findUniq(arr) {
  const sortedArr = arr.map(str =>
    [...new Set(str.toLowerCase().split('').sort())].join(''),
  );

  for (let string of sortedArr) {
    const currentIndex = sortedArr.indexOf(string);

    if (currentIndex === sortedArr.lastIndexOf(string)) {
      return arr[currentIndex];
    }
  }
}

// task 4 https://www.codewars.com/kata/5296bc77afba8baa690002d7

const sudoku = puzzle => {
  const puzzleSize = 9;
  const sectorSize = 3;

  const findEmptyCell = () => {
    for (let row = 0; row < puzzleSize; row++) {
      for (let column = 0; column < puzzleSize; column++) {
        if (puzzle[row][column] === 0) return [row, column];
      }
    }

    return null;
  };

  const validate = (currNumber, currPosition) => {
    const [currRow, currColumn] = currPosition;

    for (let row = 0; row < puzzleSize; row++) {
      if (puzzle[row][currColumn] === currNumber && row !== currRow)
        return false;
    }

    for (let column = 0; column < puzzleSize; column++) {
      if (puzzle[currRow][column] === currNumber && column !== currColumn)
        return false;
    }

    const sectorRow = Math.floor(currRow / sectorSize) * sectorSize;
    const sectorColumn = Math.floor(currColumn / sectorSize) * sectorSize;

    for (let i = sectorRow; i < sectorRow + sectorSize; i++) {
      for (let j = sectorColumn; j < sectorColumn + sectorSize; j++) {
        if (puzzle[i][j] === currNumber && i !== currRow && j !== currColumn)
          return false;
      }
    }

    return true;
  };

  const solve = () => {
    const currPosition = findEmptyCell();

    if (currPosition === null) return true;

    for (let i = 1; i < puzzleSize + 1; i++) {
      const currNumber = i;
      const isValid = validate(currNumber, currPosition);

      if (isValid) {
        const [row, column] = currPosition;
        puzzle[row][column] = currNumber;

        if (solve()) {
          return true;
        }

        puzzle[row][column] = 0;
      }
    }
  };

  solve();

  return puzzle;
};
