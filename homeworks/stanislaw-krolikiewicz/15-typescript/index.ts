type Result = {
  value: number | null;
  error: string;
};

interface Calculator {
  add(num1: number, num2: number): Result;
  substract(num1: number, num2: number): Result;
  multiply(num1: number, num2: number): Result;
  divide(num1: number, num2: number): Result;
  power(base: number, exponent: number): Result;
  sqrt(num: number): Result;
}

class BasicCalculator implements Calculator {
  add(num1: number, num2: number): Result {
    try {
      return {
        value: num1 + num2,
        error: '',
      };
    } catch (error) {
      return {
        value: null,
        error: error.message,
      };
    }
  }
  substract(num1: number, num2: number): Result {
    try {
      return {
        value: num1 - num2,
        error: '',
      };
    } catch (error) {
      return {
        value: null,
        error: error.message,
      };
    }
  }
  multiply(num1: number, num2: number): Result {
    try {
      return {
        value: num1 * num2,
        error: '',
      };
    } catch (error) {
      return {
        value: null,
        error: error.message,
      };
    }
  }
  divide(num1: number, num2: number): Result {
    try {
      return {
        value: num1 / num2,
        error: '',
      };
    } catch (error) {
      return {
        value: null,
        error: error.message,
      };
    }
  }
  power(base: number, exponent: number): Result {
    try {
      if (exponent <= 0 || !Number.isInteger(exponent))
        throw new Error('Exponent must be a positive integer!');
      return {
        value: Math.pow(base, exponent),
        error: '',
      };
    } catch (error) {
      return {
        value: null,
        error: error.message,
      };
    }
  }
  sqrt(num: number): Result {
    try {
      if (num < 0)
        throw new Error('Cannot calculate square root of negative number!');
      return {
        value: Math.sqrt(num),
        error: '',
      };
    } catch (error) {
      return {
        value: null,
        error: error.message,
      };
    }
  }
}

const myCalculator = new BasicCalculator();

console.log(myCalculator.add(1, 2)); // {value: 3, error: ''}
console.log(myCalculator.substract(1, 3)); // {value: -2, error: ''}
console.log(myCalculator.divide(1, 2)); // {value: 0.5, error: ''}
console.log(myCalculator.power(2, 1)); // {value: 2, error: ''}
console.log(myCalculator.power(2, -1)); // {value: null, error: 'Exponent must be a positive integer!'}
console.log(myCalculator.sqrt(2)); // {value: 1.4142135633730951, error: ''}
console.log(myCalculator.sqrt(-1)); // {value: null, error: 'Cannot calculate square root of negative number!'}
