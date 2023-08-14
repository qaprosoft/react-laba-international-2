/* 1 - https://www.codewars.com/kata/5715eaedb436cf5606000381 */

const sumPositive = (array) => {
    return array.reduce((sum, num) => {
        if (num > 0) {
            return sum + num;
        } else {
            return sum;
        }
    }, 0);
}

/* 2 - https://www.codewars.com/kata/5a3e1319b6486ac96f000049 */

function countConsecutivePairs(arr) {
    const result = [];
    let count = 0

    for (let i = 0; i < arr.length - 1; i += 2) {
        result.push([arr[i], arr[i + 1]]);
    }

    if (arr.length % 2 !== 0) {
        result.push([arr[arr.length - 1], null]);
    }

    result.forEach(pair => {
        if (pair[1] > pair[0]) {
            count++;
        }
    })

    return count
}

/* 3 - https://www.codewars.com/kata/5aba780a6a176b029800041c */

const findLargestN = (divisor, bound) => {

    let largestN = bound - (bound % divisor);

    return largestN;

}

/* 4 - https://www.codewars.com/kata/514a6336889283a3d2000001 */

const getEvenNumbers = (array) => {
    return array.filter(num => num % 2 === 0)
}

/* 5 - https://www.codewars.com/kata/5a090c4e697598d0b9000004 */

const rearrangeMaxMin = (array) => {
    const sortedArr = array.sort((a, b) => b - a);
    const result = [];

    let left = 0;
    let right = sortedArr.length - 1;

    while (left <= right) {
        if (left === right) {
            result.push(sortedArr[left]);
        } else {
            result.push(sortedArr[left]);
            result.push(sortedArr[right]);
        }
        left++;
        right--;
    }

    return result;
};

/*  6 - https://www.codewars.com/kata/566044325f8fddc1c000002c */


const evenSequence = (string) => {
    if (string.length < 2 || string.length > 100) return "invalid string"
    const evenArray = string
        .split('')
        .filter((letter, index) => index % 2 === 1);
    return evenArray;
};

/* 7 - https://www.codewars.com/kata/545a4c5a61aa4c6916000755 */

const findMiddleIndex = (array) => {
    const sortedArr = array.slice().sort((a, b) => b - a);
    return array.indexOf(sortedArr[1]);
};

/* 8 - https://www.codewars.com/kata/578553c3a1b8d5c40300037c */

function binaryArrayToNumber(arr) {
    return parseInt(arr.join(''), 2);
}

/* 9 - https://www.codewars.com/kata/585d7d5adb20cf33cb000235 */

const findUniq = (array) => {

    const counts = {};

    for (const num of array) {
        counts[num] = (counts[num] || 0) + 1;
    }

    for (const num in counts) {
        if (counts[num] === 1) {
            return parseFloat(num);
        }
    }
}

/* 10 - https://www.codewars.com/kata/581e014b55f2c52bb00000f8 */

function decipherThis(str) {
    return str
        .split(' ')
        .map((word) => {
            const charCode = parseInt(word);
            const remainingLetters = word.replace(/^\d+/, '');
            const modifiedLetters =
                remainingLetters.length >= 2
                    ? remainingLetters[remainingLetters.length - 1] +
                    remainingLetters.slice(1, -1) +
                    remainingLetters[0]
                    : remainingLetters;
            return String.fromCharCode(charCode) + modifiedLetters;
        })
        .join(' ');
}

/* 11 - https://www.codewars.com/kata/578aa45ee9fd15ff4600090d */

function sortOddNumbers(arr) {
    const oddNumbers = arr.filter(num => num % 2 !== 0).sort((a, b) => a - b);

    let oddIndex = 0;
    return arr.map(num => (num % 2 !== 0 ? oddNumbers[oddIndex++] : num));
}

/* OPTIONAL */

/* 1 - https://www.codewars.com/kata/515bb423de843ea99400000a */

class PaginationHelper {
    constructor(collection, itemsPerPage) {
        this.collection = collection;
        this.itemsPerPage = itemsPerPage;
    }

    page_count() {
        return Math.ceil(this.collection.length / this.itemsPerPage);
    }

    item_count() {
        return this.collection.length;
    }

    page_item_count(pageIndex) {
        const pageCount = this.page_count();
        if (pageIndex < 0 || pageIndex >= pageCount) {
            return -1;
        }

        if (pageIndex === pageCount - 1) {
            return this.collection.length % this.itemsPerPage || this.itemsPerPage;
        }

        return this.itemsPerPage;
    }

    page_index(itemIndex) {
        if (itemIndex < 0 || itemIndex >= this.collection.length) {
            return -1;
        }

        return Math.floor(itemIndex / this.itemsPerPage);
    }
}

/* 2 - https://www.codewars.com/kata/52597aa56021e91c93000cb0 */

const moveZerosToEnd = (array) => {

    let rest = [];
    let zeros = [];

    array.forEach((el) => {
        if (el === 0) {
            zeros.push(el);
        } else {
            rest.push(el);
        }
    });

    return rest.concat(zeros);
};

/* 3 - https://www.codewars.com/kata/585d8c8a28bc7403ea0000c3 */

function findUniq(arr) {
    const charFrequency = {};
    const normalizeString = str => str.toLowerCase().replace(/\s/g, '');

    for (const str of arr) {
        const normalizedStr = normalizeString(str);
        for (const char of normalizedStr) {
            charFrequency[char] = (charFrequency[char] || 0) + 1;
        }
    }

    for (const str of arr) {
        const normalizedStr = normalizeString(str);
        if (normalizedStr.split('').every(char => charFrequency[char] === 1)) {
            return str;
        }
    }
}







