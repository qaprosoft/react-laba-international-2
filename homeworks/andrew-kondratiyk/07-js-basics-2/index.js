// task 1 https://www.codewars.com/kata/5715eaedb436cf5606000381
const positiveSum = (array) => {
  const positiveElements = array.filter(item => item > 0);
  return positiveElements.length ? positiveElements.reduce((a, b) => a + b) : 0
}

// task 2 https://www.codewars.com/kata/5a3e1319b6486ac96f000049
const pairs = (array) => {
  const pairsArray = array.map((item, index) => {
    if(index % 2 !== 0) {
      return;
    }
    return [array[index], array[index + 1]]
  }).filter(item => item !== undefined);

  return pairsArray.filter(([item1, item2]) => item1 + 1 === item2 || item1 - 1 === item2).length;
};

// task 3 https://www.codewars.com/kata/5aba780a6a176b029800041c
const maxMultiple = (divisor, bound) => Math.floor(bound / divisor) * divisor;

// task 4 https://www.codewars.com/kata/514a6336889283a3d2000001
const getEvenNumbers = (numbersArray) => numbersArray.filter(number => number % 2 === 0);

// task 5 https://www.codewars.com/kata/5a090c4e697598d0b9000004
const solve = (array) => {
  const sortedArray = array.sort((a, b) => a - b);
  return new Array(array.length).fill(0).map((item, index) => {
    return index % 2 === 0 ? sortedArray.pop() : sortedArray.shift()
  })
};

// task 6 https://www.codewars.com/kata/566044325f8fddc1c000002c
const evenChars = (string) => {
  const stringLength = string.length;
  if(stringLength < 2 || stringLength >= 100) {
    return 'invalid string'
  }
  return string.split('').filter((item, index) => index % 2 !== 0)
};

// task 7 https://www.codewars.com/kata/545a4c5a61aa4c6916000755
const gimme = (triplet) => {
  const middleElement = [...triplet].sort((a, b) => a - b)[1];
  return triplet.indexOf(middleElement);
}

// task 8 https://www.codewars.com/kata/578553c3a1b8d5c40300037c
const binaryArrayToNumber = arr => parseInt(arr.join(''), 2);

// task 9 https://www.codewars.com/kata/585d7d5adb20cf33cb000235
const findUniq = (arr) => arr.filter(item => item === arr[0]).length === 1 ? arr[0] : arr.filter(item => item !== arr[0])[0];

// task 10 https://www.codewars.com/kata/581e014b55f2c52bb00000f8
const decipherThis = (string) => {
  return string.split(' ').map(word => {
    const firstLetter = String.fromCharCode(word.replace(/\D/g, ""));
    word = firstLetter + word.replace(/\d/g, "");
    const wordLength = word.length;
    const wordArray = word.split('');
    wordArray[1] = word[wordLength - 1];
    wordArray[wordLength - 1] = word[1];
    return wordArray.join('')
  }).join(' ');
};

// task 11 https://www.codewars.com/kata/578aa45ee9fd15ff4600090d
const sortArray = (array) => {
  const arr = [];
  array.forEach((e, i) => {
    if(e % 2 !== 0) {
      arr.push(e);
      delete array[i];
    }
  });
  arr.sort((a,b) => a-b);
  for (let i = 0; i < array.length; i++) {
    const k = 0;
    if(array[i] === undefined) {
      array[i] = arr[k];
      arr.shift();
    }
  }
  return array;
}

// task 12 https://www.codewars.com/kata/515bb423de843ea99400000a
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
    const pageCount = this.pageCount();
    if(pageIndex > pageCount - 1 || pageIndex < 0) {
      return -1;
    }
    if(pageIndex === pageCount - 1) {
      return this.itemCount() - this.itemsPerPage * pageIndex;
    }
    return this.itemsPerPage;
  }
  pageIndex(itemIndex) {
    if(itemIndex > this.itemCount() - 1 || itemIndex < 0) {
      return - 1;
    }
    return Math.floor(itemIndex / this.itemsPerPage);
  }
}

// task 13 https://www.codewars.com/kata/52597aa56021e91c93000cb0
const moveZeros = (arr) => {
  arr.forEach(item => {
    if(item === 0) {
      arr.splice(arr.indexOf(item), 1);
      arr.push(item);
    }
  });
  return arr;
}

// task 14 https://www.codewars.com/kata/585d8c8a28bc7403ea0000c3
const findUniqStr = (array) => {
  const uniqChars = new Set(array[0].toLowerCase());
  return array.find(item => {
    const itemArray = item.toLowerCase().split('');
    return !itemArray.every(char => uniqChars.has(char));
  })
}

// task 15 https://www.codewars.com/kata/5296bc77afba8baa690002d7
const sudoku = (puzzle) => {
  const size = puzzle.length;
  const boxSize = Math.sqrt(puzzle.length);

  const findEmpty = (puzzle) => {
    for (let i = 0; i < size; i++) {
      for (let j = 0; j < size; j++) {
        if(puzzle[i][j] === 0) {
          return [i, j];
        }
      }
    }
    return null;
  }

  const validate = (num, pos, puzzle) => {
    const [row, col] = pos;

    //Check rows
    for (let i = 0; i < size; i++) {
      if(puzzle[i][col] === num && i !== row) {
        return false;
      }
    }

    //Check cols
    for (let i = 0; i < size; i++) {
      if(puzzle[row][i] === num && i !== col) {
        return false;
      }
    }

    //CheckBox
    const boxRow = Math.floor(row / boxSize) * boxSize;
    const boxCol = Math.floor(col / boxSize) * boxSize;

    for (let i = boxRow; i < boxRow + boxSize; i++) {
      for (let j = boxCol; j < boxCol + boxSize; j++) {
        if(puzzle[i][j] === num && i !== row && j !== col) {
          return false;
        }
      }
    }

    return true;
  }

  const solve = () => {
    const currPos = findEmpty(puzzle);

    if(currPos === null) {
      return true;
    }

    for (let i = 1; i <= size; i++) {
      const currNum = i;
      const isValid = validate(currNum, currPos, puzzle);

      if(isValid) {
        const [x,y] = currPos;
        puzzle[x][y] = currNum;

        if(solve()) {
          return true;
        }

        puzzle[x][y] = 0;
      }
    }

    return false;
  }

  solve();
  return puzzle;
}

