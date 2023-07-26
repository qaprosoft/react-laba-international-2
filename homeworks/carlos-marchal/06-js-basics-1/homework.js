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

  //exercise 8 https://www.codewars.com/kata/find-the-odd-int/

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

  