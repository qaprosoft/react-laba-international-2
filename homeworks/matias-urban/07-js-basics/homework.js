//Task 1: https://www.codewars.com/kata/5715eaedb436cf5606000381
const solution01 = function (arr) {
    let result = 0;
    for (a of arr) {
        if (a > 0) {
            result += a;
        }
    }
    return result;
}

//Task 2: https://www.codewars.com/kata/5a3e1319b6486ac96f000049
const solution02 = function (ar) {
    let result = 0;
    for (let i = 0; i < ar.length; i++) {
        if (ar[i] -1 == ar[i+1] || ar[i] +1 == ar[i+1]) {
            result++;
        }
        i++;
    }
    return result;
}

//Task 3: https://www.codewars.com/kata/5aba780a6a176b029800041c
const solution03 = function (divisor, bound) {
    let result = 0;
    while (result == 0) {
        if (bound % divisor == 0) {
            result = bound;
        }
        else bound--;
    }
    return result;
}

//Task 4: https://www.codewars.com/kata/514a6336889283a3d2000001
const solution04 = function (numbersArray) {
    const isEven = (num) => {
        return num % 2 == 0;
    }
    const result = numbersArray.filter(num => isEven(num));
    return result;
}

//Task 5: https://www.codewars.com/kata/5a090c4e697598d0b9000004
const solution05 = function (arr) {
    arr.sort((a, b) => a - b);
    const result = [];
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
      if (left !== right) {
        result.push(arr[right]);
        result.push(arr[left]);
      } else {
        result.push(arr[left]);
      }
      left++;
      right--;
    }
    return result;
}

//Task 6: https://www.codewars.com/kata/566044325f8fddc1c000002c
const solution06 =  function (string) {
    const result = [];
    let counter = 1;
    const isEven = (c) => {return c % 2 == 0};
    if (string.length > 2 && string.length < 100) {
        for (s of [...string]) {
            if (isEven(counter)) {
                result.push(s)  
            }
            counter++;
        }
        return result;
    }
    else {
        return "invalid string";    
    }
}

//Task 7: https://www.codewars.com/kata/545a4c5a61aa4c6916000755 
const solution07 = (triplet) => {
    const newArr = [...triplet];
    const aux = newArr.sort((a,b) => a-b);
    return triplet.indexOf(aux[1]);
}

//Task 8: https://www.codewars.com/kata/578553c3a1b8d5c40300037c
const solution08 = arr => {
    result = 0;
    arr.forEach((element, index) => {
        if (index == arr.length){
            result+= element;
        }
        else{
            if (element == 1) result+= Math.pow(2, arr.length - index - 1);
        }
    })
    return result;
}

//Task 9: https://www.codewars.com/kata/585d7d5adb20cf33cb000235
const solution09 = arr => {
    const arr1 = [];
    const arr2 = [];
    arr.forEach((element) => {
        if (arr1.length == 0 || arr1[0] == element) {
            arr1.push(element);
        } else {
            arr2.push(element);
            return element;
        }
    });
    console.log(arr1[0]);  
    if (arr1.length > arr2.length) return arr2[0]; 
    else return arr1[0];
}

// Task 10 = https://www.codewars.com/kata/581e014b55f2c52bb00000f8

const solution10 = (str) => {
   const words = str.split(' ');
   const replaceFirstWithCharCode = (word) => {
     const charCode = parseInt(word, 10);
     return String.fromCharCode(charCode);
   };
 
   const decipheredWords = words.map((word) => {
     const charCodeWord = word.match(/^\d+/);
     if (charCodeWord) {
       const charCodeDeciphered = replaceFirstWithCharCode(charCodeWord[0]);
       let restOfWord = word.slice(charCodeWord[0].length);
       if (restOfWord.length > 1) {
         restOfWord = restOfWord[restOfWord.length - 1] + restOfWord.slice(1, -1) + restOfWord[0];
       }
 
       return charCodeDeciphered + restOfWord;
     }
     return word;
   });
   return decipheredWords.join(' ');
}

const solution11 = (array) => {
    const newArr = [];
    let j = 0;
    const isEven = num => {
        return num % 2 == 0;
    };
    array.forEach(element => {
        if (!isEven(element)){
            newArr.push(element);
        }
    })
    newArr.sort((a, b) => a - b);
    for (let i = 0; i< array.length; i++) {
        if (!isEven(array[i])) {
            array[i] = newArr[j];
            j++
        }
    }
    return array;
}

//Task 1 (Advanced): 




