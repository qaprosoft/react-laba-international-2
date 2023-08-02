// task 1: https://www.codewars.com/kata/opposite-number
const solution1 = function (num) {
    return num * -1;
}
//task 2: http://www.codewars.com/kata/basic-mathematical-operations;
const solution2 = function (operator, number1, number2) {
    switch(operator) {
        case '+':
            return number1 + number2;
        case '*':
            return number1 * number2;
        case '-':
            return number1 - number2;
        case '/':
            return number1 / number2;
        default: "Wrong operator, try again";
            
    }
}
//task 3: https://www.codewars.com/kata/printing-array-elements-with-comma-delimiters
const solution3 = function(arr) {
       return arr.join();
       //The other solution I thought was looping over the array and concatenate it with a , except for the last position of it.
}
//task 4: http://www.codewars.com/kata/transportation-on-vacation
const solution4 = function(numberOfDays) {
    const price = 40 * numberOfDays;
    if (numberOfDays >= 7) 
        return price - 50;
    else if (numberOfDays >= 3) 
        return price - 20;
    else 
        return price;
}
//task 5: https://www.codewars.com/kata/calculating-with-functions
const solution5 = function() {
    function expression(number, operation) {
        console.log('expression');
        if (!operation) return number;
        else return operation(number);
    }
    function zero(operation) {
        return expression(0, operation);
    }
    function one(operation) {
        return expression(1, operation);
    }
    function two(operation) {
        return expression(2, operation);
    }
    function three(operation) {
        return expression(3, operation);
    }
    function four(operation) {
        return expression(4, operation);
    }
    function five(operation) {
        return expression(5, operation);
    }
    function six(operation) {
        return expression(6, operation);
    }
    function seven(operation) {
        return expression(7, operation);
    }
    function eight(operation) {
        return expression(8, operation);
    }
    function nine(operation) {
        return expression(9, operation);
    }
    function plus(x) {
        return function(y) {
            return y + x;
        }
    }
    function minus(x) {
        return function(y) {
            return y - x;
        }
    }
    function times(x) {
        return function(y) {
            return y * x;
        }
    }
    function dividedBy(x) {
        return function(y) {
            return Math.floor(y / x);
        }
    }
}

//task 6: https://www.codewars.com/kata/get-the-middle-character
const solution6 = function (word) {
    const wordArr = [...word];
    console.log(wordArr);
    const wordLenght = wordArr.length;
    console.log(wordLenght);
    if (wordLenght % 2 == 0) {
        return wordArr[(wordLenght /2) -1] + wordArr[wordLenght / 2];
    }
    else {
        return wordArr[Math.floor(wordLenght / 2)];
    }
}

//task 7: https://www.codewars.com/kata/partition-on
const solution7 = function(pred, items) {
    const falseItems = [];
    const trueItems = [];
    for (const item of items) {
        if (pred(item)) {
        trueItems.push(item);
    } 
    else {
        falseItems.push(item);
    }
  }
  items.splice(0, items.length, ...falseItems, ...trueItems);
  return falseItems.length;
}

//task 8:

//task 9: https://www.codewars.com/kata/find-the-odd-int/
const solution9 = function (items) {
    const isEven = function (num) {
        if (num % 2 == 0) return true;
        return false;
    }
    let rep = 0;
    const notSolutions = [];
    for (let i = 0; i < items.lenght; i++) {
        if (notSolutions.includes(items[i])){
        rep = 0;
        for (let j = i + 1; j < items.lenght; j++) {
            if (items[j] == items[i]) {
                rep++;
            }
        }
        if (!isEven(rep)) {
            return items[i];
        }
        else notSolutions.push(items[i]);
    }
    }
}
