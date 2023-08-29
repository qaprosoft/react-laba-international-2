// task 1 https://www.codewars.com/kata/55e7650c8d894146be000095

function validateMessage(msg) {
  if (msg === null) {
    throw new ReferenceError('Message is null!');
  } else if (typeof msg !== 'string') {
    throw new TypeError(
      `Message should be of type string but was of type ${typeof msg}!`,
    );
  } else if (msg.length > 255 || msg.length === 0) {
    throw new RangeError(`Message contains ${msg.length} characters!`);
  }
  return /<.*>/i.test(msg) ? false : true;
}

// task 2 https://www.codewars.com/kata/5a353a478f27f244a1000076/

const sayJoke = (apiUrl, jokeId) => {
  return fetch(apiUrl)
    .then(response => response.json())
    .then(({jokes}) =>
      jokes
        ? jokes.find(joke => joke.id === jokeId)
        : Promise.reject(new Error(`No jokes at url: ${apiUrl}`)),
    )
    .then(joke =>
      joke
        ? {saySetup: () => joke.setup, sayPunchLine: () => joke.punchLine}
        : Promise.reject(new Error(`No jokes found id: ${jokeId}`)),
    );
};

// task 3

const secondCounter = setInterval(
  () => {
    counter++;
    console.log(`Elapsed time: ${counter} seconds`);
  },
  1000,
  (counter = 0),
);

const timeLimiter = setTimeout(() => {
  clearInterval(secondCounter);
}, 5000);

// task 5 in folder

// task 6

function checkDigit(string) {
  return /\d/.test(string[0]);
}

// task 7

function isPhoneNumber(string) {
  let phoneNumberRegex = /\+54-?0?[0-2]\d{2,3}-?[46]\d-?\d{4}/;
  return phoneNumberRegex.test(string);
}

