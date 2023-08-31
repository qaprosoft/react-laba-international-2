interface IResult {
  error: string;
  value: number | null; //in case of erro result will be null(we return error msg in obj, not throw error)
}

interface ICalculator {
  add: (num1: number, num2: number) => IResult;
  subtract: (num1: number, num2: number) => IResult;
  multiply: (num1: number, num2: number) => IResult;
  divide: (num1: number, num2: number) => IResult;
  power: (base: number, exponent: number) => IResult;
  sqrt: (num: number) => IResult;
}

class Calculator implements ICalculator {
  result: IResult;

  constructor() {
    this.result = {
      error: '',
      value: null,
    };
  }

  private resetResult() {
    //only methods of this class(Calculator) can call this method
    this.result = {
      error: '',
      value: null,
    };
  }

  add(num1: number, num2: number) {
    //has public modificator as default
    this.resetResult();
    this.result.value = num1 + num2;
    return this.result;
  }

  subtract(num1: number, num2: number) {
    //has public modificator as default
    this.resetResult();
    this.result.value = num1 - num2;
    return this.result;
  }

  multiply(num1: number, num2: number) {
    //has public modificator as default
    this.resetResult();
    this.result.value = num1 * num2;
    return this.result;
  }

  divide(num1: number, num2: number) {
    //has public modificator as default
    this.resetResult();
    this.result.value = num1 / num2;
    return this.result;
  }

  power(base: number, exponent: number) {
    //has public modificator as default
    this.resetResult();
    if (exponent > 0 && Number.isInteger(exponent)) {
      this.result.value = Math.pow(base, exponent);
    } else {
      this.result.error = 'Exponent must be a positive integer';
    }
    return this.result;
  }

  sqrt(num: number) {
    //has public modificator as default
    this.resetResult();
    if (num >= 0) {
      this.result.value = Math.sqrt(num);
    } else {
      this.result.error = 'Cannot calculate square root of negative number';
    }
    return this.result;
  }
}

const calculator = new Calculator();

console.log(calculator.add(5, 9)); //14

console.log(calculator.subtract(5, 9)); //-4

console.log(calculator.multiply(5, 9)); //45

console.log(calculator.divide(16, 4)); //4

console.log(calculator.power(2, -4)); //Error
console.log(calculator.power(2, 4.2)); //Error
console.log(calculator.power(2.2, 4)); //23.425
console.log(calculator.power(2, -4.3)); //Error

console.log(calculator.sqrt(25)); //5
console.log(calculator.sqrt(0)); //0
console.log(calculator.sqrt(-25)); //Error
console.log(calculator.sqrt(2.5)); //1.58
