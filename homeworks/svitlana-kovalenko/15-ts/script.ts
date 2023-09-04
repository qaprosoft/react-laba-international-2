interface Result {
  value: number;
  error: string;
}

interface Calculator {
  add(num1: number, num2: number): Result;
  subtract(num1: number, num2: number): Result;
  multiply(num1: number, num2: number): Result;
  divide(num1: number, num2: number): Result;
  power(base: number, exponent: number): Result;
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
  power(base: number, exponent: number): Result {
    return Number.isInteger(exponent) && exponent > 0
      ? {value: Math.pow(base, exponent), error: ''}
      : {value: 0, error: 'Exponent must be a positive integer'};
  }
  sqrt(num: number): Result {
    return num > 0
      ? {value: Math.sqrt(num), error: ''}
      : {value: 0, error: 'Cannot calculate square root of negative number'};
  }
}

const calculator = new BasicCalculator();
const additionResult = calculator.add(5, 3);
const subtractResult = calculator.subtract(7, 4);
const multiplyResult = calculator.multiply(5, 5);
const divisionResult = calculator.divide(10, 2);
const powerResult = calculator.power(2, -3);
const sqrtResult = calculator.sqrt(-25);
console.log(additionResult);
console.log(subtractResult);
console.log(multiplyResult);
console.log(divisionResult);
console.log(powerResult);
console.log(sqrtResult);
