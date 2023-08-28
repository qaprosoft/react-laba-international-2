type BaseOperation = (num1: number, num2: number) => IResult;
type SqrtOperation = (num: number) => IResult;

interface IResult {
  value: number;
  error: string;
}

export interface ICalculator {
  add: BaseOperation;
  subtract: BaseOperation;
  multiply: BaseOperation;
  divide: BaseOperation;
  power: BaseOperation;
  sqrt: SqrtOperation;
}
