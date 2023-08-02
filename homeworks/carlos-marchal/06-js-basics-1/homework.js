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

  //exercise 14 https://www.codewars.com/kata/cat-and-mouse-2d-version/


  function catMouse(map,moves){

   
    let catPosition;
    let mousePosition;
    let separatedLines = map.split(/\r?\n/);
      
    if(map.indexOf('C') == -1 || map.indexOf('m') == -1){
      
      return "boring without two animals"
      
    } 
      
    separatedLines.forEach((mapLine, i) => {mapLine.includes('C')? catPosition = [mapLine.indexOf('C'), i] : null })
    
    separatedLines.forEach((mapLine, i)=> { mapLine.includes('m')? mousePosition = [mapLine.indexOf('m'), i] : null })  
      
      
      
      
    let catPositionX = catPosition[0];
    let catPositionY = catPosition[1];
    let mousePositionX = mousePosition[0];
    let mousePositionY = mousePosition[1];
      console.log(mousePositionX)
      
    if(Math.abs(catPositionX - mousePositionX) + Math.abs(catPositionY - mousePositionY)>moves){
      return 'Escaped!'
    } else{
      return 'Caught!'
    }
    }

    // exercise 15 https://www.codewars.com/kata/duplicate-encoder



    function duplicateEncode(word){
  
      let chars = word.split('');
      let resultString = "";
      
      
      chars.forEach(char=>{
        chars.filter(c => c.toLowerCase() === char.toLowerCase()).length>1? resultString += ')' : resultString += '('
      })
      
      return resultString;
      
      
        
    }

    //exercise 16 https://www.codewars.com/kata/5693239fb761dc8670000001 

    function findAdditiveNumbers(num) {
  
      for (let i=1;i<=num.length/2+1;i++){
        
        let n1=+num.substr(0,i);
        let n2=0;
       
        
        for (let j=1;((n1+n2)+"").length<num.length-i-j+1;j++){
          
          n2=+num.substr(i,j);
          
          if(stringer([n1,n2])){
            
            return stringer([n1,n2]).map(n=>n+"");
            
          } 
        }
      }
    
      return [];
    
    
      function stringer(arr){
        while(arr.join("").length < num.length){
          arr.push(arr[arr.length-1]+arr[arr.length-2]);
        }
        return arr.join("") == num? arr : false;
      }
      
    
   }
    
    //exercise 17 https://www.codewars.com/kata/576757b1df89ecf5bd00073b



    function towerBuilder(nFloors) {
      let resultArray = [];
      let stringLength = nFloors + (nFloors-1);
      let forString = "";
      let asteriskQuantity;
      let blankLength;
      
      
       
     
      
      for(let i = 0; i<nFloors; i++){
    
      
        asteriskQuantity = i+i+1;
        blankLength = (stringLength-asteriskQuantity)/2;
       
        if(blankLength == 0){
          forString = forString.padStart(stringLength, "*");
          resultArray.push(forString);
          forString = "";
        } 
        else {

          forString = forString.padStart(blankLength, " ");
          forString = forString.padEnd(blankLength+asteriskQuantity, "*");
          forString = forString.padEnd(stringLength, " ");
          resultArray.push(forString);
          forString = "";
                    
            }
      }
      
      return resultArray;
    }


// exercise 18  https://www.codewars.com/kata/58f5c63f1e26ecda7e000029


function wave(str){
 
  
  let length = str.length;
  let resultArr = [];
  let iterationString = str;
  let forString = "";
  
  
  
  
  for(let i=0; i<=length; i++){
   
    if(iterationString.charAt(i-1) === " "){
      
      resultArr.push(null)
      forString = "";
      
    }
    else if(!i==0){
      resultArr.push(forString);
      forString = "";
    }
    
    
    for(let j=0; j<length; j++){
      
      if(i==j){
        
        
       forString += iterationString.charAt(j).toUpperCase()
        
      }
     else{
       
         forString += iterationString.charAt(j)
      }
    }
    
    
  }
  
  let result = resultArr.filter(element => element != null)
  
  
  return result
  
  
  }

  // exercise 19 https://www.codewars.com/kata/59d398bb86a6fdf100000031


  function stringBreakers(n, string){
  
let lineLength = string.length/n;
let characterArray = string.split(' ').join('').split('');
let resultArray = "";
let counter = 0;
let length = characterArray.length;


  
characterArray.map((char, i) => {
  
  resultArray += char
  counter++
 
  
  if(counter == n){
  
    characterArray[i+1]? resultArray += '\n' : null
    
    counter = 0;
  }
})

return resultArray
 
  

}

// exercise 20 https://www.codewars.com/kata/514a024011ea4fb54200004b/train/javascript

function domainName(url){
  let regex = /^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n?]+)/;
  let domain = url.match(regex)[1];
  return domain.split('.')[0]; 
}