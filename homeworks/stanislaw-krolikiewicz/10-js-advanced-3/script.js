// task 1 https://www.codewars.com/kata/55e7650c8d894146be000095/javascript
const validateMessage = msg => {
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
  } else return true;
};

// task 2 https://www.codewars.com/kata/5a353a478f27f244a1000076
const sayJoke = async (apiUrl, jokeId) => {
  const joke = {
    _data: await fetch(apiUrl)
      .then(res => res.json())
      .then(res => {
        if (res.jokes) return res.jokes;
        else throw new Error(`No jokes at url: ${apiUrl}`);
      })
      .then(res => {
        let jokeFound = res.find(el => el.id === jokeId);
        if (jokeFound) return jokeFound;
        else throw new Error(`No jokes found id: ${jokeId}`);
      }),
    saySetup: function () {
      return this._data.setup;
    },
    sayPunchLine: function () {
      return this._data.punchLine;
    },
  };
  return joke;
};

// task 3 https://github.com/qaprosoft/react-laba-international-2/blob/main/lectures/10-js-advanced-3/task.md#3-settimeoutsetinterval
// Part 1
let elapsedTime = 0;
myInterval = setInterval(() => {
  elapsedTime++;
  console.log(`Elapsed time: ${elapsedTime} sec.`);
}, 1000);

// Part 2
setTimeout(() => {
  clearInterval(myInterval);
}, 5000);

// task 6 https://github.com/qaprosoft/react-laba-international-2/blob/main/lectures/10-js-advanced-3/task.md#6-digit-or-not
const beginWithDigit = string => /^\d/.test(string);

// task 7 https://github.com/qaprosoft/react-laba-international-2/blob/main/lectures/10-js-advanced-3/task.md#7-optional-advanced
const isPhoneNumber = string => {
  let code = string.split(' ').join('').substring(0, 3);
  let number = string.split(/\-|\s/).join('').substring(3);
  console.log(number);
  return /^\+48/.test(code) && !/\D/.test(number) && number.length === 9;
};
