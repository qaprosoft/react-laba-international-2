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


// task 2
// task 3
// task 4
// task 5
// task 6
// task 7
// task 8