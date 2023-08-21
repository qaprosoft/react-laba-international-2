// task 1: https://www.codewars.com/kata/55e7650c8d894146be000095/train/javascript
function validateMessage(msg) {
  if (/<.+>/.test(msg)) return false;
  if (msg === null) throw new ReferenceError('Message is null!');
  if (typeof msg !== 'string')
    throw new TypeError(
      `Message should be of type string but was of type ${typeof msg}!`,
    );
  if (msg.length == 0 || msg.length > 255)
    throw new RangeError(`Message contains ${msg.length} characters!`);
  return true;
}

// task 2: https://www.codewars.com/kata/5a353a478f27f244a1000076/train/javascript
async function sayJoke(apiUrl, jokeId) {
  const data = await fetch(apiUrl).then(data => data.json());
  const jokes = await data.jokes;
  if (!jokes) throw new Error(`No jokes at url: ${apiUrl}`);
  const joke = jokes.find(joke => joke.id === jokeId);
  if (!joke) throw new Error(`No jokes found id: ${jokeId}`);
  return {
    saySetup: () => joke.setup,
    sayPunchLine: () => joke.punchLine,
  };
}
