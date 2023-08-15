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