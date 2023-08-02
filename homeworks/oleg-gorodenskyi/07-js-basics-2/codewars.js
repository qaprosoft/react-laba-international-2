// task 1 https://www.codewars.com/kata/5715eaedb436cf5606000381
function positiveSum(arr) {
    return arr.filter(num => num >= 0).reduce((a, b) => a + b, 0)
}

// task 2 https://www.codewars.com/kata/5a3e1319b6486ac96f000049
function pairs(ar) {
    let count = 0;
    for (let i = 0; i < ar.length; i += 2) {
        if (Math.abs(ar[i] - (ar[i + 1])) == 1) {
            count += 1
        }
    }
    return count
};


// task 3 https://www.codewars.com/kata/5aba780a6a176b029800041c
function maxMultiple(divisor, bound) {
    return Math.floor(bound / divisor) * divisor
}


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

// task 7 https://www.codewars.com/kata/545a4c5a61aa4c6916000755
function gimme(triplet) {
    const maxNumIdx = triplet.indexOf(Math.max(...triplet));
    const minNumIdx = triplet.indexOf(Math.min(...triplet));
    for (let i = 0; i < triplet.length; i++) {
        if (i !== maxNumIdx && i !== minNumIdx) {
            return i
        }
    }
}

// task 8 https://www.codewars.com/kata/578553c3a1b8d5c40300037c
const binaryArrayToNumber = arr => {
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
        result += arr[i] * Math.pow(2, arr.length - 1 - i)
    }
    return result
};

// task 9 https://www.codewars.com/kata/585d7d5adb20cf33cb000235
function findUniq(arr) {
    let sortedArr = arr.sort((a, b) => a - b, 0)
    if (sortedArr[0] === sortedArr[1]) {
        return sortedArr[sortedArr.length - 1]
    } else return sortedArr[0]
}

// task 10 https://www.codewars.com/kata/581e014b55f2c52bb00000f8
function decipherThis(str) {
    const arrayOfWords = str.split(' ')
    const numbers = arrayOfWords.map(word => parseInt(word))
    const parsedNumbers = numbers.map(num => String.fromCharCode(num))

    const parsedArrayOfWords = arrayOfWords.map((word, index) => word.replace(numbers[index], parsedNumbers[index]))

    const result = parsedArrayOfWords.map(word => {
        let wordArray = word.split('');
        wordArray.length > 2 ? [wordArray[1], wordArray[wordArray.length - 1]] = [wordArray[wordArray.length - 1], wordArray[1]] : word;
        return wordArray.join('')
    })
    return result.join(' ')
};

// task 11 //www.codewars.com/kata/578aa45ee9fd15ff4600090d
function sortArray(array) {
    const result = []
    const sortedOddArr = array.filter(num => num % 2 !== 0).sort((a, b) => a - b);
    array.map(num => num % 2 !== 0 ? result.push(sortedOddArr.shift()) : result.push(num))
    return result
}

// Optional (advanced)
// task 1 https://www.codewars.com/kata/515bb423de843ea99400000a


// task 2 https://www.codewars.com/kata/52597aa56021e91c93000cb0
function moveZeros(arr) {
    const noZero = arr.filter(num => num !== 0);
    const onlyZero = arr.filter(num => num === 0)
    return result = noZero.concat(onlyZero)
}

// task 3 https://www.codewars.com/kata/585d8c8a28bc7403ea0000c3 
// partial decision, which doesn't work with such kinds of arr like [ 'Aa', 'aaa', 'aaaaa', 'BbBb', 'Aaaa', 'AaAaAa', 'a' ]
// will be grateful, if you'll throw me a hint
function findUniq(strings) {
    const charCodesMap = {};
    let uniqueStr = ''

    const charCodeTotalArr = strings.map(word => {
        let charCodesSum = word.replace(/\s+/g, '').split('').reduce((a, b) => a + b.charCodeAt(0), 0)
        return charCodesSum
    })

    for (let i = 0; i < charCodeTotalArr.length; i++) {
        if (!charCodesMap[charCodeTotalArr[i]]) {
            charCodesMap[charCodeTotalArr[i]] = [];
        }
        charCodesMap[charCodeTotalArr[i]].push(strings[i]);
    }

    for (let key in charCodesMap) {
        if (charCodesMap[key].length === 1) {
            uniqueStr = charCodesMap[key].join('')
        }
    }
    return uniqueStr
}
