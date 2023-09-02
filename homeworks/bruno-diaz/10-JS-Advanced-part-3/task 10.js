// task 1 https://www.codewars.com/kata/55e7650c8d894146be000095/javascript

function validateMessage(msg) {
  const regex = /<.*>/;

  if (msg === null) {
    throw new ReferenceError("Message is null!");
  }

  if (typeof msg !== "string") {
    throw new TypeError(
      `Message should be of type string but was of type ${typeof msg}!`
    );
  }

  if (msg.length > 255 || msg.length === 0) {
    throw new RangeError(`Message contains ${msg.length} characters!`);
  }

  if (regex.test(msg)) {
    return false;
  }

  return true;
}

// console.log(validateMessage('How are ya doing?<br>Good!'));

// task 2 https://www.codewars.com/kata/5a353a478f27f244a1000076/train/javascript

async function sayJoke(apiUrl, jokeId) {
  const response = await fetch(apiUrl);
  const jsonResponse = await response.json();

  if (!jsonResponse.hasOwnProperty("jokes")) {
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

// task 3

const start = new Date();

const displaySeconds = () => {
  const timer = setInterval(() => {
    console.log(`Elapsed time: ${Math.floor((new Date() - start) / 1000)} sec`);

    if (Math.floor((new Date() - start) / 1000) >= 5) {
      clearInterval(timer);
    }
  }, 1000);
};

// displaySeconds()

// task 6
const regexp = /^\d/;

const isDigit = (str) => {
  if (regexp.test(str)) {
    return "Starts with DIGIT! D:";
  } else {
    return "Does NOT start with DIGIT ;D";
  }
};

console.log(isDigit("Bruno"));
