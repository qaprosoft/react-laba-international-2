/* 1- https://www.codewars.com/kata/opposite-number */

const getOppositeNumber = (number) => -number;

/* 2 - http://www.codewars.com/kata/basic-mathematical-operations */

const mathOperation = (operator, value1, value2) => {
    switch (operator) {
        case '+':
            return value1 + value2;
        case '-':
            return value1 - value2;
        case '*':
            return value1 * value2;
        case '/':
            return value1 / value2;
    }
};

/* 3 - http://www.codewars.com/kata/printing-array-elements-with-comma-delimiters */

const printWithComma = (array) => array.join(',');

/* 4 - http://www.codewars.com/kata/transportation-on-vacation */

const getAmountForDays = (days) => {
    let cost = days * 40;
    let discount = days >= 7 ? 50 : days >= 3 ? 20 : 0;
    return cost - discount;
};

/* 5 - http://www.codewars.com/kata/calculating-with-functions */

const zero = (operatorFunc) => (operatorFunc ? operatorFunc(0) : 0);
const one = (operatorFunc) => (operatorFunc ? operatorFunc(1) : 1);
const two = (operatorFunc) => (operatorFunc ? operatorFunc(2) : 2);
const three = (operatorFunc) => (operatorFunc ? operatorFunc(3) : 3);
const four = (operatorFunc) => (operatorFunc ? operatorFunc(4) : 4);
const five = (operatorFunc) => (operatorFunc ? operatorFunc(5) : 5);
const six = (operatorFunc) => (operatorFunc ? operatorFunc(6) : 6);
const seven = (operatorFunc) => (operatorFunc ? operatorFunc(7) : 7);
const eight = (operatorFunc) => (operatorFunc ? operatorFunc(8) : 8);
const nine = (operatorFunc) => (operatorFunc ? operatorFunc(9) : 9);

const plus = (number) => {
    return (value) => {
        return number + value;
    };
};
const minus = (number) => {
    return (value) => {
        return number - value;
    };
};
const times = (number) => {
    return (value) => {
        return number * value;
    };
};
const dividedBy = (number) => {
    return (value) => {
        return Math.floor(value / number);
    };
};

/*  6 - https://www.codewars.com/kata/get-the-middle-character */

const getMiddleChar = (string) => {
    const length = string.length;
    const middle = string.length / 2;
    if (length % 2 === 0) {
        return string.slice(middle - 1, middle + 1);
    } else {
        return string.slice(middle, middle + 1);
    }
};

/* 7 - http://www.codewars.com/kata/partition-on */

let items = [1, 2, 3, 4, 5, 6];
const isEven = (n) => n % 2 === 0;

const partitionOn = () => {
    const trueArray = items.filter(isEven);
    const falseArray = items.filter((item) => !isEven(item));

    items = [...falseArray, ...trueArray];

    return falseArray.length;
};

const i = partitionOn(isEven, items);

/* 8 - http://www.codewars.com/kata/word-count */
/* 404 :( */

/*  9 - https://www.codewars.com/kata/find-the-odd-int/ */

const findTheOdd = (array) => {
    const frequency = {};

    for (const num of array) {
        frequency[num] = (frequency[num] || 0) + 1;
    }

    let oddFrequency = Object.entries(frequency).find(
        (entry) => entry[1] % 2 !== 0
    );
    return oddFrequency[0];
};

/* 10 - https://www.codewars.com/kata/find-the-parity-outlier */

const findTheParityOutlier = (array) => {
    let evens = array.filter(isEven);
    let odds = array.filter((item) => !isEven(item));

    let result = odds.length === 1 ? odds[0] : evens[0];

    return result;
};

/*  11 - https://www.codewars.com/kata/zipwith */

const zipWith = (operation, firstArray, secondArray) => {
    return firstArray.map((el, index) => operation(el, secondArray[index]));
};

/*  12 - https://www.codewars.com/kata/filter-the-number */

const filterNumbers = (string) => {
    const numberRegex = /^[0-9]*$/;
    const arrayString = string.split('');
    return arrayString.filter((el) => el.match(numberRegex)).join('');
};

/* 13 - https://www.codewars.com/kata/n-th-fibonacci */

