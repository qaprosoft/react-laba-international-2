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
    return {
      value: num1 + num2,
      error: "",
    };
  }

  subtract(num1: number, num2: number): Result {
    return {
      value: num1 - num2,
      error: "",
    };
  }

  multiply(num1: number, num2: number): Result {
    return {
      value: num1 * num2,
      error: "",
    };
  }

  divide(num1: number, num2: number): Result {
    if (num2 === 0) {
      return {
        value: 0,
        error: "Division by zero is not allowed",
      };
    }

    return {
      value: num1 / num2,
      error: "",
    };
  }

  power(base: number, exponent: number): Result {
    if (exponent <= 0 || !Number.isInteger(exponent)) {
      return {
        value: 0,
        error: "Exponent must be a positive integer",
      };
    }

    return {
      value: Math.pow(base, exponent),
      error: "",
    };
  }

  sqrt(num: number): Result {
    if (num < 0) {
      return {
        value: 0,
        error: "Square root of a negative number is not allowed",
      };
    }

    return {
      value: Math.sqrt(num),
      error: "",
    };
  }
}

// testing
const calculator = new BasicCalculator();

console.log(calculator.add(9,10));
console.log(calculator.divide(7,0));
console.log(calculator.subtract(3,5));
console.log(calculator.power(2,3));
console.log(calculator.sqrt(-4));