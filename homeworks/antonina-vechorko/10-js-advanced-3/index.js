// task 1 https://www.codewars.com/kata/55e7650c8d894146be000095/javascript
function validateMessage(msg) {
  if (msg === null) {
    throw new ReferenceError('Message is null!');
  }
  if (typeof msg !== 'string') {
    throw new TypeError(
      `Message should be of type string but was of type ${typeof msg}!`,
    );
  }
  if (msg.length > 255 || !msg.length) {
    throw new RangeError(`Message contains ${msg.length} characters!`);
  }
  return !/<.*>/.test(msg);
}

// task 2 https://www.codewars.com/kata/5a353a478f27f244a1000076
async function sayJoke(apiUrl, jokeId) {
  const response = await fetch(apiUrl);
  const data = await response.json();
  const jokes = await data.jokes;

  if (!jokes) throw new Error(`No jokes at url: ${apiUrl}`);

  const joke = jokes.find(el => el.id === jokeId);

  if (!joke) throw new Error(`No jokes found id: ${jokeId}`);

  joke.saySetup = () => joke.setup;
  joke.sayPunchLine = () => joke.punchLine;

  return joke;
}

//task 3 https://github.com/qaprosoft/react-laba-international-2/blob/main/lectures/10-js-advanced-3/task.md#3-settimeoutsetinterval
// part 1
let secondsPassed = 0;

const displayElapsedTime = () => {
  secondsPassed++;
  console.log(`Elapsed time: ${secondsPassed} sec`);
};

const intervalId = setInterval(displayElapsedTime, 1000);

// part 2
let secondsPassedTillStop = 0;

const displayElapsedTimeTillStop = () => {
  secondsPassedTillStop++;
  console.log(`Elapsed time: ${secondsPassedTillStop} sec`);

  if (secondsPassedTillStop >= 5) {
    clearInterval(intervalIdTillStop);
  }
};

const intervalIdTillStop = setInterval(displayElapsedTimeTillStop, 1000);
