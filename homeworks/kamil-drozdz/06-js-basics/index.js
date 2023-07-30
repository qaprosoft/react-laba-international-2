1. 

function opposite(number) {
    return -number
    }

2.

function basicOp(operation, value1, value2)
{
  if (operation === '+') {
    return value1 + value2;
  } else if (operation === '-') {
    return value1 - value2;
  } else if (operation === '*') {
    return value1 * value2;
  } else if (operation === '/') {
    if (value2 !== 0) {
      return value1 / value2;
    } else {
      return "Error: Division by zero";
    }
  } else {
    return "Error: Invalid operation";
  }
}

3.

function printArray(array){
    return array.join(',')
  }

4. 

  function rentalCarCost(d) {
    if (d >= 7) {
      const sum = d * 40;
      return sum - 50;
    } else if (d >= 3) {
      const sum = d * 40;
      return sum - 20;
    } else {
      return d * 40;
    }
  }
  
  5. 

  function zero(func)   { return func ? func(0) : 0; }
  function one(func)    { return func ? func(1) : 1; }
  function two(func)    { return func ? func(2) : 2; }
  function three(func)  { return func ? func(3) : 3; }
  function four(func)   { return func ? func(4) : 4; }
  function five(func)   { return func ? func(5) : 5; }
  function six(func)    { return func ? func(6) : 6; }
  function seven(func)  { return func ? func(7) : 7; }
  function eight(func)  { return func ? func(8) : 8; }
  function nine(func)   { return func ? func(9) : 9; }
  
  function plus(b)      { return function(a) { return a + b; }; }
  function minus(b)     { return function(a) { return a - b; }; }
  function times(b)     { return function(a) { return a * b; }; }
  function dividedBy(b) { return function(a) { return Math.floor(a / b); }; }
  
  6.

  function getMiddle(s){
    let position;
    let length;
  
          if(s.length % 2 == 1) {
              position = s.length / 2;
              length = 1;
          } else {
              position = s.length / 2 - 1;
              length = 2;
          }
  
          return s.substring(position, position + length)
      }

7. 
      
function partitionOn(pred, items) {
    const falses = items.filter((item) => !pred(item));
    const truthes = items.filter((item) => pred(item));
  
    items.splice(0, falses.length, ...falses);
    items.splice(falses.length, truthes.length, ...truthes)
  
    return falses.length;
  }
  
  8.    //not available
  
9.
function findOdd(A) {
    const obj = {};
    
    for(let i = 0; i < A.length; i++) {
      if(obj[A[i]]) {
        obj[A[i]]++;
      } else {
        obj[A[i]] = 1;
      }
    }
    
    for(let prop in obj) {
      if(obj[prop] % 2 !== 0) {
        return Number(prop);
      }
    }
  }

10.
function findOutlier(integers) {
    const isEven = (integers[0] % 2 === 0 && integers[1] % 2 === 0) || 
                   (integers[0] % 2 === 0 && integers[2] % 2 === 0) || 
                   (integers[1] % 2 === 0 && integers[2] % 2 === 0);
    
    return integers.find(int => isEven ? int % 2 !== 0 : int % 2 === 0);
  }
  
11.
  function zipWith(fn, a1, a2) {
    const minLength = Math.min(a1.length, a2.length);
    let result = [];
    for(let i = 0; i < minLength; i++) {
      result.push(fn(a1[i], a2[i]));
    }
    return result;
  }

12.
  function filterString(value) {
    const numb = value.match(/\d/g);
    numb = numb.join("");
  
    return +numb;
   }
13.
 const nthFibo = n => n <= 2 ? n - 1 : nthFibo(n - 1) + nthFibo(n - 2);

14.
 function catMouse(map, moves){
    let mapArr = map.split('\n');
    let cat = null, mouse = null;
  
    for(let i = 0; i < mapArr.length; i++){
      for(let j = 0; j < mapArr[i].length; j++){
        if(mapArr[i][j] === 'C'){
          cat = [i,j];
        }
        if(mapArr[i][j] === 'm'){
          mouse = [i,j];
        }
      }
    }
  
    if(cat === null || mouse === null){
      return 'boring without two animals';
    }
  
    let totalMoves = Math.abs(cat[0] - mouse[0]) + Math.abs(cat[1] - mouse[1]);
    return totalMoves <= moves ? 'Caught!' : 'Escaped!';
  }

15.
  function duplicateEncode(word){
    const letterCount = {};
    const letters = word.toLowerCase().split('');
    
      letters.forEach(function(letter) {
        letterCount[letter] = (letterCount[letter] || 0) + 1;
      });
    
      return letters.map(function(letter) {
        return letterCount[letter] === 1 ? '(' : ')';
      }).join('');
    }
16.
    const findAdditiveNumbers = (num) => {
        const result = [];
    
        const backtrack = (start, sequence) => {
            if (start === num.length) {
                if (sequence.length >= 3) {
                    result.push(...sequence);
                }
                return;
            }
    
            for (let i = start + 1; i <= num.length; i++) {
                const current = num.slice(start, i);
                if (current.length > 1 && current[0] === '0') break;
    
                if (sequence.length < 2 || Number(sequence[sequence.length - 1]) + Number(sequence[sequence.length - 2]) === Number(current)) {
                    backtrack(i, [...sequence, current]);
                }
            }
        };
    
        for (let i = 0; i < num.length - 1; i++) {
            const first = num.slice(0, i + 1);
            if (first.length > 1 && first[0] === '0') break;
            for (let j = i + 1; j < num.length; j++) {
                const second = num.slice(i + 1, j + 1);
                if (second.length > 1 && second[0] === '0') break;
                backtrack(j + 1, [first, second]);
            }
        }
    
        return result;
    };
    

17.

    function towerBuilder(nFloors) {
        let space = "";
        let star = "";
        const result = [];
        for (let i = 1; i <= nFloors; i++) {
          space = (" ").repeat(nFloors - i);
          star = ("*").repeat((2 * i) - 1);
          result.push(space + star + space);
        }
        return result;
      }
18.
function wave(str) {
    let result = [];

    for (let i = 0; i < str.length; i++) {
        if (str[i] !== ' ') {
            let waved = str.slice(0, i) + str[i].toUpperCase() + str.slice(i + 1);
            result.push(waved);
        }
    }

    return result;
}


19.

function stringBreakers(n, str) {
    let noSpaces = str.replace(/ /g, '');
    let result = '';
    
    for (let i = 0; i < noSpaces.length; i += n) {
        result += noSpaces.substring(i, i + n) + '\n';
    }
    
    return result.trim();
}

20.
function domainName(url){
    return url.replace('http://', '')
              .replace('https://', '')
              .replace('www.', '')
              .split('.')[0];
}
