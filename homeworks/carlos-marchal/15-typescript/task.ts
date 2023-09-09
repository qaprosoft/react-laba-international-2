interface Result {
  value?: number;
  error: string;
}
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
    return {
      value: num1 + num2,
      error: '',
    };
  }
  substract(num1: number, num2: number): Result {
    return {
      value: num1 - num2,
      error: '',
    };
  }
  multiply(num1: number, num2: number): Result {
    return {
      value: num1 * num2,
      error: '',
    };
  }
  divide(num1: number, num2: number): Result {
    if (num2 === 0) {
      return {
        error: 'Cannot divide by zero',
      };
    }
    return {
      value: num1 / num2,
      error: '',
    };
  }
  power(base: number, exponent: number): Result {
    if (exponent < 0 || !Number.isInteger(exponent)) {
      return {
        error: 'Exponent must be a positive integer',
      };
    }
    return {
      value: base ** exponent,
      error: '',
    };
  }
  sqrt(num: number): Result {
    if (num < 0) {
      return {
        error: 'Cannot calculate square root of negative number',
      };
    }
    return {
      value: Math.sqrt(num),
      error: '',
    };
  }
}
