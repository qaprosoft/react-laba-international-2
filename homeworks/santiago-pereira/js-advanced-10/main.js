'use strict';

// task 1: https://www.codewars.com/kata/55e7650c8d894146be000095/javascript
function solution1(msg) {
  if (typeof msg !== 'string') {
    throw new TypeError(
      `Message should be of type string but was of type ${typeof msg}!`,
    );
  }

  if (msg.length > 255 || msg.length === 0) {
    throw new RangeError(`Message contains ${msg.length} characters!`);
  }

  if (msg === null) {
    throw new ReferenceError('Message is null!');
  }

  if (/<[^>]+>/i.test(msg)) {
    return false;
  }
  return true;
}

// task 2 https://www.codewars.com/kata/5a353a478f27f244a1000076
async function sayJoke(apiUrl, jokeId) {
  const response = await fetch(apiUrl);
  const jsonResponse = await response.json();

  if (!jsonResponse.hasOwnProperty('jokes')) {
    throw new Error(`No jokes at url: ${apiUrl}`);
  }

  const joke = jsonResponse.jokes.find(function (joke) {
    return joke.id === jokeId;
  });

  if (!joke) {
    throw new Error(`No jokes found id: ${jokeId}`);
  }

  return {
    saySetup: () => joke.setup,
    sayPunchLine: () => joke.punchLine,
  };
}

//task 3

let i = 0;

function timer() {
  let myInter = setInterval(() => {
    console.log(`Elasped time: ${i++} sec`);
  }, 1000);
  setTimeout(() => {
    if (i === 6) {
      clearInterval(myInter);
    }
  }, 6000);
  return i;
}
console.log(timer());

//Task 6
const isDigit = str => {
  const dig = /\d/g;
  return dig.test(str[0]);
};
