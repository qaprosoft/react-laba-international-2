// Task 1: https://www.codewars.com/kata/5715eaedb436cf5606000381/train/javascript
function positiveSum(numbers) {
  let total = 0;
  numbers.forEach(number => {
    if (number > 0) {
      total += number;
    }
  });

  return total;
}

// Task 2: https://www.codewars.com/kata/5a3e1319b6486ac96f000049/train/javascript
function pairs(numbers) {
  let countPairs = 0;
  for (let i = 1; i < numbers.length; i += 2) {
    if (Math.abs(numbers[i] - numbers[i - 1]) === 1) {
      countPairs++;
    }
  }

  return countPairs;
}

// Task 3: https://www.codewars.com/kata/5aba780a6a176b029800041c/train/javascript
function maxMultiple(divisor, bound) {
  return bound - (bound % divisor);
}

// Task 4: https://www.codewars.com/kata/514a6336889283a3d2000001/train/javascript
function getEvenNumbers(numbersArray) {
  return numbersArray.filter(number => number % 2 === 0);
}

// Task 5: https://www.codewars.com/kata/5a090c4e697598d0b9000004/train/javascript
function solve(numbers) {
  const sortedNumbers = [...numbers];
  sortedNumbers.sort((a, b) => a - b);

  const maxMinArray = [];
  let left = 0;
  let right = sortedNumbers.length - 1;
  while (left < right) {
    maxMinArray.push(sortedNumbers[right]);
    maxMinArray.push(sortedNumbers[left]);
    left++;
    right--;
  }

  // if there is a middle number left, add it
  if (left === right) {
    maxMinArray.push(sortedNumbers[left]);
  }

  return maxMinArray;
}

// Task 6: https://www.codewars.com/kata/566044325f8fddc1c000002c/train/javascript
function evenChars(letters) {
  if (letters.length < 2 || letters.length > 100) {
    return 'invalid string';
  }

  const evenLetters = [];
  for (let i = 0; i < letters.length; i++) {
    if (i % 2) {
      evenLetters.push(letters[i]);
    }
  }

  return evenLetters;
}

// Task 7: https://www.codewars.com/kata/545a4c5a61aa4c6916000755/train/javascript
function gimme(triplet) {
  const sorted = [...triplet];
  sorted.sort((a, b) => a - b);

  const middleNumber = sorted[1];
  return triplet.indexOf(middleNumber);
}

// Task 8: https://www.codewars.com/kata/578553c3a1b8d5c40300037c/train/javascript
const binaryArrayToNumber = arr => {
  let decimal = 0;
  for (let i = 0; i < arr.length; i++) {
    const power = arr.length - i - 1;
    decimal += arr[i] * 2 ** power;
  }

  return decimal;
};

// Task 9: https://www.codewars.com/kata/585d7d5adb20cf33cb000235/train/javascript
function findUniq(numbers) {
  const firstThreeSorted = numbers.slice(0, 3).sort((a, b) => a - b);
  const commonNumber = firstThreeSorted[1];

  for (let number of numbers) {
    if (number !== commonNumber) {
      return number;
    }
  }
}

// Task 10: https://www.codewars.com/kata/581e014b55f2c52bb00000f8/train/javascript
function decipherThis(str) {
  const wordsArray = str.split(/\s/);
  for (let i = 0; i < wordsArray.length; i++) {
    // replace charCode with Letter
    let newWord = wordsArray[i].replace(/^\d+/, charCode =>
      String.fromCharCode(Number(charCode)),
    );

    // swap second and last letters
    newWord = newWord.replace(/(.)(.)(.*)(.)/, '$1$4$3$2');

    wordsArray[i] = newWord;
  }

  return wordsArray.join(' ');
}

// Task 11: https://www.codewars.com/kata/578aa45ee9fd15ff4600090d/train/javascript
function sortArray(array) {
  // filter odd numbers and sort decending
  const sortedOddNumbers = array
    .filter(number => number % 2)
    .sort((a, b) => b - a);

  // replace odd numbers with the sorted value
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2) {
      // pop the smallest number and replace current with it
      const smallestOddNumber = sortedOddNumbers.pop();
      array[i] = smallestOddNumber;
    }
  }

  return array;
}

