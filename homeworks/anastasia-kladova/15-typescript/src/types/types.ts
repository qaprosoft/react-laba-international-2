export type BaseOperation = (num1: number, num2: number) => IResult;
export type SqrtOperation = (num: number) => IResult;

export interface IResult {
  value: number | null;
  errorMessage: string;
}

export interface ICalculator {
  add: BaseOperation;
  subtract: BaseOperation;
  multiply: BaseOperation;
  divide: BaseOperation;
  power: BaseOperation;
  sqrt: SqrtOperation;
}
