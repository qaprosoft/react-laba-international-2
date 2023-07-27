// exercise 1 http://www.codewars.com/kata/opposite-number
function opposite(number) {
    return number * -1;
  }
  // exercise 2 http://www.codewars.com/kata/basic-mathematical-operations
  function basicOp(operation, value1, value2) {
    switch (operation) {
      case "+":
        return value1 + value2;
        break;
      case "-":
        return value1 - value2;
        break;
      case "*":
        return value1 * value2;
        break;
      case "/":
        return value1 / value2;
        break;
      default:
        console.log("operation not supported");
    }
    return value1 + operation + value2; // Code
  }
  
  //exercise 3  http://www.codewars.com/kata/printing-array-elements-with-comma-delimiters
  
  function printArray(array) {
    let result = "";
  
    for (let i = 0; i < array.length; i++) {
      if (array.length == i + 1) {
        result = result + array[i];
      } else {
        result = result + array[i] + ",";
      }
    }
    return result;
  }
  
  // exercise 4 http://www.codewars.com/kata/transportation-on-vacation
  
  function rentalCarCost(d) {
    if (d < 3) {
      return d * 40;
    } else if (d < 7) {
      return d * 40 - 20;
    } else {
      return d * 40 - 50;
    }
  }
  
  // exercise 5 http://www.codewars.com/kata/calculating-with-functions
  
  function zero(operation) {
    if (!operation) {
      return 0;
    } else {
      return operation(0);
    }
  }
  
  function one(operation) {
    if (!operation) {
      return 1;
    } else {
      return operation(1);
    }
  }
  
  function two(operation) {
    if (!operation) {
      return 2;
    } else {
      return operation(2);
    }
  }
  
  function three(operation) {
    if (!operation) {
      return 3;
    } else {
      return operation(3);
    }
  }
  
  function four(operation) {
    if (!operation) {
      return 4;
    } else {
      return operation(4);
    }
  }
  
  function five(operation) {
    if (!operation) {
      return 5;
    } else {
      return operation(5);
    }
  }
  
  function six(operation) {
    if (!operation) {
      return 6;
    } else {
      return operation(6);
    }
  }
  
  function seven(operation) {
    if (!operation) {
      return 7;
    } else {
      return operation(7);
    }
  }
  
  function eight(operation) {
    if (!operation) {
      return 8;
    } else {
      return operation(8);
    }
  }
  
  function nine(operation) {

    if (!operation) {
      return 9;
    } else {
      return operation(9);
    }

  }
  
  function plus(secondParam) {

    return function (firstParam) {

      return firstParam + secondParam;

    }

  }
  
  function minus(secondParam) {

    return function (firstParam) {

      return firstParam - secondParam;

    }

  }
  
  function times(secondParam) {

    return function (firstParam) {

      return firstParam * secondParam;

    }

  }
  
  function dividedBy(secondParam) {

    return function (firstParam) {

      return Math.floor(firstParam / secondParam);

    }

  }
  
  
  // exercise 6 http://www.codewars.com/kata/get-the-middle-character
  
  function getMiddle(s) {

    let stringLength = s.length;
    let middle = stringLength/2;
    
    if(stringLength%2 === 0 ){
       
      return s.slice((middle-1), middle+1);
      
    }
    else{
     
      return s.charAt(Math.floor(middle));
      
    }
  }
  
  // exercise 7 http://www.codewars.com/kata/partition-on

  function partitionOn(pred, items) {
  
    let evenNumbers = items.filter(element => pred(element));
    let unevenNumbers = items.filter(element => !pred(element));
    
    items.splice(0);
    items.push(...unevenNumbers);
    items.push(...evenNumbers);
  
    return unevenNumbers.length;
  }

  //exercise 9 https://www.codewars.com/kata/find-the-odd-int/

  function findOdd(A) {
    let result = 0;
   A.forEach( element => {
     
    let filteredArray =  A.filter( filteredElement => filteredElement == element)
    
    console.log(filteredArray.length)
    
    if((filteredArray.length % 2)>0){
      result = element
    }  
   }) 
  return result
  }

  //exercise 10 https://www.codewars.com/kata/find-the-parity-outlier

  function findOutlier(integers){
    let evenArray = integers.filter(element => element%2==0);
    let oddArray = integers.filter(element => element%2!=0);
    
    if(oddArray.length>1){
      return evenArray[0]
    }
    else{
      return oddArray[0]
    }
  }

  //exercise 11 https://www.codewars.com/kata/zipwith

  function zipWith(fn,a0,a1) {
  
    let resultArr = [];
    let maxLength;
    
    a0.length>a1.length? maxLength=a1.length : maxLength=a0.length;
    
    for(let i = 0; i<maxLength; i++){
      resultArr.push(fn(a0[i], a1[i]))
    }
    
    return resultArr;
  }

  //exercise 12 https://www.codewars.com/kata/filter-the-number

  var filterString = function(value) {
  
    let result = "";
    
    for(let i=0; i<value.length; i++){
      
        Number.isInteger(parseInt(value[i]))? result += value[i]  : null 
        
    }
    
    result = parseInt(result);
    
    return result;
  }

  //exercise 13 https://www.codewars.com/kata/n-th-fibonacci

  function nthFibo(n) {
    let arr = [];
      
      for(let i=0; i<n; i++){
        if(arr.length<=1){
          arr.push(i)
        }
        else{
          arr.push(arr[i-1]+arr[i-2])
        }
        
      }
        return arr[n-1]
    
    }

  //exercise 14

  function catMouse(map,moves){
    let catPosition = map.indexOf('C');
    let ratPosition = map.indexOf('m');
    let movesLeft = moves;
    let result;
    
    if (ratPosition == -1 || catPosition == -1){
      return'boring without two animals'
    }
      
     // map is 3 lines of 9
      //0-8; 9-18; 19-28
      
    if(ratPosition>=19){
      
      if(catPosition<=8){ 
        
        catPosition += 18;
        movesLeft -= 2;
        
      }
      else if (catPosition<=18 && catPosition >= 9){
        
        catPosition += 9;
        movesLeft -= 1;
        
      }  
      
      Math.abs(ratPosition - catPosition) <= 5?  result = 'Caught!' : result = 'Escaped!'
      
      
    } 
      else if(ratPosition>=9 && ratPosition<=18){
      
      if(catPosition<=8){ 
        
        catPosition += 9;
        movesLeft -= 1;
        
      }
      else if (catPosition >= 19){
        
        catPosition -= 9;
        movesLeft -= 1;
        
      }  
      
      Math.abs(ratPosition - catPosition) <= 5?  result = 'Caught!' : result = 'Escaped!'
      
    }
      else {
        
        if(catPosition<=18 && catPosition >= 9){ 
        
        catPosition -= 9;
        movesLeft -= 1;
        
      }
      else if (catPosition >= 19){
        
        catPosition -= 18;
        movesLeft -= 2;
        
      }  
      
      Math.abs(ratPosition - catPosition) <= 5?  result = 'Caught!' : result = 'Escaped!'
      
        
      }
      
      
      return result
      
    }