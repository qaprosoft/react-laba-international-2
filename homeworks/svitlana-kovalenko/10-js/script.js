'use strict';
// https://www.codewars.com/kata/55e7650c8d894146be000095
function validateMessage(msg) {
  if (msg === null) {
    throw new ReferenceError('Message is null!');
  } else if (typeof msg !== 'string') {
    throw new TypeError(
      `Message should be of type string but was of type ${typeof msg}!`,
    );
  } else if (msg.length > 255 || msg.length === 0) {
    throw new RangeError(`Message contains ${msg.length} characters!`);
  } else if (msg.includes('<') && msg.includes('>')) {
    return false;
  } else {
    return true;
  }
}

// https://www.codewars.com/kata/5a353a478f27f244a1000076     I did use another API cause there it was broken(
async function sayJoke(apiUrl, jokeId) {
  try {
    const response = await fetch(apiUrl);
    const res = await response.json();
    const data = res.data;
    let result = [];

    data.forEach(el => {
      if (jokeId === el.length) {
        result.push(el);
      }
    });
    return result;
  } catch (error) {
    throw new Error(`No jokes found id: ${jokeId}`);
  }
}
sayJoke('https://catfact.ninja/facts', 38);
// setTimeout/setInterval
let i = 1;
 let timer = setInterval(function () {
   console.log(`Elapsed time: ${i++} sec`);
   if (i > 6) {
     clearInterval(timer);
     console.clear();
   }
 }, 1000);

// Fetch API/XMLHttpRequest
async function getUser(api) {
  let response = await fetch(api);
  let res = await response.json();
  let data = res.results;

  const root = document.querySelector('.root');
  const list = document.createElement('ul');

  [...data].forEach(el => {
    const {name, picture} = el;
    const li = document.createElement('li');
    const img = document.createElement('img');
    const p = document.createElement('p');
    img.src = picture.medium;
    p.innerHTML = name.first + name.last;
    li.appendChild(img);
    li.appendChild(p);
    list.appendChild(li);
  });
  root.appendChild(list);
}
getUser('https://randomuser.me/api/?gender=female&results=10');

//Digit or not
// Write a function that receives a variable containing a string,
//  as a parameter and checks whether the contents of this variable begin with a digit or not, using a regular expression.
function isDigit(str) {
  parseFloat(str);
  let regexp = /\d/;
  const num = str.match(regexp);

  return str[0] == num ? true : false;
}
console.log(isDigit('1asfvsv'));

// Optional (advanced)
// Check if this entry is a phone number, e.g. set the format of your country:
// Ukraine: +38 099-4811-673
function isPhone(str) {
  return str.match(/\d/g).join('') && str.includes('+')
    ? "Yes, it's phone"
    : 'It is not a phone number';
}
console.log(isPhone('+38 099-4811-673'));
