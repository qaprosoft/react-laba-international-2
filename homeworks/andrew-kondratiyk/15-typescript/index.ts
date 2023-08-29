interface ICalculator {
  add(num1: number, num2: number): IResult
  subtract(num1: number, num2: number): IResult
  multiply(num1: number, num2: number): IResult
  divide(num1: number, num2: number): IResult
  power(base: number, exponent: number): IResult
  sqrt(num: number): IResult
}

interface IResult {
  value: number | null;
  error: string;
}

class BasicCalculator implements ICalculator {
  add(num1: number, num2: number): IResult {
    return {
      value: num1 + num2,
      error: ''
    }
  }

  subtract(num1: number, num2: number): IResult {
    return {
      value: num1 - num2,
      error: ''
    }
  }

  multiply(num1: number, num2: number): IResult {
    return {
      value: num1 * num2,
      error: ''
    }
  }

  divide(num1: number, num2: number): IResult {
    if (num2 === 0) {
      return {
        value: null,
        error: 'Division by zero'
      }
    }
    return {
      value: num1 / num2,
      error: ''
    }
  }

  power(base: number, exponent: number): IResult {
    if (exponent < 0 || !Number.isInteger(exponent)) {
      return {
        value: null,
        error: 'Exponent must be a positive integer'
      }
    }
    return {
      value: +Math.pow(base, exponent).toFixed(2),
      error: ''
    }
  }

  sqrt(num: number): IResult {
    if (num < 0) {
      return {
        value: null,
        error: 'Cannot calculate square root of negative number'
      }
    }
    return {
      value: +Math.sqrt(num).toFixed(2),
      error: ''
    }
  }
}

const calculator = new BasicCalculator();

console.log(calculator.add(5, 9)); //14

console.log(calculator.subtract(5, 9)); //-4

console.log(calculator.multiply(5, 9)); //45

console.log(calculator.divide(16, 4)); //4
console.log(calculator.divide(7, 0)); //Error

console.log(calculator.power(2, -4)); //Error
console.log(calculator.power(2, 4.2)); //Error
console.log(calculator.power(2.2, 4)); //23.425
console.log(calculator.power(2, -4.3)); //Error

console.log(calculator.sqrt(25)); //5
console.log(calculator.sqrt(0)); //0
console.log(calculator.sqrt(-25)); //Error
console.log(calculator.sqrt(2.5)); //1.58