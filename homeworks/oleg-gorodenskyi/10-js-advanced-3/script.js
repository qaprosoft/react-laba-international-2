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
  if (msg.length > 255 || msg.length === 0) {
    throw new RangeError(`Message contains ${msg.length} characters!`);
  }
  if (/<[^>]+>/i.test(msg)) {
    return false;
  }
  return true;
}

// task 2 https://www.codewars.com/kata/5a353a478f27f244a1000076
// API doesn't work

// task 3 https://github.com/qaprosoft/react-laba-international-2/blob/main/lectures/10-js-advanced-3/task.md#3-settimeoutsetinterval
function elapsedTime() {
  const time = Date.now();
  const stopwatch = setInterval(() => {
    const newTime = Date.now();
    const ms = 1000;
    const timePassed = Math.floor((newTime - time) / ms);
    console.log(`Elapsed time: ${timePassed} sec`);
  }, 1000);

  stopAFterFiveSec = setTimeout(() => {
    clearInterval(stopwatch);
  }, 5000);
}

// task 6 https://github.com/qaprosoft/react-laba-international-2/blob/main/lectures/10-js-advanced-3/task.md#6-digit-or-not
function digitOrNot(string) {
  const regex = /^\d/;
  return regex.test(string);
}

// task 7 https://github.com/qaprosoft/react-laba-international-2/blob/main/lectures/10-js-advanced-3/task.md#7-optional-advanced
function isPhoneHumber(number) {
  const regex = /^\+\d{2}\s\d{3}\-\d{4}\-\d{3}$/;
  return regex.test(number);
}
