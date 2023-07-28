//task1: https://www.codewars.com/kata/5715eaedb436cf5606000381

function positiveSum(arr) {
  return arr.reduce((sum, current) => {
    if(current > 0){
      sum += current;
    }
    return sum
  }, 0)
}

//task2: https://www.codewars.com/kata/5a3e1319b6486ac96f000049/train/javascript

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

 //task3: https://www.codewars.com/kata/5aba780a6a176b029800041c

 function maxMultiple(divisor, bound){
  for(let i = bound; i >= divisor; i--){
    if(i % divisor === 0){
      return i;
    }
  }
}

//task4: https://www.codewars.com/kata/514a6336889283a3d2000001

function getEvenNumbers(numbersArray){
  return numbersArray.filter((item) => item % 2 === 0);
}

//task5: https://www.codewars.com/kata/5a090c4e697598d0b9000004

function solve(arr){
  const result = [];

  arr.sort((a, b) => {
    if(a > b) return - 1;
    if (a === b) return 0;
    if (a < b) return 1;
  })

  const sorted = arr.map(item => item);

  for(let i = 1; i < arr.length + 1; i++){
    if(i % 2 !== 0){
      result.push(sorted.shift());
    }else{
      result.push(sorted.pop());
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

