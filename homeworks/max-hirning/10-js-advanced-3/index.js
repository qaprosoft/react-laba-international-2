// task 1 https://www.codewars.com/kata/55e7650c8d894146be000095/javascript
function validateMessage(msg) {
    if(msg === null) {
        throw new ReferenceError('Message is null!');
    }

    if(typeof msg !== "string") {
        throw new TypeError(`Message should be of type string but was of type ${typeof msg}!`)
    }

    const msgLength = msg.length;
    if(msgLength > 255 || msgLength === 0) {
        throw new RangeError(`Message contains ${msg.length} characters!`)
    }

    return hasHTMLTags(msg);
}

function hasHTMLTags(inputString) {
    const htmlTagRegex = /<[^>]*>/g;
    return !htmlTagRegex.test(inputString);
}


// task 2 https://www.codewars.com/kata/5a353a478f27f244a1000076
// task 3 https://github.com/qaprosoft/react-laba-international-2/blob/main/lectures/10-js-advanced-3/task.md#3-settimeoutsetinterval
function timer() {
    let second = 1;
    const interval = setInterval(() => {
        console.log(`Elapsed time: ${second} sec`);
        if(second === 5) clearInterval(interval);
        second++;
    }, 1000);
}


// task 4 https://github.com/qaprosoft/react-laba-international-2/blob/main/lectures/10-js-advanced-3/task.md#4-event-loop
// task 5 https://github.com/qaprosoft/react-laba-international-2/blob/main/lectures/10-js-advanced-3/task.md#5-fetch-apixmlhttprequest
// task 6 https://github.com/qaprosoft/react-laba-international-2/blob/main/lectures/10-js-advanced-3/task.md#6-digit-or-not
// task 7 https://github.com/qaprosoft/react-laba-international-2/blob/main/lectures/10-js-advanced-3/task.md#7-optional-advanced
// task 8 https://github.com/qaprosoft/react-laba-international-2/blob/main/lectures/10-js-advanced-3/task.md#8-optional-advanced