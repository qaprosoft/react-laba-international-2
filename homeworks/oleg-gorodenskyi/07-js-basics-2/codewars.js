// task 1 https://www.codewars.com/kata/5715eaedb436cf5606000381
function positiveSum(arr) {
    return arr.filter(num => num >= 0).reduce((a, b) => a + b, 0)
}

// task 2 https://www.codewars.com/kata/5a3e1319b6486ac96f000049


// task 3 https://www.codewars.com/kata/5aba780a6a176b029800041c


// task 4 https://www.codewars.com/kata/514a6336889283a3d2000001
function getEvenNumbers(numbersArray) {
    return numbersArray.filter(num => (num % 2) === 0);
}

// task 5 https://www.codewars.com/kata/5a090c4e697598d0b9000004
function solve(arr) {
    const sortedArr = arr.sort((a, b) => b - a)
    const newArr = []
    for (let i = 0; i < sortedArr.length / 2; i++) {
        newArr.push(sortedArr[i]);
        newArr.push(sortedArr[sortedArr.length - i - 1])
    }
    if (sortedArr.length % 2 !== 0) {
        newArr.pop()
    }
    return newArr
};

// task 6 https://www.codewars.com/kata/566044325f8fddc1c000002c
function evenChars(string) {
    if (string.length < 2 || string.length > 100) {
        return "invalid string"
    }
    const result = [];
    for (let i = 1; i < string.length; i += 2) {
        result.push(string[i])
    }
    return result
}