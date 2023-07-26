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
