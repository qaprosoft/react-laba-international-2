//task1: https://www.codewars.com/kata/55e7650c8d894146be000095/javascript

function validateMessage(msg) {
  if (msg === null) {
    throw new ReferenceError('Message is null!');
  }
  if (typeof msg !== 'string') {
    throw new TypeError(
      `Message should be of type string but was of type ${typeof msg}!`,
    );
  }

  if (msg.length > 255 || msg.length === 0) {
    throw new RangeError(`Message contains ${msg.length} characters!`);
  }

  if (msg.includes('<') && msg.includes('>')) {
    return false;
  }

  return true;
}

//task2: https://www.codewars.com/kata/5a353a478f27f244a1000076

// async function sayJoke(apiUrl, jokeId) {
//   let responseObj = '';
//   try {
//     let response = await fetch(apiUrl);
//     if (response.ok) {
//       let json = await response.json();
//       let obj = JSON.parse(json);
//     }
//   } catch (err) {
//     return err;
//   }

//   return responseObj[jokeId]
// }

//task 3:

function secondsInterval() {
  let counter = 0;
  let timerID = setInterval(function () {
    console.log(`Elapsed time: ${(counter += 1)} sec`);
    if (counter > 4) {
      clearInterval(timerID);
    }
  }, 1000);
}

//task 5 - In the task5 folder

//task6:

function digitOrNot(str) {
  const checkDigit = /\d/;
  return checkDigit.test(str[0]);
}

//task7

function isTelNumber(str) {
  //pattern: +375 xxx xxx-xx-xx
  const checkNum = /\+375\s\d{2,4}\s\d{3}-\d{2}-\d{2}/;

  return checkNum.test(str);
}

//test cases:

/* console.log(isTelNumber('+375 44 537-98-39'));
console.log(isTelNumber('+375 44 537-98-39'));
console.log(isTelNumber('+375 29 537-98-39'));
console.log(isTelNumber('+375 17 795-36-38')); */
