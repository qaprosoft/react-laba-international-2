// NUMBERS & STRINGS & BOOLEANS
// colon - :

const number: number = 123;
const string: string = '123';
const boolean: boolean = true;

const num1: number = 1;
const num2: number = 2;

let numType = 123; // automatically detects type (number)
// numType = '123'; // automatically detects type (number)

const printResult: boolean = true;
const resultPhrase: string = 'Result is';

function add(
  n1: number,
  n2: number,
  showResult: boolean,
  phrase: string,
): string {
  if (showResult) {
    return `${phrase} ${n1 + n2}`;
  }

  return 'no result';
}

console.log('add()', add(num1, num2, printResult, resultPhrase));

export {};
