import ICalculator from './types/calculator';
import IResult from './types/result';

class BasicCalculator implements ICalculator {
  add(num1: number, num2: number): IResult {
    return new Result(num1 + num2, '');
  }
  subtract(num1: number, num2: number): IResult {
    return new Result(num1 - num2, '');
  }
  multiply(num1: number, num2: number): IResult {
    return new Result(num1 * num2, '');
  }
  divide(num1: number, num2: number): IResult {
    return new Result(num1 / num2, '');
  }
  power(base: number, exponent: number): IResult {
    return exponent >= 0
      ? new Result(base ** exponent, '')
      : new Result(null, 'Exponent must be a positive integer');
  }
  sqrt(num: number): IResult {
    return num >= 0
      ? new Result(Math.sqrt(num), '')
      : new Result(null, 'Cannot calculate square root of negative number');
  }
}

class Result implements IResult {
  value: number | null;
  error: string;

  constructor(value: number | null, error: string) {
    this.value = value;
    this.error = error;
  }
}

const calculator = new BasicCalculator();

//test
console.log(calculator.add(200, 22)); //{ value: 222, error: '' }
console.log(calculator.add(-10, 10)); //{ value: 0, error: '' }
console.log(calculator.add(1.25, 10)); //{ value: 11.25, error: '' }
console.log('\n****************\n');

console.log(calculator.subtract(200, 22)); //{ value: 178, error: '' }
console.log(calculator.subtract(-10, 10)); //{ value: -20, error: '' }
console.log(calculator.subtract(1.25, 10)); //{ value: -8.75, error: '' }
console.log('\n****************\n');

console.log(calculator.multiply(6, 6)); //{ value: 36, error: '' }
console.log(calculator.multiply(-10, 10)); //{ value: -100, error: '' }
console.log(calculator.multiply(1.25, 10)); //{ value: 12.5, error: '' }
console.log('\n****************\n');

console.log(calculator.divide(24, 4)); //{ value: 6, error: '' }
console.log(calculator.divide(-10, 10)); //{ value: -1, error: '' }
console.log(calculator.divide(1.25, 10)); //{ value: 0.125, error: '' }
console.log('\n****************\n');

console.log(calculator.power(4, 3)); //{ value: 64, error: '' }
console.log(calculator.power(-10, 10)); //{ value: 10000000000, error: '' }
console.log(calculator.power(10, -10)); //{ value: null, error: "Exponent must be a positive integer" }
console.log(calculator.power(10, 0)); //{ value: 1, error: "" }
console.log('\n****************\n');

console.log(calculator.sqrt(121)); //{ value: 11, error: '' }
console.log(calculator.sqrt(-10)); //{ value: null, error: 'Cannot calculate square root of negative number'}
console.log(calculator.sqrt(1.25)); //{ value: 1.118033988749895, error: '' }
console.log(calculator.sqrt(0)); //{ value: 0, error: '' }
