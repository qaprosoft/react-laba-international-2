//task1: https://www.codewars.com/kata/5715eaedb436cf5606000381;

function positiveSum(arr) {
  return arr.reduce((sum, current) => {
    if(current > 0){
      sum += current;
    }
    return sum
  }, 0)
}

//task2: https://www.codewars.com/kata/5a3e1319b6486ac96f000049/train/javascript;

function pairs(arr){
  const paired = [];
  let count = 0;

  arr.forEach((item, index, array) => {
    if((index + 1) % 2 === 0){
      if(item === array[index - 1] + 1 || item === array[index-1] - 1){
        count += 1;
      }
    }
  })

  return count;
 };

 //task3: https://www.codewars.com/kata/5aba780a6a176b029800041c;

 function maxMultiple(divisor, bound){
  for(let i = bound; i >= divisor; i--){
    if(i % divisor === 0){
      return i;
    }
  }
}

//task4: https://www.codewars.com/kata/514a6336889283a3d2000001;

function getEvenNumbers(numbersArray){
  return numbersArray.filter((item) => item % 2 === 0);
}

//task5: https://www.codewars.com/kata/5a090c4e697598d0b9000004;

function solve(arr){
  const result = [];

  arr.sort((a, b) => {
    if(a > b) return - 1;
    if (a === b) return 0;
    if (a < b) return 1;
  })

  const length = arr.length;

  for(let i = 1; i < length + 1; i++){
    if(i % 2 !== 0){
      result.push(arr.shift());
    }else{
      result.push(arr.pop());
    }
  }

  return result;
};

//task6: https://www.codewars.com/kata/566044325f8fddc1c000002c;

function evenChars(string) {
  if(string.length < 2 || string.length > 100){
    return "invalid string";
  }

  return string.split('').filter((item, index) => {
    if((index + 1)% 2 === 0){
      return item;
    }
  });
}

//task7 https://www.codewars.com/kata/545a4c5a61aa4c6916000755;

function gimme (triplet) {
  const maxNumber = Math.max(...triplet);
  const minNumber = Math.min(...triplet);
  for(let i = 0; i < triplet.length; i++){
    if(triplet[i] !== maxNumber && triplet[i] !== minNumber){
      return i;
    }
  }
}

//task 8: https://www.codewars.com/kata/578553c3a1b8d5c40300037c

const binaryArrayToNumber = arr => {
  return parseInt(arr.join(''), 2);
};

//task9: https://www.codewars.com/kata/585d7d5adb20cf33cb000235;

function findUniq(arr) {
  arr.sort((a, b) => {
    if(a < b) return -1;
    if (a === b) return 0;
    if(a > b) return 1;
  })

  if(arr[0] === arr[1]){
    return arr[arr.length - 1];
  }else{
    return arr[0];
  }

}

//task10 https://www.codewars.com/kata/581e014b55f2c52bb00000f8;

function decipherThis(str) {
  const strSplited = str.split(' ');
  const charConverted =  strSplited.map((item) => {
    if(item.length === 1) return item; 
    if(parseInt(item).toString().length === 2){
      return item.replace(item.slice(0, 2), String.fromCharCode(item.slice(0, 2)));
    }else{
      return item.replace(item.slice(0, 3), String.fromCharCode(item.slice(0, 3)));
    }
  })

  return charConverted.map((item) => {
    if(item.length === 1) return item;   
    let lastLetter = item[item.length - 1];
    if(lastLetter === 'o' && item[-1] === 'o'){
      lastLetter = 'oo';
    }

    let secondLetter = item[1];

    if(secondLetter === 'o' && item[2] === 'o'){
      secondLetter = 'oo';
    }

    if(lastLetter !== secondLetter){
      let replaced = item[0] + item.slice(1).replace(secondLetter, lastLetter).slice(0, -1);  
      return replaced + secondLetter;
    }else{
      return item;
    }
  }).join(' ')
};


//task11: https://www.codewars.com/kata/578aa45ee9fd15ff4600090d;

function sortArray(array) {
  const odds = array.filter((item) => item%2 !== 0);
  odds.sort((a, b) => {
    if(a > b) return 1;
    if (a === b) return 0;
    if(a < b) return -1;
  })

  return array.map((item) => {
    if(item % 2 === 0){
      return item;
    }else{
      return odds.shift();
    }
  })
}

console.log(sortArray([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]));