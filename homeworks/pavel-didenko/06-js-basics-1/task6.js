//task 1: http://www.codewars.com/kata/opposite-number

function opposite(number) {
  return number > 0? number - number * 2: Math.abs(number);
}

//task2: http://www.codewars.com/kata/basic-mathematical-operations

function basicOp(operation, value1, value2){
  if (operation == '+') return(value1 + value2);
  if (operation == '-') return(value1 - value2);
  if (operation == '*') return(value1 * value2);
  if (operation == '/') return(value1 / value2);
}

//task3: https://www.codewars.com/kata/printing-array-elements-with-comma-delimiters

function printArray(array){
  return array.join(',');
}

//task4: http://www.codewars.com/kata/transportation-on-vacation

function rentalCarCost(d) {
  if(d >= 7){
    return 40 * d - 50;
  }else if(d >= 3){
    return d * 40 - 20;
  }else{
    return d * 40;
  }
}

//task 5: https://www.codewars.com/kata/calculating-with-functions

function calculator(value1, operator, value2){
  if(operator === '+'){
    return value1 + value2;
  }else if (operator === '-'){
    return value1 - value2;
  }else if(operator === '*'){
    return value1 * value2;
  }else if(operator === '/'){
    return Math.floor(value1 / value2);
  }
}


function zero(args) {
  return args? calculator(0, args[0], args[1]) : 0;
}

function one(args) {
  return args? calculator(1, args[0], args[1]) : 1;
}

function two(args) {
  return args? calculator(2, args[0], args[1]) : 2;
}
function three(args) {
  return args? calculator(3, args[0], args[1]) : 3;
}
function four(args) {
  return args? calculator(4, args[0], args[1]) : 4;
}
function five(args) {
  return args? calculator(5, args[0], args[1]) : 5;
}
function six(args) {
  return args? calculator(6, args[0], args[1]) : 6;
}
function seven(args) {
  return args? calculator(7, args[0], args[1]) : 7;
}
function eight(args) {
  return args? calculator(8, args[0], args[1]) : 8;
}
function nine(args) {
  return args? calculator(9, args[0], args[1]) : 9;
}

function plus(num) {
  return ['+', num];
}

function minus(num) {
  return ['-', num];
}
function times(num) {
  return ['*', num];
}
function dividedBy(num) {
  return ['/', num];
}

//task6: https://www.codewars.com/kata/get-the-middle-character

function getMiddle(s){
  if(s.length % 2 == 0){
    return s[s.length / 2 - 1] + s[s.length / 2];
  } else{
    return s[((s.length + 1) / 2) - 1];
  }
}

//task7 http://www.codewars.com/kata/partition-on

function partitionOn(pred, items) {
  const falses = items.filter((item) => !pred(item));
  const truthes = items.filter((item) => pred(item));
  
  items.splice(0, falses.length, ...falses);
  items.splice(falses.length, truthes.length, ...truthes)

  return falses.length;
}

//task8 http://www.codewars.com/kata/word-count

//not available


//task9 


//task12: https://www.codewars.com/kata/filter-the-numbe

var filterString = function(value) {

  let result = '';

  for(let i in value){
    if(!isNaN(parseInt(value[i]))){
      result += value[i].toString();
    }
  }

  return parseInt(result);
}

//task13: https://www.codewars.com/kata/n-th-fibonacci

function nthFibo(n) {
  let num = 0;
  let count = 0;
  let prev_num = -1;
  let fibo = [0, 1];

  for(let i = 0; i<n; i++){
    if(num < 3){
      num +=1;
      prev_num += 1;
      count += 1;
      fibo.push(num)
    }else if (num >= 3){
      num += prev_num;
      prev_num = num - prev_num;
      count += 1;
      fibo.push(num)
    }
  }
  return fibo[n-1];
}


//task15: https://www.codewars.com/kata/duplicate-encoder

function duplicateEncode(word){
  word = word.toLowerCase();
  result = '';
  function isRepeatable(str, word){
    let count = 0;
    for (let char of word){
      if (char == str){
        count += 1;
        if(count >= 2){
          return false;
        }
      }
    }
    return true; 
  }

  for(char of word){
    if(isRepeatable(char, word) == true){
      result += '(';
    }else {
      result += ')';
    }
  }
  return result;
}