const getNthFibo = (n) => {
    if (n <= 1) {
        return n;
    }

    let a = 0,
        b = 1,
        c = 1,
        result = 1;

    while (c < n) {
        c = a + b;
        a = b;
        b = c;
        result++;
    }

    return result;
};

/* 14 - https://www.codewars.com/kata/cat-and-mouse-2d-version/ */

const canCatchTheMouse = () => {
    let catIndex = map.indexOf('C');
    let mouseIndex = map.indexOf('m');
    let steps = map.split('\n');
    let slice = map.slice(catIndex, mouseIndex);
    let jumps = slice.split('\n').length - 1;
    let spaceBetween = mouseIndex - catIndex;

    let jumpMoves = 0;
    let linearMoves = 0;

    if (catIndex === -1 || mouseIndex === -1) {
        return 'boring without two animals';
    }

    if (jumps === 0) {
        linearMoves = spaceBetween;
    }

    if (jumps === 1) {
        linearMoves =
            slice.split('\n')[1].length + 1 - (catIndex - steps[0].length);
        jumpMoves = 1;
    }

    if (jumps === 2) {
        linearMoves = slice.split('\n')[2].length - catIndex - 1;
        jumpMoves = 2;
    }

    if (jumpMoves + linearMoves < 5) {
        return 'Caught!';
    }

    return 'Escaped!';
};

/*  15 - https://www.codewars.com/kata/duplicate-encoder */

const duplicateEncode = (string) => {
    const lowercaseString = string.toLowerCase();
    const encodeObject = {};

    for (const char of lowercaseString) {
        encodeObject[char] = (encodeObject[char] || 0) + 1;
    }

    let result = '';
    for (const char of lowercaseString) {
        if (encodeObject[char] === 1) {
            result += '(';
        } else {
            result += ')';
        }
    }

    return result;
};

/*  16 - https://www.codewars.com/kata/5693239fb761dc8670000001 */

const findAdditiveNumbers = (num) => {
    const result = [];

    const backtrack = (start, sequence) => {
        if (start === num.length) {
            if (sequence.length >= 3) {
                result.push(...sequence);
            }
            return;
        }

        for (let i = start + 1; i <= num.length; i++) {
            const current = num.slice(start, i);
            if (current.length > 1 && current[0] === '0') break;

            if (sequence.length < 2 || BigInt(sequence[sequence.length - 1]) + BigInt(sequence[sequence.length - 2]) === BigInt(current)) {
                backtrack(i, [...sequence, current]);
            }
        }
    };

    for (let i = 0; i < num.length - 1; i++) {
        const first = num.slice(0, i + 1);
        if (first.length > 1 && first[0] === '0') break;
        for (let j = i + 1; j < num.length; j++) {
            const second = num.slice(i + 1, j + 1);
            if (second.length > 1 && second[0] === '0') break;
            backtrack(j + 1, [first, second]);
        }
    }

    return result;
};


/* 17 - https://www.codewars.com/kata/576757b1df89ecf5bd00073b */

const buildTower = (floors) => {
    const tower = [];
    const maxStars = 2 * floors - 1;

    for (let i = 1; i <= floors; i++) {
        const stars = 2 * i - 1;
        const spaces = (maxStars - stars) / 2;
        const floorStr = ' '.repeat(spaces) + '*'.repeat(stars) + ' '.repeat(spaces);
        tower.push(floorStr);
    }

    return tower;
};

/* 18 - https://www.codewars.com/kata/58f5c63f1e26ecda7e000029 */


const wave = (string) => {
    const stringArray = string.split('');

    return stringArray.map((char, index) => {
        if (char !== ' ') {
            return string.slice(0, index) + char.toUpperCase() + string.slice(index + 1);
        } else {
            return char;
        }
    });
};

/* 19 - https://www.codewars.com/kata/59d398bb86a6fdf100000031 */

const splitStringByLength = (str, N) => {
    const substrings = [];
    for (let i = 0; i < str.length; i += N) {
        substrings.push(str.slice(i, i + N));
    }
    return substrings.join('\n');
};

/* 20 - https://www.codewars.com/kata/514a024011ea4fb54200004b */

const getDomainName = (url) => {
    const domainRegex = /^(?:https?:\/\/)?(?:www\.)?([^/]+)/i;
    const matches = url.match(domainRegex);
    if (matches && matches.length >= 2) {
        return matches[1];
    }
    return null;
};

