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
  