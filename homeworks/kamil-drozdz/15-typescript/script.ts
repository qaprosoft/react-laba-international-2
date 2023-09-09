interface Result {
    value: number | null;
    error: string;
  }
  
interface Calculator {
  add(num1: number, num2: number): Result;
  substract(num1: number, num2: number): Result;
  multiply(num1: number, num2: number): Result;
  divide(num1: number, num2: number): Result;
  power(num1: number, num2: number): Result;
  sqrt(num1: number, num2: number): Result;
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
    return {
      value: num1 / num2,
      error: '',
    };
  }
  power(base: number, exponent: number): Result {
    return exponent >= 0
      ? {
          value: Math.pow(base, exponent),
          error: '',
        }
      : {
          value: null,
          error: 'Exponent must be a positive integer',
        };
  }
  sqrt(num1: number): Result {
    return num1 >= 0
      ? {
          value: Math.sqrt(num1),
          error: '',
        }
      : {
          value: null,
          error: 'Cannot calculate square root of negative number',
        };
  }
}
