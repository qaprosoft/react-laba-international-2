interface Result {
  value?: number; // value is optional, will be missing in case of error
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
  add(num1: number, num2: number) {
    return {value: num1 + num2, error: ''};
  }
  subtract(num1: number, num2: number) {
    return {value: num1 - num2, error: ''};
  }
  multiply(num1: number, num2: number) {
    return {value: num1 * num2, error: ''};
  }
  divide(num1: number, num2: number) {
    return {value: num1 / num2, error: ''};
  }
  power(base: number, exponent: number) {
    return exponent < 0 || !Number.isInteger(exponent)
      ? {error: 'Exponent must be a positive integer'}
      : {value: base ** exponent, error: ''};
  }
  sqrt(num: number) {
    return num < 0
      ? {error: 'Cannot calculate square root of negative number'}
      : {value: Math.sqrt(num), error: ''};
  }
}

// ---- Tests ----
const calculator = new BasicCalculator();
// console.log(calculator.add("hey", 4)); // compilation error
// console.log(calculator.add(3, 7, 9)); // compilation error
console.log(calculator.add(3, 4)); // { value: 7, error: '' }
console.log(calculator.subtract(-3, 4.5)); // { value: -7.5, error: '' }
console.log(calculator.divide(3, 4)); // { value: 0.75, error: ''}
console.log(calculator.power(3, 4)); // { value: 81, error: ''}
console.log(calculator.power(2, -4)); // { error: 'Exponent must be a positive integer'}
console.log(calculator.power(2, 1.5)); // { error: 'Exponent must be a positive integer'}
console.log(calculator.power(2, -2.5)); // { error: 'Exponent must be a positive integer'}
console.log(calculator.sqrt(16)); // { value: 4, error: ''}
console.log(calculator.sqrt(-3)); // { error: 'Cannot calculate square root of negative number' }
