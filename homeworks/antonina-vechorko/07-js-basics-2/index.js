// task 1 https://www.codewars.com/kata/5715eaedb436cf5606000381
function positiveSum(arr) {
  const positiveArr = arr.filter(num => num > 0);
  const sum = positiveArr.reduce((acc, value) => acc + value, 0);
  return sum;
}

// task 2 https://www.codewars.com/kata/5a3e1319b6486ac96f000049
function pairs(ar) {
  let count = 0;
  for (let i = 0; i < ar.length; i += 2) {
    if (Math.abs(ar[i] - ar[i + 1]) === 1) count++;
  }
  return count;
}

// task 3 https://www.codewars.com/kata/5aba780a6a176b029800041c
function maxMultiple(divisor, bound) {
  for (let i = bound; i >= divisor; i--) {
    if (!(i % divisor)) {
      return i;
    }
  }
}

// task 4 https://www.codewars.com/kata/514a6336889283a3d2000001
function getEvenNumbers(numbersArray) {
  return numbersArray.filter(number => !(number % 2));
}

// task 5 https://www.codewars.com/kata/5a090c4e697598d0b9000004
function solve(arr) {
  const sortedArr = arr.sort((a, b) => a - b);
  const result = [];

  for (let i = 0, j = sortedArr.length - 1; i <= j; i++, j--) {
    if (i === j) {
      result.push(sortedArr[i]);
    } else {
      result.push(sortedArr[j], sortedArr[i]);
    }
  }

  return result;
}

// task 6 https://www.codewars.com/kata/566044325f8fddc1c000002c
function evenChars(string) {
  if (string.length < 2 || string.length > 100) {
    return 'invalid string';
  }

  const result = [];
  for (let i = 1; i < string.length; i += 2) {
    result.push(string[i]);
  }

  return result;
}

// task 7 https://www.codewars.com/kata/545a4c5a61aa4c6916000755
function gimme(triplet) {
  const sortedArray = [...triplet].sort((a, b) => a - b);

  const middleValue = sortedArray[1];
  const middleIndex = triplet.indexOf(middleValue);

  return middleIndex;
}

// task 8 https://www.codewars.com/kata/578553c3a1b8d5c40300037c
function binaryArrayToNumber(arr) {
  const binaryString = arr.join('');
  const decimalNumber = parseInt(binaryString, 2);
  return decimalNumber;
}

// task 9 https://www.codewars.com/kata/585d7d5adb20cf33cb000235
function findUniq(arr) {
  return arr.find(n => arr.indexOf(n) === arr.lastIndexOf(n));
}

// task 10 https://www.codewars.com/kata/581e014b55f2c52bb00000f8
function decipherThis(str) {
  return str.split` `.map(a =>
    a
      .replace(/\d+/, a => String.fromCharCode(a))
      .replace(/(^.)(.)(.*)(.$)/, '$1$4$3$2'),
  ).join` `;
}

// task 11 https://www.codewars.com/kata/578aa45ee9fd15ff4600090d
function sortArray(array) {
  const odd = array.filter(x => x % 2).sort((a, b) => a - b);
  return array.map(x => (x % 2 ? odd.shift() : x));
}

// Optional (advanced)
// task 1 https://www.codewars.com/kata/515bb423de843ea99400000a
class PaginationHelper {
  constructor(collection, itemsPerPage) {
    this.collection = collection;
    this.itemsPerPage = itemsPerPage;
  }

  itemCount() {
    return this.collection.length;
  }

  pageCount() {
    return Math.ceil(this.collection.length / this.itemsPerPage);
  }

  pageItemCount(pageIndex) {
    if (pageIndex < 0 || pageIndex >= this.pageCount()) {
      return -1;
    }

    const start = pageIndex * this.itemsPerPage;
    const end = Math.min(start + this.itemsPerPage, this.itemCount());

    return end - start;
  }

  pageIndex(itemIndex) {
    if (itemIndex < 0 || itemIndex >= this.itemCount()) {
      return -1;
    }

    return Math.floor(itemIndex / this.itemsPerPage);
  }
}

// task 2 https://www.codewars.com/kata/52597aa56021e91c93000cb0
function moveZeros(arr) {
  const nonZeros = [];
  const zeros = [];

  for (const element of arr) {
    if (element !== 0) {
      nonZeros.push(element);
    } else {
      zeros.push(element);
    }
  }

  return nonZeros.concat(zeros);
}

// task 3 https://www.codewars.com/kata/585d8c8a28bc7403ea0000c3
function findUniq(arr) {
  const formatted = arr.map(str => {
    const arr = str.trim().toLowerCase().split('');
    return [...new Set(arr)].sort().join('');
  });

  for (let i = 0; i < formatted.length; i++) {
    if (
      formatted.indexOf(formatted[i]) === formatted.lastIndexOf(formatted[i])
    ) {
      return arr[i];
    }
  }
}

// task 4 https://www.codewars.com/kata/5296bc77afba8baa690002d7
function sudoku(puzzle) {
  let arr = createArr(puzzle);
  const sum = 45;

  while (arr.length) {
    for (let i = 0; i < arr.length; i++) {
      let array = [];
      array = checkSquare(puzzle, arr[i][0], arr[i][1], array);
      array = checkLine(puzzle, arr[i][0], arr[i][1], array);
      array = array.filter((item, index) => array.indexOf(item) === index);

      if (array.length === 8) {
        puzzle[arr[i][0]][arr[i][1]] =
          sum - array.reduce((item, s) => item + s);
      }
    }
    arr = createArr(puzzle);
  }

  return puzzle;
}

function createArr(puzzle) {
  const arr = [];
  for (let i = 0; i < puzzle.length; i++) {
    for (let j = 0; j < puzzle.length; j++) {
      if (puzzle[i][j] === 0) {
        arr.push([i, j]);
      }
    }
  }
  return arr;
}

function checkSquare(puzzle, i, j, array) {
  let n = i - (i % 3),
    m = j - (j % 3);

  for (let x = n; x < n + 3; x++) {
    for (let y = m; y < m + 3; y++) {
      if (puzzle[x][y]) {
        array.push(puzzle[x][y]);
      }
    }
  }
  return array;
}

function checkLine(puzzle, i, j, array) {
  for (let x = 0; x < 9; x++) {
    if (puzzle[i][x]) {
      array.push(puzzle[i][x]);
    }
    if (puzzle[x][j]) {
      array.push(puzzle[x][j]);
    }
  }
  return array;
}
