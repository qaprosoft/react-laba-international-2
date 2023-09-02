// Task 1: https://www.codewars.com/kata/55e7650c8d894146be000095/javascript
const validateMessage = msg => {
  if (msg === null) {
    throw new ReferenceError('Message is null!');
  }

  if (typeof msg !== 'string') {
    throw new TypeError(
      `Message should be of type string but was of type ${typeof msg}!`,
    );
  }

  if (msg.length >= 256 || msg.length === 0) {
    throw new RangeError(`Message contains ${msg.length} characters!`);
  }

  let counter = 0;
  for (let i = 0; i < msg.length; i++) {
    if (msg[i] === '<') {
      counter++;
    }
    if (msg[i] === '>' && counter > 0) {
      return false;
    }
  }

  return true;
};

//https://Task 2: www.codewars.com/kata/5a353a478f27f244a1000076
const sayJoke = async (apiUrl, jokeId) => {
  try {
    const urlData = await fetch(apiUrl);
    const jsonData = await urlData.json();

    if (!jsonData.jokes || !Array.isArray(jsonData.jokes)) {
      throw new Error(`No jokes at url: ${apiUrl}`);
    }

    const joke = jsonData.jokes.find(joke => joke.id === jokeId);

    if (!joke) {
      throw new Error(`No jokes found id: ${jokeId}`);
    }

    const jokeObject = {
      saySetup: () => joke.setup,
      sayPunchLine: () => joke.punchLine,
    };

    return jokeObject;
  } catch (error) {
    throw error;
  }
};

const timePassed = (time, maxReps) => {
  if (!time) time = 0;
  if (time <= maxReps) {
    console.log(`Time Elapsed ${time} seconds`);
    setTimeout(() => timePassed(++time), 1000);
  }
};

//Task 6
const isTheFirstCharacterDigit = string => {
  const dig = /\d/g;
  return dig.test(string[0]);
};
