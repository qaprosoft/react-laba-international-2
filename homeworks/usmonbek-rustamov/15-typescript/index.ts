interface Result {
  value: number | null;
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
    return {
      value: num1 + num2,
      error: '',
    };
  }

  subtract(num1: number, num2: number): Result {
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
    return {
      value: num1 / num2,
      error: '',
    };
  }

  power(base: number, exponent: number): Result {
    // check if exponent is positive integer
    if (exponent > 0 && Number.isInteger(exponent)) {
      return {
        value: Math.pow(base, exponent),
        error: '',
      };
    }

    return {
      value: null,
      error: 'Exponent must be a positive integer',
    };
  }

  sqrt(num: number): Result {
    // check if num is non-negative
    if (num >= 0) {
      return {
        value: Math.sqrt(num),
        error: '',
      };
    }

    return {
      value: null,
      error: 'Cannot calculate square root of negative number',
    };
  }
}

const calculator = new BasicCalculator();

// Tests:
console.log(calculator.add(5, 7)); // 12
console.log(calculator.subtract(12, 3)); // 9
console.log(calculator.multiply(4, 8)); // 32
console.log(calculator.divide(14, 2)); // 7
console.log(calculator.power(12, 2)); // 144
console.log(calculator.power(12, -2)); // error message
console.log(calculator.power(12, 2.5)); // error message
console.log(calculator.sqrt(36)); // 6
console.log(calculator.sqrt(-4)); // error
