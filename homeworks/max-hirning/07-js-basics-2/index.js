// task 1 https://www.codewars.com/kata/5715eaedb436cf5606000381
function positiveSum(arr) {
  return arr.reduce((res, el) => {
    if (el > 0) res += el;
    return res;
  }, 0);
}

// task 2 https://www.codewars.com/kata/5a3e1319b6486ac96f000049
function pairs(arr) {
  let count = 0;

  for (let i = 0; i < arr.length; i += 2) {
    if (Math.abs(arr[i] - arr[i + 1]) === 1) count += 1;
  }

  return count;
}

// task 3 https://www.codewars.com/kata/5aba780a6a176b029800041c
function maxMultiple(divisor, bound) {
  return Math.floor(bound / divisor) * divisor;
}

// task 4 https://www.codewars.com/kata/514a6336889283a3d2000001
function getEvenNumbers(numbersArray) {
  return numbersArray.filter(el => !(el % 2));
}

// task 5 https://www.codewars.com/kata/5a090c4e697598d0b9000004
function solve(arr) {
  const sortedArr = [...arr].sort((a, b) => a - b); //from less to bigger

  const n = sortedArr.length;
  const result = [];
  let right = n - 1;
  let left = 0;

  while (left <= right) {
    if (left !== right) {
      result.push(sortedArr[right]);
      result.push(sortedArr[left]);
    } else {
      result.push(sortedArr[left]);
    }
    left++;
    right--;
  }

  return result;
}

// task 6 https://www.codewars.com/kata/566044325f8fddc1c000002c
function evenChars(string) {
  const length = string.length;

  if (length < 2 || length > 100) {
    return 'invalid string';
  } else {
    return string.split('').reduce((res, el, index) => {
      if (!((index + 1) % 2)) res.push(el);
      return res;
    }, []);
  }
}

// task 7 https://www.codewars.com/kata/545a4c5a61aa4c6916000755
function gimme(triplet) {
  const sortedTriplet = [...triplet].sort((a, b) => a - b);
  return triplet.findIndex(el => el === sortedTriplet[1]);
}

// task 8 https://www.codewars.com/kata/578553c3a1b8d5c40300037c
function binaryArrayToNumber(arr) {
  return parseInt(arr.join(''), 2);
}

// task 9 https://www.codewars.com/kata/585d7d5adb20cf33cb000235
function findUniq(arr) {
  sortedArr = [...arr].sort((a, b) => a - b);

  if (sortedArr[0] !== sortedArr[1]) return sortedArr[0];

  return sortedArr[sortedArr.length - 1];
}

// task 10 https://www.codewars.com/kata/581e014b55f2c52bb00000f8
function decipherThis(str) {
  const res = (str.split(' ')).map(el => {
    const matchResult = el.match(/\d+/);
    const number = matchResult ? parseInt(matchResult[0]) : null;

    el = el.replace(`${number}`, String.fromCharCode(number));

    if (el.length > 2) {
      const curSecondLetter = el[1];
      const curLastLetter = el[el.length - 1];

      el = el.split('');

      el[1] = curLastLetter;
      el[el.length - 1] = curSecondLetter;

      el = el.join('');
    }
    return el;
  });

  return res.join(' ');
}

// task 11 https://www.codewars.com/kata/578aa45ee9fd15ff4600090d
function sortArray(arr) {
  const oddNumbers = arr.filter(num => num % 2 !== 0).sort((a, b) => a - b); // Filter the odd numbers and sort them in ascending order

  const result = arr.map(num => (num % 2 !== 0 ? oddNumbers.shift() : num)); // Create a result array with odd numbers in their original positions

  return result;
}

//ADVANCED
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
    if (pageIndex >= this.pageCount() || pageIndex < 0) {
      return -1;
    } else {
      if (this.pageCount() > pageIndex + 1) {
        return this.itemsPerPage;
      } else {
        return Math.abs(pageIndex * this.itemsPerPage - this.collection.length);
      }
    }
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
  const zeros = [];
  const nonZeroElements = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      zeros.push(arr[i]);
    } else {
      nonZeroElements.push(arr[i]);
    }
  }

  return nonZeroElements.concat(zeros);
}

// task 3 https://www.codewars.com/kata/585d8c8a28bc7403ea0000c3
function findUniq(arr) {
  let obj = {};
  for (let i of arr) {
    if (!i) {
      continue;
    }
    obj[Array.from(new Set(i.toLowerCase())).sort().join('')] =
      (obj[Array.from(new Set(i.toLowerCase())).sort().join('')] || 0) + 1;
  }
  for (let i of arr) {
    if (i && obj[Array.from(new Set(i.toLowerCase())).sort().join('')] === 1) {
      return i;
    }
  }
}

// task 4 https://www.codewars.com/kata/5296bc77afba8baa690002d7
function sudoku(board) {
  const N = 9;

  function isSafe(row, col, num) {
    for (let i = 0; i < N; i++) {
      if (board[row][i] === num || board[i][col] === num) {
        return false;
      }
    }

    const startRow = row - (row % 3);
    const startCol = col - (col % 3);
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (board[i + startRow][j + startCol] === num) {
          return false;
        }
      }
    }

    return true;
  }

  function findUnassignedCell() {
    for (let i = 0; i < N; i++) {
      for (let j = 0; j < N; j++) {
        if (board[i][j] === 0) {
          return [i, j];
        }
      }
    }
    return null;
  }

  function solve() {
    const cell = findUnassignedCell();
    if (!cell) {
      return true; // is solved
    }

    const [row, col] = cell;

    for (let num = 1; num <= 9; num++) {
      if (isSafe(row, col, num)) {
        board[row][col] = num;

        if (solve()) {
          return true;
        }

        board[row][col] = 0; // cancel choice and try next number
      }
    }

    return false; // no solve for this situation
  }

  solve();
  return board;
}

console.log(sudoku([
  [5, 3, 0, 0, 7, 0, 0, 0, 0],
  [6, 0, 0, 1, 9, 5, 0, 0, 0],
  [0, 9, 8, 0, 0, 0, 0, 6, 0],
  [8, 0, 0, 0, 6, 0, 0, 0, 3],
  [4, 0, 0, 8, 0, 3, 0, 0, 1],
  [7, 0, 0, 0, 2, 0, 0, 0, 6],
  [0, 6, 0, 0, 0, 0, 2, 8, 0],
  [0, 0, 0, 4, 1, 9, 0, 0, 5],
  [0, 0, 0, 0, 8, 0, 0, 7, 9]
]));