// Task 12: https://www.codewars.com/kata/515bb423de843ea99400000a
class PaginationHelper {
  constructor(collection, itemsPerPage) {
    this.collection = collection;
    this.itemsPerPage = itemsPerPage;
    this.numberOfPages = Math.ceil(collection.length / itemsPerPage);
  }

  itemCount() {
    return this.collection.length;
  }

  pageCount() {
    return this.numberOfPages;
  }

  pageItemCount(pageIndex) {
    // index is out of range
    if (pageIndex < 0 || pageIndex >= this.numberOfPages) {
      return -1;
    }

    // if it is not the last page, it is full
    if (pageIndex < this.numberOfPages - 1) {
      return this.itemsPerPage;
    }

    // last page
    return this.collection.length - pageIndex * this.itemsPerPage;
  }

  pageIndex(itemIndex) {
    // index is out of range
    if (itemIndex < 0 || itemIndex >= this.collection.length) {
      return -1;
    }

    // index is in range
    return Math.floor(itemIndex / this.itemsPerPage);
  }
}

// Task 13: https://www.codewars.com/kata/52597aa56021e91c93000cb0/train/javascript
function moveZeros(arr) {
  let firstZeroIndex = 0;
  for (let currIndex = 0; currIndex < arr.length; currIndex++) {
    // if it's not zero, then swap and update first zero index
    if (arr[currIndex] !== 0) {
      // swap them only if the indexes are differen
      if (currIndex !== firstZeroIndex) {
        const temp = arr[currIndex];
        arr[currIndex] = arr[firstZeroIndex];
        arr[firstZeroIndex] = temp;
      }

      firstZeroIndex++;
    }
  }

  return arr;
}

// Task 14: https://www.codewars.com/kata/585d8c8a28bc7403ea0000c3/train/javascript
function findUniq(arr) {
  const firstThreeStrings = arr.slice(0, 3);
  for (let i = 0; i < firstThreeStrings.length; i++) {
    firstThreeStrings[i] = sortString(firstThreeStrings[i]);
  }
  firstThreeStrings.sort();

  // middle string will be the common one
  const commonChars = firstThreeStrings[1];

  for (let str of arr) {
    const sortedStr = sortString(str);
    if (commonChars !== sortedStr) {
      return str;
    }
  }
}

function sortString(str) {
  // sort the string and remove repetative chars
  return str
    .replace(/\s/g, '')
    .toLowerCase()
    .split('')
    .sort()
    .join('')
    .replace(/(.)\1+/g, '$1');
}

// Task 15: https://www.codewars.com/kata/5296bc77afba8baa690002d7/train/javascript
function sudoku(puzzle) {
  const SIZE = 9;
  completeSudoku();
  return puzzle;

  function completeSudoku() {
    const cell = findEmptyCell();

    // sudoku is complete
    if (!cell) return true;

    // get row and col
    const [row, col] = cell;

    // try every number 1 to 9
    for (let number = 1; number <= SIZE; number++) {
      if (isValid(row, col, number)) {
        puzzle[row][col] = number;
        // check if it completes the puzzle
        if (completeSudoku()) {
          return true;
        }
        // backtrack, wrong answer
        puzzle[row][col] = 0;
      }
    }

    // cell can't be filled
    return false;
  }

  function findEmptyCell() {
    for (let row = 0; row < SIZE; row++) {
      for (let col = 0; col < SIZE; col++) {
        if (puzzle[row][col] === 0) {
          return [row, col];
        }
      }
    }
  }

  function isValid(row, col, number) {
    // check horizontal and vertical cells
    for (let i = 0; i < SIZE; i++) {
      if (puzzle[row][i] === number || puzzle[i][col] === number) {
        return false;
      }
    }

    // check inside the box
    const boxSize = 3;
    const boxRowStart = Math.floor(row / boxSize) * boxSize;
    const boxColStart = Math.floor(col / boxSize) * boxSize;
    for (let i = 0; i < boxSize; i++) {
      for (let j = 0; j < boxSize; j++) {
        if (puzzle[boxRowStart + i][boxColStart + j] === number) {
          return false;
        }
      }
    }

    // valid
    return true;
  }
}
