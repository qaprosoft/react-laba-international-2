import {ICalculator} from './types/types';

class BasicCalculator implements ICalculator {
  add(num1: number, num2: number) {
    return {value: num1 + num2, errorMessage: ''};
  }
  subtract(num1: number, num2: number) {
    return {value: num1 - num2, errorMessage: ''};
  }
  multiply(num1: number, num2: number) {
    return {value: num1 * num2, errorMessage: ''};
  }
  divide(num1: number, num2: number) {
    return {value: num1 / num2, errorMessage: ''};
  }
  power(base: number, exponent: number) {
    return exponent < 1
      ? {value: null, errorMessage: 'Exponent must be a positive integer'}
      : {value: Math.pow(base, exponent), errorMessage: ''};
  }
  sqrt(num: number) {
    return num < 1
      ? {
          value: null,
          errorMessage: 'Cannot calculate square root of negative number',
        }
      : {value: Math.sqrt(num), errorMessage: ''};
  }
}

const exampleCalculator = new BasicCalculator();

console.log(exampleCalculator.add(1, 1));
console.log(exampleCalculator.subtract(2, 1));
console.log(exampleCalculator.multiply(2, 2));
console.log(exampleCalculator.divide(4, 2));
console.log(exampleCalculator.power(2, 2));
console.log(exampleCalculator.power(2, -2));
console.log(exampleCalculator.sqrt(9));
console.log(exampleCalculator.sqrt(-1));
