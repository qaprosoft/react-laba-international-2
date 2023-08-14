// task 1 https://www.codewars.com/kata/55e7650c8d894146be000095/javascript
function validateMessage(msg) {
  if (msg === null) throw new ReferenceError('Message is null!');
  if (typeof msg !== 'string')
    throw new TypeError(
      `Message should be of type string but was of type ${typeof msg}!`,
    );
  if (msg.length > 255 || msg.length === 0)
    throw new RangeError(`Message contains ${msg.length} characters!`);
  if (msg.match(/<[^>]*>/)) return false;
  return true;
}

// task 2 https://www.codewars.com/kata/5a353a478f27f244a1000076
const sayJoke = async (apiUrl, jokeId) => {
  const response = await fetch(apiUrl);
  const data = await response.json();

  if (!data.hasOwnProperty('jokes')) {
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
};


// task 3
let secondsElapsed = 0;
const intervalId = setInterval(
  () => console.log(`Elapsed time: ${++secondsElapsed} sec`),
  1000,
);

setTimeout(() => clearInterval(intervalId), 5000);