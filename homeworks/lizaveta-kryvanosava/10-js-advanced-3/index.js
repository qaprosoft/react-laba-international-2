// task 1 https://www.codewars.com/kata/55e7650c8d894146be000095/javascript
const validateMessage = msg => {
  if (msg === null) throw new ReferenceError('Message is null!');
  if (typeof msg !== 'string') {
    throw new TypeError(
      `Message should be of type string but was of type ${typeof msg}!`,
    );
  }
  if (msg.length > 255 || msg.length === 0) {
    throw new RangeError(`Message contains ${msg.length} characters!`);
  }

  return !/<.*>/.test(msg);
};

//task 2 https://www.codewars.com/kata/5a353a478f27f244a1000076
const sayJoke = async (apiUrl, jokeId) => {
  const response = await fetch(apiUrl);
  const jsondata = await response.json();

  if (!jsondata.hasOwnProperty('jokes')) {
    throw new Error(`No jokes at url: ${apiUrl}`);
  }

  const joke = jsondata.jokes.find(({id}) => id === jokeId);

  if (!joke) {
    throw new Error(`No jokes found id: ${jokeId}`);
  }

  return {
    saySetup: () => joke.setup,
    sayPunchLine: () => joke.punchLine,
  };
};

//task 3 https://github.com/qaprosoft/react-laba-international-2/blob/main/lectures/10-js-advanced-3/task.md#3-settimeoutsetinterval
const displaySeconds = () => {
  let count = 0;

  const id = setInterval(() => {
    console.log(`Elapsed time: ${++count} sec`);

    if (count >= 5) {
      count = 0;
      clearInterval(id);
    }
  }, 1000);
};

displaySeconds();

//task 6 https://github.com/qaprosoft/react-laba-international-2/blob/main/lectures/10-js-advanced-3/task.md#6-digit-or-not
const isStartWithDigit = str => /^\d/.test(str);

//task 7 https://github.com/qaprosoft/react-laba-international-2/blob/main/lectures/10-js-advanced-3/task.md#7-optional-advanced

const isPhoneNumber = str =>
  /^\+375\d{9}$/g.test(str.replaceAll(/[()\s-]/g, ''));
// Belarus: +375 xx-xx-xx-xx-x
