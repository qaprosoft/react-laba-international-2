// Task 1: Error Throwing - Error Handling #2
// https://www.codewars.com/kata/55e7650c8d894146be000095/train/javascript
function validateMessage(msg) {
  if (msg === null) {
    throw new ReferenceError('Message is null!');
  }

  if (typeof msg !== 'string') {
    throw new TypeError(
      `Message should be of type string but was of type ${typeof msg}!`,
    );
  }

  if (msg.length === 0 || msg.length > 255) {
    throw new RangeError(`Message contains ${msg.length} characters!`);
  }

  const htmlTagPattern = /<.+>/;

  return !htmlTagPattern.test(msg);
}

// Task 2: Jokes you've been 'awaiting' for ... promise
// https://www.codewars.com/kata/5a353a478f27f244a1000076/train/javascript
async function sayJoke(apiUrl, jokeId) {
  const response = await fetch(apiUrl);
  const data = await response.json();

  if (!('jokes' in data)) {
    throw new Error(`No jokes at url: ${apiUrl}`);
  }

  const joke = data.jokes.find(joke => joke.id === jokeId);
  if (!joke) {
    throw new Error(`No jokes found id: ${jokeId}`);
  }

  return {
    saySetup: () => joke.setup,
    sayPunchLine: () => joke.punchLine,
  };
}

// Task 3: setTimeout/setInterval
// https://github.com/qaprosoft/react-laba-international-2/blob/main/lectures/10-js-advanced-3/task.md#3-settimeoutsetinterval
function timeInterval() {
  let seconds = 0;
  const timerId = setInterval(() => {
    seconds++;
    console.log(`Elapsed time: ${seconds} sec`);

    if (seconds > 4) clearInterval(timerId);
  }, 1000);
}

// Task 6: Digit or not
// https://github.com/qaprosoft/react-laba-international-2/blob/main/lectures/10-js-advanced-3/task.md#6-digit-or-not
function startWithDigit(str) {
  const pattern = /^\d/;
  return pattern.test(str);
}

// Task 7: Is tel number
// https://github.com/qaprosoft/react-laba-international-2/blob/main/lectures/10-js-advanced-3/task.md#7-optional-advanced
function isTelNumber(str) {
  // Poland +48 xxx-xxx-xxx
  const pattern = /\+48\s+\d{3}-\d{3}-\d{3}/;
  console.log(pattern.test(str));
  return pattern.test(str);
}
