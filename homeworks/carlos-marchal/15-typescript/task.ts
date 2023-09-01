interface Result {
  value: number | null;
  error?: string;
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
      value: num1 + num2,
    };
  }
  subtract(num1: number, num2: number): Result {
    return {
      value: num1 - num2,
    };
  }
  multiply(num1: number, num2: number): Result {
    return {
      value: num1 * num2,
    };
  }
  divide(num1: number, num2: number): Result {
    if (num2 === 0) {
      return {
        value: Infinity,
        error: 'Cannot divide by zero',
      };
    }
    return {
      value: num1 / num2,
    };
  }
  power(base: number, exponent: number): Error | Result {
    if (exponent < 0) {
      return {
        value: null,
        error: 'Exponent must be a positive integer',
      };
    }
    return {
      value: base ** exponent,
    };
  }
  sqrt(num: number): Error | Result {
    if (num < 0) {
      return {
        value: null,
        error: 'Cannot calculate square root of negative number',
      };
    }
    return {
      value: Math.sqrt(num),
    };
  }
}

const calculator = new BasicCalculator();
