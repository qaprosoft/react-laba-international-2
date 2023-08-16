//task1 https://www.codewars.com/kata/55e7650c8d894146be000095/javascript
function validateMessage(msg) {
    let msgLength;
    if (msg !== null) msgLength = msg.length;
    const regEx = /<.*>/i;

    if (msg === null) throw new ReferenceError("Message is null!");
    if (typeof msg !== "string")
      throw new TypeError(
        `Message should be of type string but was of type ${typeof msg}!`
      );
    if (msgLength === 0 || msgLength > 255)
      throw new RangeError(`Message contains ${msgLength} characters!`);
    if (regEx.test(msg)) return false;

    return true;
  }

  //task2 https://www.codewars.com/kata/5a353a478f27f244a1000076
  async function sayJoke(apiUrl, jokeId) {
    const response = await fetch(apiUrl);
    const data = await response.json();
    const jokes = await data.jokes;

    if (!jokes) throw new Error(`No jokes at url: ${apiUrl}`);

    const joke = jokes.find((el) => el.id === jokeId);

    if (!joke) throw new Error(`No jokes found id: ${jokeId}`);

    joke.saySetup = () => joke.setup;
    joke.sayPunchLine = () => joke.punchLine;

    return joke;
  }

  //task3
  //Part1
  let secondsPassed = 0;

  const countSeconds = () => {
    secondsPassed++;
    console.log(`Elapsed time: ${secondsPassed} sec.`);
  };
  let timerId = setInterval(() => countSeconds(), 1000);

  //Part2
  const stopTimer = () => {
    clearInterval(timerId);
    setTimeout(() => console.log("The timer is stopped!"), 1000);
  };
  setTimeout(() => stopTimer(), 5000);

  //task6
  const isStartFromDigit = (string) => {
    const regEx = /^\d/;
    return regEx.test(string);
  };

  //task7
  const isPhoneNumber = (string) => {
    const regEx = /^\+54 \d{3}-\d{4}-\d{3}/;
    return regEx.test(string);
  };