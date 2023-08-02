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
const solution9 = function (A) {
    const isEven = function (num) {
          if (num % 2 == 0) return true;
          return false;
      }
      let rep;
      const notSolutions = [];
      for (let i = 0; i < A.length; i++) {
          rep = 1;
        for (let j = 0; j < A.length; j++) {
            if (i !== j) {
              if (A[j] == A[i]) {
                  rep++;
                }
              
            }
        }
          if (!isEven(rep)) {
            return A[i];
        }
      }
  }
//Task 10: https://www.codewars.com/kata/find-the-parity-outlier
const solution10 = function (integers) {
    const evenNumbers = [];
    const oddNumbers = [];
    const isEven = function (num) {
        if (num % 2 == 0) return true;
        return false;
    }
    for (const int of integers) {
        if (isEven(int)) evenNumbers.push(int);
        else oddNumbers.push(int);
    }
    if (evenNumbers.length > oddNumbers.length) return oddNumbers[0];
    else return evenNumbers[0];
 }

 //Task 11: https://www.codewars.com/kata/zipwith

 const solution11 = function (fn, a0, a1) {
    let minLenght;
    const zipped = [];
    if (a0.length > a1.length) minLenght = a1.length;
    else minLenght = a0.length;
    for (let i = 0; i < minLenght; i++) {
        zipped.push(fn(a0[i], a1[i]));
    }
    return zipped;
}

//task 12: https://www.codewars.com/kata/filter-the-number
const solution12 = function(value) {
    let numbers = "";
    for (let i = 0; i < value.length; i++) {
      const char = value[i];
      if (!isNaN(char)) {
        numbers += char;
      }
    }
  
    return parseInt(numbers);
}

//Task 13: https://www.codewars.com/kata/n-th-fibonacci
const solution13 = function (n) {
    let first = 0;
    let second = 1;
    let result = 0;
    if (n > 1) {
        for (let i = 0; i < n-3; i++) {
            let aux = second;
            second = first + second;
            first = aux;
        }
        result = first + second;
        
    }
    return result;
    
}

//Task 14: https://www.codewars.com/kata/cat-and-mouse-2d-version/
//I can't solve this one without chatGPT or without googling the answer and Mykhailo said we could push even if we can't solve the 20

//task 15: https://www.codewars.com/kata/duplicate-encoder
const solution15 = function (word) {
    const lowerWord = word.toLowerCase();
    const repeated = [];
    let result = "";
    let i = 0;
    let counter = 0;
    for (let j = 0; j < lowerWord.length; j++) {
        counter = 0;
        i = j + 1 ;
        if (!repeated.includes(lowerWord[j])) {
            while (i < lowerWord.length && counter == 0) {
                if (lowerWord[j] == lowerWord[i]){
                    counter++;
                    repeated.push(lowerWord[j]);
                }
                i++;
            }
            if (counter == 0) {
                result += "("
            }else result+= ")" 
        }
        else {
            result+= ")"
        }
    }  
    return result;  
}

//Task 16: https://www.codewars.com/kata/5693239fb761dc8670000001
//I can't solve this one without chatGPT or without googling the answer and Mykhailo said we could push even if we can't solve the 20

//Task 17: https://www.codewars.com/kata/576757b1df89ecf5bd00073b
const solution17 = function (nFloors) {
    const result = [];
    const size = nFloors + nFloors - 1;
    for (let i = 0; i < nFloors; i++) {
        let j = 0;
        let aux = ""; 
        while (j < size) {
            if ((j >= Math.floor(size / 2) - i) && (j <= Math.floor(size / 2) + i)) aux += "*"
            else aux += " ";
            j++;
        }
        result.push(aux);
    }
    return result;
}


 //Task 18: https://www.codewars.com/kata/58f5c63f1e26ecda7e000029 
 const solution18 = function (str) {
    const lowerString = str.toLowerCase(); 
    const aux = [];
    const result = [];
    for (let i = 0; i < str.length; i++) {
        aux.push(...lowerString);
        
        aux[i] = aux[i].toUpperCase();
        
        if (aux[i] !== ' '){
            result.push(aux.join(""));
        }
        aux.length = 0;
        
    }
    return result;
 }

//Task 19: https://www.codewars.com/kata/514a024011ea4fb54200004b
const solution19 = function (url) {
  let domain = url.replace(/^(https?:\/\/)?(www\.)?/, '');
  domain = domain.replace(/\.[^.]+$/, '');
  return domain;
}
solution19("http://google.co.jp");

const solution20 = function (n, string){
    let str = string.replaceAll(' ', '')
    const num = Math.floor(str.length / n);
    const arr = [];
    let counter = 0;
    for (let i = 0; i < str.length; i++) {
        if (i % num == 0 && counter < n) {
            arr.push('\n');
            counter++;
        }
        arr.push(str[i]);
        
    }
    return arr.join('');
}
console.log(solution20(5, "hola como estas mi nombre es matias djsadlkas jdas jwqkltqwlkew"));
