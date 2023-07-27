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





// https://www.codewars.com/kata/find-the-parity-outlier
// https://www.codewars.com/kata/zipwith
// https://www.codewars.com/kata/filter-the-number
// https://www.codewars.com/kata/n-th-fibonacci
// https://www.codewars.com/kata/cat-and-mouse-2d-version/
// https://www.codewars.com/kata/duplicate-encoder
// https://www.codewars.com/kata/5693239fb761dc8670000001
// https://www.codewars.com/kata/576757b1df89ecf5bd00073b
// https://www.codewars.com/kata/58f5c63f1e26ecda7e000029
// https://www.codewars.com/kata/59d398bb86a6fdf100000031
// https://www.codewars.com/kata/514a024011ea4fb54200004b
