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