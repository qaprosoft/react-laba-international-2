import './styles.scss';

// add(num1: number, num2: number): Result
// subtract(num1: number, num2: number): Result
// multiply(num1: number, num2: number): Result
// divide(num1: number, num2: number): Result
// power(base: number, exponent: number): Result
// sqrt(num: number): Result

type MethodReturnType = {
  value: number | null;
  errorMessage: string;
};

interface ICalculator {
  add: (num1: number, num2: number) => MethodReturnType;
  subtract: (num1: number, num2: number) => MethodReturnType;
  multiply: (num1: number, num2: number) => MethodReturnType;
  divide: (num1: number, num2: number) => MethodReturnType;
  power: (base: number, exponent: number) => MethodReturnType;
  sqrt: (num: number) => MethodReturnType;
}

class BasicCalculator implements ICalculator {
  add(num1: number, num2: number) {
    return {value: num1 + num2, errorMessage: ''};
  }
  subtract(num1: number, num2: number) {
    return {value: num1 - num2, errorMessage: ''};
  }
  multiply(num1: number, num2: number) {
    return {value: num1 * num2, errorMessage: ''};
  }
  divide(num1: number, num2: number) {
    return {value: num1 / num2, errorMessage: ''};
  }
  power(base: number, exponent: number) {
    if (exponent < 1)
      return {value: null, errorMessage: 'Exponent must be a positive integer'};
    return {value: Math.pow(base, exponent), errorMessage: ''};
  }
  sqrt(num: number) {
    if (num < 0)
      return {
        value: null,
        errorMessage: 'Cannot calculate square root of negative number',
      };
    return {value: num * num, errorMessage: ''};
  }
}

const basicCalculator = new BasicCalculator();

// console.log(basicCalculator.add(2, 3))
// console.log(basicCalculator.subtract(2, -3))
// console.log(basicCalculator.multiply(2, 3))
// console.log(basicCalculator.divide(10, 2))
// console.log(basicCalculator.power(2, -3))
// console.log(basicCalculator.power(2, -3))
// console.log(basicCalculator.sqrt(2))
// console.log(basicCalculator.sqrt(-7))

const dipsplay = document.getElementById('display') as HTMLInputElement | null;
const numbers = document.querySelectorAll(
  '.number',
) as NodeListOf<HTMLDivElement> | null;
const decimal = document.getElementById('decimal') as HTMLDivElement | null;
const deleteAll = document.getElementById('clear-all') as HTMLDivElement | null;
const deleteLast = document.getElementById(
  'clear-last',
) as HTMLDivElement | null;
const operations = document.querySelectorAll(
  '.function',
) as NodeListOf<HTMLDivElement> | null;
const powOperation = document.getElementById('pow') as HTMLDivElement | null;
const result = document.getElementById('result') as HTMLDivElement | null;
const error = document.getElementById('error') as HTMLDivElement | null;
const minus = document.getElementById('minus') as HTMLDivElement | null;

let firstNum: null | string = null;
let operation: null | string = null;

minus.addEventListener('click', e => {
  if (dipsplay.value === '0') {
    dipsplay.value = '-';
  }
});

numbers.forEach(numberBtn => {
  numberBtn.addEventListener('click', () => {
    if (dipsplay.value !== '0') {
      dipsplay.value = dipsplay.value + numberBtn.textContent;
    } else {
      dipsplay.value = numberBtn.textContent;
    }
  });
});

decimal.addEventListener('click', e => {
  if (!dipsplay.value.includes('.')) {
    dipsplay.value = dipsplay.value + '.';
  }
});

deleteAll.addEventListener('click', e => {
  dipsplay.value = '0';
  firstNum = null;
  operation = null;
});

deleteLast.addEventListener('click', e => {
  if (dipsplay.value.length > 1) {
    dipsplay.value = dipsplay.value.substring(0, dipsplay.value.length - 1);
  } else {
    dipsplay.value = '0';
  }
});

operations.forEach(op => {
  if (op.textContent !== '^2' && op.textContent !== '=') {
    op.addEventListener('click', () => {
      if (dipsplay.value !== '0' && op.textContent !== '-') {
        firstNum = dipsplay.value;
        dipsplay.value = '0';
        operation = op.textContent;
      }
    });
  }
});

powOperation.addEventListener('click', e => {
  if (+dipsplay.value < 0) {
    error.textContent = '* Cannot calculate square root of negative number';
    error.style.display = 'static';
  } else {
    error.style.display = 'none';
    dipsplay.value = basicCalculator.sqrt(+dipsplay.value).value.toString();
  }
});

result.addEventListener('click', e => {
  switch (operation) {
    case '/':
      error.style.display = 'none';
      dipsplay.value = basicCalculator
        .divide(+firstNum, +dipsplay.value)
        .value.toString();
      firstNum = null;
      operation = null;
      break;
    case '*':
      error.style.display = 'none';
      dipsplay.value = basicCalculator
        .multiply(+firstNum, +dipsplay.value)
        .value.toString();
      firstNum = null;
      operation = null;
      break;
    case '+':
      error.style.display = 'none';
      dipsplay.value = basicCalculator
        .add(+firstNum, +dipsplay.value)
        .value.toString();
      firstNum = null;
      operation = null;
      break;
    case '-':
      if (dipsplay.value !== '0') {
        error.style.display = 'none';
        dipsplay.value = basicCalculator
          .subtract(+firstNum, +dipsplay.value)
          .value.toString();
        firstNum = null;
        operation = null;
      }
      break;
    case '^':
      if (+dipsplay.value < 1) {
        error.textContent = '* Exponent must be a positive integer';
        error.style.display = 'static';
        break;
      } else {
        error.style.display = 'none';
        dipsplay.value = basicCalculator
          .power(+firstNum, +dipsplay.value)
          .value.toString();
        firstNum = null;
        operation = null;
        break;
      }
  }
});
