//task 1 https://www.codewars.com/kata/5715eaedb436cf5606000381

function positiveSum(arr) {
    let sum = 0;
    arr.forEach(function (item) {
        if (item > 0) {
            sum += item;
        }
    });
    return sum
}


//task 2 https://www.codewars.com/kata/5a3e1319b6486ac96f000049



//task 3 https://www.codewars.com/kata/5aba780a6a176b029800041c

function maxMultiple(divisor, bound) {

    let remainder = bound % divisor;
    let largestIntegerN = bound - remainder;

    if (largestIntegerN % divisor >= 0 &&
        largestIntegerN <= bound &&
        largestIntegerN > 0) {
        return largestIntegerN;
    }
}

//task 4 https://www.codewars.com/kata/514a6336889283a3d2000001

function getEvenNumbers(numbersArray) {
    return numbersArray.filter(function (number) {
        return number % 2 == 0;
    })
}

//task 5 https://www.codewars.com/kata/5a090c4e697598d0b9000004

function solve(arr) {
    const sorted = [...arr].sort((a, b) => b - a);

    const rearranged = arr.map((_, index) => {
        if (index % 2 === 0) {
            return sorted.shift();
        } else {
            return sorted.pop();
        }
    })
    return rearranged;
};

// task 6 https://www.codewars.com/kata/566044325f8fddc1c000002c

function evenChars(string) {

    const evenCharacters = [];

    if (string.length < 2 || string.length > 100) {
        return "invalid string"
    }

    for (let i = 1; i < string.length; i += 2) {
        evenCharacters.push(string[i]);
    }

    return evenCharacters;
}

// task 7 https://www.codewars.com/kata/545a4c5a61aa4c6916000755

function gimme(triplet) {
    const a = triplet[0];
    const b = triplet[1];
    const c = triplet[2];

    if ((a < b && b < c) || (c < b && b < a)) {
        return 1;
    } else if ((b < a && a < c) || (c < a && a < b)) {
        return 0;
    } else {
        return 2;
    }
}

// task 8 https://www.codewars.com/kata/578553c3a1b8d5c40300037c

const binaryArrayToNumber = arr => {
    let result = 0;

    for (let i = 0; i < arr.length; i++) {
        result = result * 2 + arr[i]
    }
    return result;
};

// task 9 https://www.codewars.com/kata/585d7d5adb20cf33cb000235



// task 10 https://www.codewars.com/kata/581e014b55f2c52bb00000f8

function decipherThis(str) {
    const wordsArray = str.split(' ');

    function decipherWord(word) {
        const charNumber = parseInt(word.match('/\d+/'));

        if (!charNumber) {
            return word;
        }

        const decodedLetter = String.fromCharCode(charNumber);
        const extractedWord = word.split(charNumber)[1];
        const mergedWord = decodedLetter + extractedWord;

        if (mergedWord.length > 1) {
            const secondLetter = mergedWord[1];
            const lastLetter = mergedWord[mergedWord.length - 1];
            const finalWord = decodedLetter + lastLetter + mergedWord.substring(2, mergedWord.length - 1) + secondLetter;
        }

        return finalWord;
    }

    const decipheredSentence = wordsArray.map(decipherWord).join(' ');
    return decipheredSentence;
}


// task 11 https://www.codewars.com/kata/578aa45ee9fd15ff4600090d

function sortArray(array) {
    const oddNumbers = array.filter(num => num % 2 !== 0);
    oddNumbers.sort((a, b) => a - b);

    let oddIndex = 0;
    return array.map(num => num % 2 !== 0 ? oddNumbers[oddIndex++] : num);
}