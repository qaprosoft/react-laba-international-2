interface Result {
  result: number;
  error: string;
}

interface Calculator {
  add(num1: number, num2: number): Result;
  subtract(num1: number, num2: number): Result;
  multiply(num1: number, num2: number): Result;
  divide(num1: number, num2: number): Result;
  power(base: number, exponent: number): Result | Error;
  sqrt(num: number): Result | Error;
}

class BasicCalculator implements Calculator {
  add(num1: number, num2: number): Result {
    return {
      result: num1 + num2,
      error: '',
    };
  }

  subtract(num1: number, num2: number): Result {
    return {
      result: num1 - num2,
      error: '',
    };
  }

  multiply(num1: number, num2: number): Result {
    return {
      result: num1 * num2,
      error: '',
    };
  }

  divide(num1: number, num2: number): Result {
    return {
      result: num1 / num2,
      error: '',
    };
  }

  power(base: number, exponent: number): Result | Error {
    if (exponent < 0) {
      return new Error('Exponent must be a positive integer');
    }

    return {
      result: base ** exponent,
      error: '',
    };
  }

  sqrt(num: number): Result | Error {
    if (num < 0) {
      return new Error('Cannot calculate square root of negative number');
    }
    return {
      result: Math.sqrt(num),
      error: '',
    };
  }
}

const calc = new BasicCalculator();

//Tests:

// console.log(calc.add(5, 5)); // to return Result object with 10 and Error;
// console.log(calc.subtract(5, 5)); //to return Result object with 0 and Error
// console.log(calc.multiply(5, 5)); //to return Result object with 25 and Error
// console.log(calc.divide(5, 5)); //to return Result object with 1 and Error
// console.log(calc.power(5, 5)); //to return Result object with 3125 and Error
// console.log(calc.power(-5, 5)); //to return Result object with -3125 and Error
// console.log(calc.power(-5, -1)); //to throw an Error "Exponent must be a positive integer"
// console.log(calc.sqrt(25)); //to return Result object with 5 and Error
// console.log(calc.sqrt(-1)); //to throw an Error "Cannot calculate square root of negative number"
