// task 1 https://www.codewars.com/kata/55e7650c8d894146be000095/javascript
const validateMessage = (msg) => {
  if(msg === null) {
    throw new ReferenceError('Message is null!')
  }
  if(typeof msg !== 'string') {
    throw new TypeError(`Message should be of type string but was of type ${typeof msg}!`);
  }
  if(msg.length === 0) {
    throw new RangeError(`Message contains 0 characters!`)
  }
  if(msg.length > 255) {
    throw new RangeError(`Message contains ${msg.length} characters!`);
  }
  return !(msg.includes('<') && msg.includes('>'));
}

// task 3

let seconds = 0;

setInterval(function() {
  seconds++;
  console.log(`Elapsed time: ${seconds} sec`);
  if(seconds === 5) {
    console.log('Time is over');
    clearInterval(this);
  }
}, 1000);

// task 6

const startsWithDigit = (inputString) => {
  return /^\d/.test(inputString);
}