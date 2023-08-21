// task 1 https://www.codewars.com/kata/55e7650c8d894146be000095/javascript
function validateMessage(msg) {
  if (msg==null) throw ReferenceError('Message is null!');
  if (typeof msg!='string') throw TypeError(`Message should be of type string but was of type ${typeof msg}!`);
  if (msg.length===0 || msg.length>255) throw RangeError(`Message contains ${msg.length} characters!`);
  return !(msg.indexOf("<") !== -1 && msg.indexOf("<") < msg.lastIndexOf(">"));

}

//task 2 https://www.codewars.com/kata/5a353a478f27f244a1000076
async function sayJoke(url, jokeId) {
  const jokes = (await (await fetch(url)).json()).jokes;
  if (!jokes)
    throw new Error(`No jokes at url: ${url}`);
  const joke = jokes.find(j => j.id === jokeId);
  if (!joke)
    throw new Error(`No jokes found id: ${jokeId}`);
  return {
    saySetup: () => joke.setup,
    sayPunchLine: () => joke.punchLine,
  }
}

//task 3 https://github.com/qaprosoft/react-laba-international-2/blob/main/lectures/10-js-advanced-3/task.md#3-settimeoutsetinterval
const displaySeconds = () => {
  let counter = 0;

  const id = setInterval(() => {
    console.log(`Elapsed time: ${++counter} sec`);

    if (counter >= 5) {
      counter = 0;
      clearInterval(id);
    }
  }, 1000);
};

displaySeconds();

//task 6 https://github.com/qaprosoft/react-laba-international-2/blob/main/lectures/10-js-advanced-3/task.md#6-digit-or-not
const isStartWithDigit = str =>
  /^\d/.test(str);

//task 7 https://github.com/qaprosoft/react-laba-international-2/blob/main/lectures/10-js-advanced-3/task.md#7-optional-advanced
const isPhoneNumber = str =>
  /^\+380\d{9}$/g.test(str.replaceAll(/[()\s-]/g, ''));
