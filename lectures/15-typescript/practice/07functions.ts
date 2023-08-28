function add(n1: number, n2: number) {
  // number was automatically detected as return type
  return n1 + n2;
}

function printResult(num: number): void {
  console.log(num);
}

// ------ HOW TO SAVE FUNCTION AS TYPE

let functionType: (param1: number, param2: number) => number;

functionType = add;
// functionType = printResult; // does not work beacause of not match the type

/**
 * FUNCS WITH CB
 */
function testFunc(num: number) {
  return num;
}

function functWithCb(n1: number, n2: number, cb: (p1: number) => number): void {
  const result = n1 + n2;
  console.log('CB: ', cb(result));
}

functWithCb(1, 2, testFunc);

export {};
