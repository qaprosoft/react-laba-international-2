// 1.https://www.codewars.com/kata/55e7650c8d894146be000095/train/javascript
function validateMessage(input) {
  if (input === null) {
    throw new ReferenceError('Message is null!');
  }
  if (typeof input !== 'string') {
    throw new TypeError(
      `Message should be of type string but was of type ${typeof input}!`,
    );
  }
  if (input.length === 0 || input.length > 255) {
    throw new RangeError(`Message contains ${input.length} characters!`);
  }
  if (/<[a-z][\s\S]*>/i.test(input)) {
    return false;
  }
  return true;
}
// 2. https://www.codewars.com/kata/5a353a478f27f244a1000076/train/javascript
async function sayJoke(apiUrl, jokeId) {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    if (!data.jokes || !Array.isArray(data.jokes)) {
      throw new Error(`No jokes at url: ${apiUrl}`);
    }
    const joke = data.jokes.find(el => el.id === jokeId);
    if (!joke) {
      throw new Error(`No jokes found id: ${jokeId}`);
    }

    return {
      saySetup: () => joke.setup,
      sayPunchLine: () => joke.punchLine,
    };
  } catch (error) {
    throw error;
  }
}
// 3. https://github.com/qaprosoft/react-laba-international-2/blob/main/lectures/10-js-advanced-3/task.md#3-settimeoutsetinterval
// Part 1: Display elapsed time every second
let elapsedTime = 0;
const interval = setInterval(() => {
  elapsedTime++;
  console.log(`Elapsed time: ${elapsedTime} sec`);
}, 1000);
// Part 2: Stop after 5 seconds
setTimeout(() => {
  clearInterval(interval);
  console.log('Program stopped after 5 seconds.');
}, 5000);

// 6. https://github.com/qaprosoft/react-laba-international-2/blob/main/lectures/10-js-advanced-3/task.md#6-digit-or-not
function startsWithDigit(inputString) {
  const regex = /^\d/;
  return regex.test(inputString);
}
// 7. https://github.com/qaprosoft/react-laba-international-2/blob/main/lectures/10-js-advanced-3/task.md#7-optional-advanced
function isPhoneNumber(inputString) {
  const regex = /^\+54 \d{3}-\d{4}-\d{3}$/;
  return regex.test(inputString);
}
