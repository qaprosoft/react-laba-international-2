// task 1 http://www.codewars.com/kata/opposite-number
function opposite(number) {
    return -number;
}

// task 2 http://www.codewars.com/kata/basic-mathematical-operations
function basicOp(operation, value1, value2)
{
    switch (operation) {
        case '+':
            return value1 + value2;
        case '-':
            return value1 - value2;
        case '*':
            return value1 * value2;
        case '/':
            return value1 / value2;
        default:
            return 'Wrong operation sign, should be String';
    }
}

// task 3 http://www.codewars.com/kata/printing-array-elements-with-comma-delimiters
function printArray(array){
    return array.join(',');
}

// task 4 http://www.codewars.com/kata/transportation-on-vacation
function rentalCarCost(d) {
    const rentCostPerDay = 40;
    const discountForSevenDays = 50;
    const discountForThreeDays = 20;

    if (d > 0 && d < 3) {
        return rentCostPerDay * d;
    }
    else if (d >= 3 && d < 7) {
        return ((rentCostPerDay * d) - discountForThreeDays);
    }
    else if (d => 7) {
        return ((rentCostPerDay * d) - discountForSevenDays);
    }
    else {
        return 'Wrong data';
    }
}

// task 5 http://www.codewars.com/kata/calculating-with-functions
function zero(operation) {
    return operation ? operation(0) : 0;
}
function one(operation) {
    return operation ? operation(1) : 1;
}
function two(operation) {
    return operation ? operation(2) : 2;
}
function three(operation) {
    return operation ? operation(3) : 3;
}
function four(operation) {
    return operation ? operation(4) : 4;
}
function five(operation) {
    return operation ? operation(5) : 5;
}
function six(operation) {
    return operation ? operation(6) : 6;
}
function seven(operation) {
    return operation ? operation(7) : 7;
}
function eight(operation) {
    return operation ? operation(8) : 8;
}
function nine(operation) {
    return operation ? operation(9) : 9;
}

function plus(b) {
    return function(a) {
        return a + b;
    };
}
function minus(b) {
    return function(a) {
        return a - b;
    };
}
function times(b) {
    return function(a) {
        return a * b;
    };
}
function dividedBy(b) {
    return function(a) {
        return Math.floor(a / b);
    };
}

// task 6 http://www.codewars.com/kata/get-the-middle-character
function getMiddle(s) {
    if (s.length % 2) {
        return s.slice(Math.floor(s.length / 2), Math.floor(s.length / 2) + 1);
    } else {
        return s.slice(s.length / 2 - 1, s.length / 2 + 1);
    }
}

// task 7 http://www.codewars.com/kata/partition-on
function partitionOn(pred, items) {
    let part1 = [];
    let part2 = [];
    items.map(function(item){
        if (pred(item)) {
            part2.push(item);
        } else {
            part1.push(item);
        }
    });
    items.splice(0, items.length).push.apply(items, part1.concat(part2));
    return part1.length;
}

// task 8 http://www.codewars.com/kata/word-count
// Kata is not available

// task 9 https://www.codewars.com/kata/find-the-odd-int/
function findOdd(A) {
    return A.find((item, index) => A.filter(el => el == item).length % 2)
}

// task 10 https://www.codewars.com/kata/find-the-parity-outlier
function findOutlier(int){
    let even = int.filter(a => a % 2 === 0);
    let odd = int.filter(a  => a % 2 !== 0);
    return even.length === 1 ? even[0] : odd[0];
}

// task 11 https://www.codewars.com/kata/zipwith
function zipWith(fn, a0, a1) {
    const resArr = [];
    let len1 = a0.length;
    let len2 = a1.length;

    for (let i = 0; i < len1 && i < len2; i++) {
        resArr.push(fn(a0[i], a1[i]));
    }

    return resArr;
}

// task 12 https://www.codewars.com/kata/filter-the-number
var FilterString = function(value) {
    return +value.replace(/\D+/g, '');
}

// task 13 https://www.codewars.com/kata/n-th-fibonacci
function nthFibo(n) {
    let [prev, curr] = [0, 1];
    for (let i = 1; i < n; i++) [prev, curr] = [curr, prev + curr];
    return prev;
}

// task 14 https://www.codewars.com/kata/cat-and-mouse-2d-version/
function catMouse(map,moves){
    if(!map.includes('C') || !map.includes('m')){
        return "boring without two animals";
    }

    let arrayedMap = map.split('\n');
    let mouseRow = 0;
    let mouseColumn = 0;
    let catRow = 0;
    let catColumn = 0;

    arrayedMap.forEach((item, index) => {
        if (item.includes('m')) {
            mouseRow = index + 1;
            mouseColumn = item.indexOf('m') + 1;
        }

        if (item.includes('C')) {
            catRow = index + 1;
            catColumn = item.indexOf('C') + 1;
        }
    })

    const stepsNeeded = (Math.max(mouseRow, catRow) - Math.min(mouseRow, catRow)) + (Math.max(mouseColumn, catColumn) - Math.min(mouseColumn, catColumn));

    if (stepsNeeded <= moves) {
        return "Caught!";
    } else {
        return "Escaped!";
    }
}

// task 15 https://www.codewars.com/kata/duplicate-encoder
function duplicateEncode(word){
    let  string= '';
    word = word.toLowerCase();
    for (let i=0; i < word.length; i++) {
        if (word.lastIndexOf(word[i]) == word.indexOf(word[i])) {
            string += '(';
        }
        else{
            string += ')';
        }
    }
    return string;
}

//task 16 https://www.codewars.com/kata/5693239fb761dc8670000001







// https://www.codewars.com/kata/576757b1df89ecf5bd00073b
// https://www.codewars.com/kata/58f5c63f1e26ecda7e000029
// https://www.codewars.com/kata/59d398bb86a6fdf100000031
// https://www.codewars.com/kata/514a024011ea4fb54200004b
