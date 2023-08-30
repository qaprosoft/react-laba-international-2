"strict mode"

// Task 1: http://www.codewars.com/kata/opposite-number

function solution1(num){
    if(typeof num == "number" && num > 0 ){
        return -Math.abs(num)
    }else{
        return Math.abs(num)
    };
};

// Task 2: http://www.codewars.com/kata/basic-mathematical-operations

function solution2(operator, value1, value2){
        return  operator === "-" ? value1 - value2 :
                operator === "+" ? (value1 + value2) :
                operator === "/" ? value1 / value2 :
                operator === "*" ? value1 * value2 : operator;        
}

// Task 3: http://www.codewars.com/kata/printing-array-elements-with-comma-delimiters
 const characters = ["h","o","l","a"];
function solution3(ele){
   return ele.join(","); 
}

 // Task 4: http://www.codewars.com/kata/transportation-on-vacation
 const perDayCost = 40;
 let total = 0;

 function solution4(days){
    total = days * perDayCost;

    if(days >= 7){
        total -= 50;
       }else if(days>=3 && days< 7){
        total -= 20;
       }
   return total;
   
 }

 // Task 5: http://www.codewars.com/kata/calculating-with-functions

 function zero(operation = null) {
    return operation ? operation(0) : 0;
  }
  function one(operation = null) {
    return operation ? operation(1) : 1;
  }
  function two(operation = null) {
    return operation ? operation(2) : 2;
  }
  function three(operation = null) {
    return operation ? operation(3) : 3;
  }
  function four(operation = null) {
    return operation ? operation(4) : 4;
  }
  function five(operation = null) {
    return operation ? operation(5) : 5;
  }
  function six(operation = null) {
    return operation ? operation(6) : 6;
  }
  function seven(operation = null) {
    return operation ? operation(7) : 7;
  }
  function eight(operation = null) {
    return operation ? operation(8) : 8;
  }
  function nine(operation = null) {
    return operation ? operation(9) : 9;
  }
  
  function plus(num) {
    return function (otherNum) {
      return otherNum + num;
    };
  }
  function minus(num) {
    return function (otherNum) {
      return otherNum - num;
    };
  }
  function times(num) {
    return function (otherNum) {
      return otherNum * num;
    };
  }
  function dividedBy(num) {
    return function (otherNum) {
      return Math.floor(otherNum / num); // Integer division
    };
  }

 /* console.log(one(plus(nine()))); */

 // Task 6: http://www.codewars.com/kata/get-the-middle-character

 function solution6(s){
    let middle = Math.floor(s.length/2);

    return s.length % 2 === 0
        ? s.slice(middle -1 ,middle +1)
        : s.slice(middle, middle +1);
 }

 // Task 7: http://www.codewars.com/kata/partition-on

 function solution7(predicate, items) {
    let indexTracker = 0;
  
    for (let i = 0; i < items.length; i++) {
      if (!predicate(items[i])) {
        [items[i], items[indexTracker]] = [items[indexTracker], items[i]];
        indexTracker++;
      }
    }
  
    return indexTracker;
  }
  
  let items = [2,22,45,100,5,7,9,1,11,33,35];
  let isEven = n => n % 2 === 0;
  let i = solution7(isEven, items);

 //Task 8: http://www.codewars.com/kata/word-count error 404
  
// Task 9: https://www.codewars.com/kata/find-the-odd-int/
const numbers = [1,1,2,2,5,5,5];
function findOdd(arr){
   let result = 0;

    arr.forEach(element => {
        result ^= element
    });
    return result
}

// Task 10: https://www.codewars.com/kata/find-the-parity-outlier

function solution10(arr) {
  let parityCount = [0, 0];
  
  for (let i = 0; i < 3; i++) {
      if (arr[i] % 2 === 0) {
          parityCount[0]++;
      } else {
          parityCount[1]++;
      }
  }
  
  const majorityParity = parityCount[0] >= 2 ? 0 : 1;
  
  for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 !== majorityParity) {
          return arr[i];
      }
  }
}
/* let test = [160, 3, 1719, 19, 11, 13, -21];
console.log(solution10(test)); */

//Task 11: https://www.codewars.com/kata/zipwith

function solution11(func, arr1, arr2) {
  const minLength = Math.min(arr1.length, arr2.length);
  const result = [];

  for (let i = 0; i < minLength; i++) {
    result.push(func(arr1[i], arr2[i]));
  }

  return result;
}
//console.log(solution11( Math.max, [1,4,7,1,4,7], [4,7,1,4,7,1] )  ); 

// Task 12 https://www.codewars.com/kata/filter-the-number
function solution12(str){
    let result = str.match(/[0-9]/g);
    return result ? result.map(Number) : [];
}

// Task 13 https://www.codewars.com/kata/n-th-fibonacci

function solution13(n){
    let a = 0, b = 1, c = n;
    for(let i = 2; i <= n; i++) {
      c = a + b;
      a = b;
      b = c;
    }
    
    return c;
}

// Task 14: https://www.codewars.com/kata/cat-and-mouse-2d-version/
// Task 15: https://www.codewars.com/kata/duplicate-encoder
function solution15(word) {
  word = word.toLowerCase(); // Convert the word to lowercase to ignore capitalization
  let result = "";

  for (let i = 0; i < word.length; i++) {
    if (word.split(word[i]).length - 1 > 1) {
      result += ")";
    } else {
      result += "(";
    }
  }

  return result;
}
//console.log(solution15("din"));

//Task 16: https://www.codewars.com/kata/5693239fb761dc8670000001

// Task 17
function solution17(floor){
  const arr = [];
  let asterisk = '*';
  for(let i = 0; i< floor;i++){
    let str = "";
    let counter = 0;
    let maxSize = floor + (floor - 1);
    while(counter < maxSize ){
      if(counter >= Math.floor(maxSize / 2 - i ) && counter <=  Math.floor(maxSize / 2 + i )){
      str+= asterisk;
      }else{
        str+= " ";
      }
      counter++;
    } 
    arr.push(str)
  }
  return arr; 
  }
solution17(6);


//Task 18: https://www.codewars.com/kata/58f5c63f1e26ecda7e000029
function solution18(str) {
  const result = [];
  const lowerStr= str.toLowerCase();

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  for (let i = 0; i < lowerStr.length; i++) {
    if (lowerStr[i] !== ' ') {
      const capitalized = capitalizeFirstLetter(lowerStr[i]);
      const finalString = lowerStr.slice(0, i) + capitalized + lowerStr.slice(i + 1);
      result.push(finalString);
    }
  }

  return result;
}

// Task 19: https://www.codewars.com/kata/59d398bb86a6fdf100000031

function solution19 (num, str){
  const noSpaceStr = str.replace(/\s+/g, ''); // Remove all spaces
  const substrings = [];
  let start = 0;
  while (start < noSpaceStr.length) {
      substrings.push(noSpaceStr.slice(start, start + num));
      start += num;
  }
  return substrings.join('\n');
}

const string = "This is an example string";
//console.log(solution19(5,string));

// Task 20: https://www.codewars.com/kata/514a024011ea4fb54200004b

function solution20(url){
   const parsedUrl = new URL(url);
    let domainName = parsedUrl.hostname;

    if (domainName.startsWith("www.")) {
        domainName = domainName.slice(4);
    }

    domainName = domainName.split(".")[0];
    return domainName;
}

//console.log(solution20("http://www.zombie-bites.com"  ));