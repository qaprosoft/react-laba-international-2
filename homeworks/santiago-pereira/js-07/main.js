"strict mode";
// task 1: https://www.codewars.com/kata/5715eaedb436cf5606000381
function solution1(arr) {
    let total = 0;
    for (let num of arr) {
        if (num > 0) {
            total += num;
        }
    }
    return total;
}

// task 2: https://www.codewars.com/kata/5a3e1319b6486ac96f000049
function solution2(arr){
  let result = 0;
  arr.forEach((value, i) => {
    if (
      i < arr.length - 1 &&
      (value - 1 === arr[i + 1] || value + 1 === arr[i + 1])
    ) {
      result++;
    }
  });

  return result;
};

// task 3: https://www.codewars.com/kata/5aba780a6a176b029800041c
function solution3(divisor, bound) {
    for (let i = bound; i >= 1; i--) {
        if (i % divisor === 0) {
            return i;
        }
    }
}

// task 4: https://www.codewars.com/kata/514a6336889283a3d2000001

function solution4(arr) {
    return arr.filter(function(number) {
      return number % 2 === 0; 
    });
  }

  //task 5: https://www.codewars.com/kata/5a090c4e697598d0b9000004

  function solution5(arr) {
    arr.sort((a, b) => a - b); // Sort the array in ascending order
    const result = [];
    const n = arr.length;
    for (let i = 0; i < Math.floor(n / 2); i++) {
        result.push(arr[n - 1 - i]);
        result.push(arr[i]); 
    }
    if (n % 2 !== 0) {
        result.push(arr[Math.floor(n / 2)]);
    }
    return result;
}

//task 6: https://www.codewars.com/kata/566044325f8fddc1c000002c

function solution6(str) {
    if (str.length < 2 || str.length > 100) {
      return "invalid string";
    }
  
    const evenChars = [];
    for (let i = 1; i < str.length; i += 2) {
      evenChars.push(str[i]);
    }
  
    return evenChars;
  }

  //task 7: https://www.codewars.com/kata/545a4c5a61aa4c6916000755

  function solution7(arr) {
    let middleValue = Math.max(Math.min(arr[0], arr[1]), Math.min(Math.max(arr[0], arr[1]), arr[2]));
    let middleIndex = arr.indexOf(middleValue);
  
    return middleIndex;
  }

  //solution 8: https://www.codewars.com/kata/578553c3a1b8d5c40300037c

  function solution8(arr) {
    return parseInt(arr.join(''), 2);
  }

  //solution 9: https://www.codewars.com/kata/585d7d5adb20cf33cb000235

  function solution9(arr) {
    const arr1 = [];
    const arr2 = [];
    arr.forEach(ele => {
      if (arr1.length == 0 || arr1[0] == ele) {
        arr1.push(ele);
      } else {
        arr2.push(ele);
        return ele;
      }
    });
    console.log(arr1[0]);
    if (arr1.length > arr2.length) return arr2[0];
    else return arr1[0];
  }

  //solution 10: https://www.codewars.com/kata/581e014b55f2c52bb00000f8

  //Task 11: https://www.codewars.com/kata/578aa45ee9fd15ff4600090d
function solution11(arr){
    const newArr = [];
    let j = 0;
    const isEven = num => {
      return num % 2 == 0;
    };
    arr.forEach(element => {
      if (!isEven(element)) {
        newArr.push(element);
      }
    });
    newArr.sort((a, b) => a - b);
    for (let i = 0; i < arr.length; i++) {
      if (!isEven(arr[i])) {
        arr[i] = newArr[j];
        j++;
      }
    }
    return arr;
  };