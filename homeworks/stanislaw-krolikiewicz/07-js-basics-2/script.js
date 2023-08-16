// task 1 https://www.codewars.com/kata/5715eaedb436cf5606000381
const positiveSum = arr => arr.reduce((sum, current) => current > 0 ? sum + current : sum, 0)

// task 2 https://www.codewars.com/kata/5a3e1319b6486ac96f000049
const pairs = arr => {
  let counter = 0
  for (let i = 0; i < arr.length; i += 2) {
    if (i + 1 < arr.length && Math.abs(arr[i]-arr[i+1]) === 1) counter++
  }
  return counter
}

// task 3 https://www.codewars.com/kata/5aba780a6a176b029800041c
const maxMultiple = (divisor, bound) => {
  for (let i = bound; i > 0; i--){
    if (i % divisor === 0) return i
  }
}

// task 4 https://www.codewars.com/kata/514a6336889283a3d2000001
const getEvenNumbers = arr => arr.filter(el => el % 2 === 0)

// task 5 https://www.codewars.com/kata/5a090c4e697598d0b9000004
const solve = arr => {
  let sorted = arr.sort((a, b) => b - a)
  let min, max
  if (arr.length % 2 === 0) {
    max = sorted.slice(0, arr.length/2)
    min = sorted.slice(arr.length/2).sort((a, b) => a - b)
  } else {
    max = sorted.slice(0, arr.length/2 + 1)
    min = sorted.slice(arr.length/2 + 1).sort((a, b) => a - b)
  }
  sorted = []
  for (let i = 0; i < arr.length/2; i++) {
    sorted.push(max[i])
    if (i < min.length) sorted.push(min[i])
  }
  return sorted
}

// task 6 https://www.codewars.com/kata/566044325f8fddc1c000002c
const evenChars = string => {
  if (string.length < 2 || string.length > 100) return "invalid string"
  let arr = []
  for (let i = 1; i < string.length; i += 2) arr.push(string[i])
  return arr
}

// task 7 https://www.codewars.com/kata/545a4c5a61aa4c6916000755
const gimme = t => {
  if (t[1] < t[0] && t[0] < t[2] || t[2] < t[0] && t[0] < t[1]) return 0
  else if (t[0] < t[1] && t[1] < t[2] || t[2] < t[1] && t[1] < t[0]) return 1
  else if (t[0] < t[2] && t[2] < t[1] || t[1] < t[2] && t[2] < t[0]) return 2
}

// task 8 https://www.codewars.com/kata/578553c3a1b8d5c40300037c
// const binaryArrayToNumber = arr => parseInt(arr.join(''), 2) // other solution
const binaryArrayToNumber = arr => arr.reverse().reduce((sum, curr, index) => sum + (2*curr)**index)

// task 9 https://www.codewars.com/kata/585d7d5adb20cf33cb000235
const findUniq = arr => {
  let a = arr.filter(el => el !== arr[0])
  console.log(a)
  if (a.length === 1) return a[0]
  else return arr[0]
}

// task 10 https://www.codewars.com/kata/581e014b55f2c52bb00000f8
const decipherThis = str => {
  let arr = str.split(' '), b = []
  arr.forEach(el => {
    let current = '', i
    console.log(current)
    if (el[2] >= 0 && el[2] <= 9) i = 3
    else  i = 2
    let letters = el.substring(i, el.length)
    let substitute = letters.length ? letters.length > 1 ? letters[letters.length - 1] + letters.substring(1, letters.length - 1) + letters[0] : letters[0] : ''
    current = current + String.fromCharCode(el.substring(0, i)) + substitute
    b.push(current)
  });
  return b.join(" ")
};

// task 11 https://www.codewars.com/kata/578aa45ee9fd15ff4600090d
const sortArray = array => {
  let odds = [], sorted = [], i = 0
  array.forEach(el => Math.abs(el) % 2 === 1 && odds.push( el))
  odds.sort((a,b) => a-b)
  array.forEach(el => {
    if (Math.abs(el) % 2 === 1) {
      sorted.push(odds[i])
      i++
    } else sorted.push(el)
  })
  return sorted
}

// Optional
// task 1 https://www.codewars.com/kata/515bb423de843ea99400000a
class PaginationHelper {
	constructor(collection, itemsPerPage) {
	// The constructor takes in an array of items and a integer indicating how many
	// items fit within a single page
    this.collection = collection
    this.itemsPerPage = itemsPerPage
	}
	itemCount() {
	// returns the number of items within the entire collection
    return this.collection.length
	}
	pageCount() {
	// returns the number of pages
    return Math.ceil(this.collection.length / this.itemsPerPage)
	}
	pageItemCount(pageIndex) {
	// returns the number of items on the current page. page_index is zero based.
	// this method should return -1 for pageIndex values that are out of range
    if (pageIndex + 1 > this.pageCount() || pageIndex < 0) return -1
    else if (pageIndex + 1 === this.pageCount()) {
      if (this.collection.length % this.itemsPerPage === 0) return this.itemsPerPage
      else return this.collection.length % this.itemsPerPage
    }
    else return this.itemsPerPage
	}
	pageIndex(itemIndex) {
	// determines what page an item is on. Zero based indexes
	// this method should return -1 for itemIndex values that are out of range
    if (itemIndex + 1 > this.collection.length || itemIndex < 0) return -1
    return Math.ceil((itemIndex + 1)/this.itemsPerPage) - 1
	}
}

// task 2 https://www.codewars.com/kata/52597aa56021e91c93000cb0
const moveZeros = arr => {
  let helper = arr.filter(el => el !== 0)
  const n = arr.length - helper.length
  for (let i = 0; i < n; i++) helper.push(0)
  return helper
}

// task 3 https://www.codewars.com/kata/585d8c8a28bc7403ea0000c3
const findUniq2 = arr => {
  let letters = [], first = arr[0], counter = 0, diff
  for (let i = 0; i < first.length; i++) {
    if (!letters.find(el => el.toLowerCase() === first[i].toLowerCase())) letters.push(first[i].toLowerCase())
  }
  for (let i = 1; i < arr.length; i++) {
    for (j = 0; j < arr[i].length; j++) {
      if (!letters.find(el => el.toLowerCase() === arr[i][j].toLowerCase())) {
        if (i > 1 && counter === 0) return arr[i]
        if (i > 1 && counter > 1) return arr[0]
        diff = arr[i]
        console.log(diff)
        counter++
      }
    }
    if (counter === 1 && i === 2 && diff ) return diff
  }
}

// task 4 https://www.codewars.com/kata/5296bc77afba8baa690002d7
const sudoku = puzzle => {
  const isValid = (board, row, col, k) => {
    for (let i = 0; i < 9; i++) {
      const m = 3 * Math.floor(row / 3) + Math.floor(i / 3)
      const n = 3 * Math.floor(col / 3) + i % 3
      if (board[row][i] == k || board[i][col] == k || board[m][n] == k) {
        return false
      }
    }
    return true
  }
  
  const sudokuSolver = data => {
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        if (data[i][j] == 0) {
          for (let k = 1; k <= 9; k++) {
            if (isValid(data, i, j, k)) {
              data[i][j] = k
              if (sudokuSolver(data)) return true
              else data[i][j] = 0
            }
          }
          return false
        }
      }
    }
    return true
  }
  sudokuSolver(puzzle)
  return puzzle
}