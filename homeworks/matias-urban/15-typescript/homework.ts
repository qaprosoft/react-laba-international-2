interface Calculator {
    add(number1: number, number2: number): Result;
    substract(number1: number, number2: number): Result;
    multiply(number1: number, number2: number): Result;
    divide(number1: number, number2: number): Result;
    power(number1: number, number2: number): Result;
    sqrt(number1: number, number2: number): Result;
} 

class BasicCalculator implements Calculator {
    add(number1: number, number2: number): Result{
        const result = (number1 + number2)
        return new Result(result, "");
    } 
    substract(number1: number, number2: number): Result {
        const result = (number1 - number2)
        return new Result(result, "");
    }
    multiply(number1: number, number2: number): Result {
        const result = (number1 * number2)
        return new Result(result, "");
    }
    divide(number1: number, number2: number): Result {
        const result = (number1 / number2)
        return new Result(result, "");
    }
    power(number1: number, number2: number): Result {
        if (number1 >= 0 || number1 < 0 && (number2 % 2) == 0){
            const result = Math.pow(number1, number2);
            return new Result(result, "")
        }
        else return new Result (NaN, "Cannot calculate square root of negative number")
    }
    sqrt(number1: number): Result {
        const result = Math.sqrt(number1);
        if (result >= 0) return new Result(result, "");
        else return new Result (result, "Cannot calculate square root of negative number")
    }
}

class Result {
    result: number;
    errorMsg: string;
    constructor(number: number, str: string) {
        this.result = number;
        this.errorMsg = str;
    }
}
const calc = new BasicCalculator();
console.log(calc.add(2,3));
console.log(calc.substract(2,3));
console.log(calc.multiply(2,3));
console.log(calc.divide(2,3));
console.log(calc.power(2, 4));
console.log(calc.sqrt(9));
console.log(calc.power(-2, 3));
console.log(calc.sqrt(-5));