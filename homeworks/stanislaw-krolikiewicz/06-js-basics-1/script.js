// task 1 http://www.codewars.com/kata/opposite-number
const opposite = n => -n
// task 2 http://www.codewars.com/kata/basic-mathematical-operations
const basicOp = (operator, value1, value2) => {
  switch (operator) {
    case '+':
      return value1 + value2
    case '-':
      return value1 - value2
    case '*':
      return value1 * value2
    case '/':
      return value1 / value2
    default:
      break
  }
}

// task 3 http://www.codewars.com/kata/printing-array-elements-with-comma-delimiters
const printArray = (Array) => {
  let string = ''
  Array.forEach((element, index) => {
    string = index !== Array.length - 1 ? string + element + ',' : string + element
  });
  return string
}

// task 4 http://www.codewars.com/kata/transportation-on-vacation
const rentalCarCost = (d) => {
  let cost = d * 40
  if (d >= 3) {
    if (d < 7) cost -= 20
    else cost -= 50
  }
  return cost
}

// task 5 http://www.codewars.com/kata/calculating-with-functions
const calculateString = (string) => {
  switch (string[1]) {
    case '+':
      return parseInt(string[0]) + parseInt(string[2])
    case '-':
      return parseInt(string[0]) - parseInt(string[2])
    case '*':
      return parseInt(string[0]) * parseInt(string[2])
    case '/':
      return parseInt(parseInt(string[0]) / parseInt(string[2]))
    default:
      break
  }
}
const zero = (operation) => {
  if (operation) {
    let string = '0' + operation
    return calculateString(string)
  }
  else return 0
}
const one = (operation) => {
  if (operation) {
    let string = '1' + operation
    return calculateString(string)
  }
  else return 1
}
const two = (operation) => {
  if (operation) {
    let string = '2' + operation
    return calculateString(string)
  }
  else return 2
}
const three = (operation) => {
  if (operation) {
    let string = '3' + operation
    return calculateString(string)
  }
  else return 3
}
const four = (operation) => {
  if (operation) {
    let string = '4' + operation
    return calculateString(string)
  }
  else return 4
}
const five = (operation) => {
  if (operation) {
    let string = '5' + operation
    return calculateString(string)
  }
  else return 5
}
const six = (operation) => {
  if (operation) {
    let string = '6' + operation
    return calculateString(string)
  }
  else return 6
}
const seven = (operation) => {
  if (operation) {
    let string = '7' + operation
    return calculateString(string)
  }
  else return 7
}
const eight = (operation) => {
  if (operation) {
    let string = '8' + operation
    return calculateString(string)
  }
  else return 8
}
const nine = (operation) => {
  if (operation) {
    let string = '9' + operation
    return calculateString(string)
  }
  else return 9
}

const plus = (rightOperand) => {
  return '+' + rightOperand
}
const minus = (rightOperand) => {
  return '-' + rightOperand
}
const times = (rightOperand) => {
  return '*' + rightOperand
}
const dividedBy = (rightOperand) => {
  return '/' + rightOperand
}

// task 6 http://www.codewars.com/kata/get-the-middle-character
const getMiddle = (word) => {
  let middle = parseInt(word.length/2)
  if (word.length % 2 === 0) return word.slice(middle - 1, middle + 1)
  else return word[middle]
}

// task 7 http://www.codewars.com/kata/partition-on
const partitionOn = (pred, arr) => {
  let tsArray = [], fsArray = []
  arr.forEach(item => pred(item) ? tsArray.push(item) : fsArray.push(item))
  arr.splice(0, arr.length, ...fsArray.concat(tsArray))
  return tsArray.length > 0 ? fsArray.length : 'There is no boundary index! All the values are false.'
}

// task 8 http://www.codewars.com/kata/word-count
// Error 404

// task 9 https://www.codewars.com/kata/find-the-odd-int/
const findOdd = (Array) => {
  let activeNumber = Array[0], counter = 0

  for (let i = 0; i < Array.length; i++) {
    if (Array[i] === activeNumber) counter++
    if (i === Array.length - 1) {
      if (counter % 2 === 0) return findOdd(Array.filter(item => item !== activeNumber))
      else return activeNumber
    }
  }
}

// task 10 https://www.codewars.com/kata/find-the-parity-outlier
const findOutlier = (Array) => {
  if(Math.abs(Array[0]) % 2 === 0) {
    if (Array[1] % 2 === 0)
      for (let i = 2; i < Array.length; i++) {
        if (Math.abs(Array[i]) % 2 === 1) return Array[i]
      }
    else {
      if (Math.abs(Array[2]) % 2 === 1) return Array[0]
      else return Array[1]
    }
  }
  else {
    if (Math.abs(Array[1]) % 2 === 1)
      for (let i = 2; i < Array.length; i++) {
        if (Math.abs(Array[i]) % 2 === 0) return Array[i]
      }
    else {
      if (Math.abs(Array[2]) % 2 === 1) return Array[1]
      else return Array[0]
    }
  }
}

// task 11 https://www.codewars.com/kata/zipwith
const zipWith = (fn, a0,a1) => {
  let l = Math.min(a0.length, a1.length)
  let finalArray = []
  for (let i = 0; i < l; i++) finalArray.push(fn(a0[i], a1[i]))
  return finalArray
}

// task 12 https://www.codewars.com/kata/filter-the-number
const filterString = string => {
  let filtered = ''
  Array.from(string).forEach(char => {
    if (char >= 0 && char <= 9) filtered += char
  })
  return parseInt(filtered)
}

// task 13 https://www.codewars.com/kata/n-th-fibonacci
const nthFibo = n => {
  let sum = 1, lastN = 1, lastLastN = 0;
  if (n === 1) sum = 0
  else if (n > 2) {
    for (let i = 2; i < n; i++) {
      sum = lastN + lastLastN
      lastLastN = lastN
      lastN = sum
    }
  }
  return sum
}

// const nthFibo = n => {
//   let [prev, curr] = [0, 1]
//   for (let i = 1; i < n; i++) [prev, curr] = [curr, prev + curr]
//   return prev
// }

// task 14 https://www.codewars.com/kata/cat-and-mouse-2d-version/
const catMouse = (map, moves) => {
  let C = {row: undefined, col: undefined}, m = {row: undefined, col: undefined}, minMoves, width = 0
  while (map[width] === '.' || map[width] === 'C' || map[width] === 'm') {
    width++
  }
  width++
  for (let i = 0; i < map.length; i++) {
    if (map[i] === 'C') {
      C.row = parseInt(i / width) + 1
      C.col = i % width + 1
    }
    else if (map[i] === 'm') {
      m.row = parseInt(i / width) + 1
      m.col = i % width + 1
    }
  }
  minMoves = Math.abs(C.row - m.row) + Math.abs(C.col - m.col)
  console.log(minMoves, C.col, C.row, m.col, m.row)
  if (m.row && C.col) {
    if (minMoves <= moves) return 'Caught!'
    else return 'Escaped!'
  }
  else return 'boring without two animals'
}