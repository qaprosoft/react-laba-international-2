interface Result {
  value: number;
  error: string;
}

interface Calculator {
  add(num1: number, num2: number): Result;
  subtract(num1: number, num2: number): Result;
  multiply(num1: number, num2: number): Result;
  divide(num1: number, num2: number): Result;
  power(num1: number, exponent: number): Result;
  sqrt(num: number): Result;
}

class BasicCalculator implements Calculator {
  add(num1: number, num2: number): Result {
    return {value: num1 + num2, error: ''};
  }
  subtract(num1: number, num2: number): Result {
    return {value: num1 - num2, error: ''};
  }
  multiply(num1: number, num2: number): Result {
    return {value: num1 * num2, error: ''};
  }
  divide(num1: number, num2: number): Result {
    return {value: num1 / num2, error: ''};
  }
  power(num1: number, exponent: number): Result {
    if (exponent < 0)
      return {value: NaN, error: 'Exponent must be a positive integer.'};
    return {value: Math.pow(num1, exponent), error: ''};
  }
  sqrt(num: number): Result {
    if (num < 0)
      return {
        value: NaN,
        error: 'Cannot calculate square root of negative number.',
      };
    return {value: Math.sqrt(num), error: ''};
  }
}

// Tests

const calc = new BasicCalculator();
console.log(calc.add(5, 5)); // must return Result object with value 10 and empty error;
console.log(calc.subtract(5, 5)); //must return Result object with value 0 and empty error
console.log(calc.multiply(5, 5)); //must return Result object with value 25 and empty error
console.log(calc.divide(5, 5)); //must return Result object with value 1 and empty error
console.log(calc.power(5, 2)); //must return Result object with value 25 and empty error
console.log(calc.power(5, -5)); //must return Result object with value NaN and error "Exponent must be a positive integer"
console.log(calc.sqrt(25)); //must return Result object with value 5 and empty error
console.log(calc.sqrt(-5)); //must return Result object with value NaN and error "Cannot calculate square root of negative number"
