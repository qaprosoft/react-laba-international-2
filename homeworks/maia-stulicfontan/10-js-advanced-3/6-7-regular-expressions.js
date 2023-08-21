// task 6: https://github.com/qaprosoft/react-laba-international-2/blob/main/lectures/10-js-advanced-3/task.md#6-digit-or-not
/* Digit or not: write a function that receives a variable containing a string, as a parameter and checks whether the contents of this 
variable begin with a digit or not, using a regular expression */
function beginsWithDigit(string) {
  return /^\d/.test(string);
}

console.log(beginsWithDigit('123abc')); // true
console.log(beginsWithDigit('1abc')); // true
console.log(beginsWithDigit('abc1')); // false
console.log(beginsWithDigit('$123')); // false

// Optional (advanced)
// task 7: https://github.com/qaprosoft/react-laba-international-2/blob/main/lectures/10-js-advanced-3/task.md#6-digit-or-not
// Check if this entry is a phone number, e.g. set the format of your country: Argentina: +54 xxx-xxxx-xxx
function isPhoneNumber(phone) {
  return /^\+54\s\d{3}-\d{4}-\d{3}$/.test(phone);
}

console.log(isPhoneNumber('+54 123-1234-187')); // true
console.log(isPhoneNumber('+54 123-1234-1878888')); // false
console.log(isPhoneNumber('123+54 123-1234-1878888')); // false
console.log(isPhoneNumber('123-1234-123')); // false
console.log(isPhoneNumber('541231234123')); // false
console.log(isPhoneNumber('test123')); // false
