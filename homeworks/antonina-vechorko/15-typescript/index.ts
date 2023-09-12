interface Result {
  value?: number;
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
    if (num2 === 0) {
      return {
        error: 'Cannot divide by zero ',
      };
    }
    return {
      value: num1 / num2,
      error: '',
    };
  }

  power(base: number, exponent: number): Result {
    if (!Number.isInteger(exponent) || exponent <= 0) {
      return {
        error: 'Exponent must be a positive integer',
      };
    }
    return {
      value: Math.pow(base, exponent),
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

const calculator = new BasicCalculator();

console.log(calculator.add(3, 4)); // {value: 7, error: ""}
console.log(calculator.subtract(5, 2)); // {value: 3, error: ""}
console.log(calculator.multiply(5, 7)); // {value: 35, error: ""}
console.log(calculator.divide(5, 0)); // {error: "Cannot divide by zero "}
console.log(calculator.divide(9, 4)); // {value: 2.25, error: ""}
console.log(calculator.power(2, 3)); // {value: 8, error: ""}
console.log(calculator.sqrt(81)); // {value: 9, error: ""}
console.log(calculator.sqrt(-4)); // {error: "Cannot calculate square root of negative number"}
