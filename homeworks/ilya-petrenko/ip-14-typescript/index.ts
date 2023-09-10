interface IResult {
  value: number;
  error: string;
}

interface ICalculator {
  add(num1: number, num2: number): IResult;
  subtract(num1: number, num2: number): IResult;
  multiply(num1: number, num2: number): IResult;
  divide(num1: number, num2: number): IResult;
  power(base: number, exponent: number): IResult;
  sqrt(num: number): IResult;
}

class BasicCalculator implements ICalculator {
  add(num1: number, num2: number): IResult {
    const value = num1 + num2;
    return {value, error: ''};
  }

  subtract(num1: number, num2: number): IResult {
    const value = num1 - num2;
    return {value, error: ''};
  }

  multiply(num1: number, num2: number): IResult {
    const value = num1 * num2;
    return {value, error: ''};
  }

  divide(num1: number, num2: number): IResult {
    if (num2 === 0) {
      return {value: 0, error: 'Error: division by zero'};
    }
    const value = num1 / num2;
    return {value, error: ''};
  }

  power(num1: number, num2: number): IResult {
    if (num2 <= 0 || !Number.isInteger(num2)) {
      return {value: 0, error: 'Error: exponent must be a positive integer'};
    }
    const value = Math.pow(num1, num2);
    return {value, error: ''};
  }

  sqrt(num: number): IResult {
    if (num < 0) {
      return {
        value: 0,
        error: 'Error: cannot calculate the square of negative number',
      };
    }
    const value = Math.sqrt(num);
    return {value, error: ''};
  }
}

const calculator = new BasicCalculator();

console.log(calculator.add(5, 3)); // 8
console.log(calculator.divide(10, 0)); // Error: division by zero
console.log(calculator.power(2, 3)); // 8
console.log(calculator.sqrt(-4)); // Error: cannot calculate the square of negative number
