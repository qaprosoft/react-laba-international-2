import IResult from './result';

type baseOperation = (num1: number, num2: number) => IResult;
type squareRoot = (num: number) => IResult;

export default interface ICalculator {
  add: baseOperation;
  subtract: baseOperation;
  multiply: baseOperation;
  divide: baseOperation;
  power: baseOperation;
  sqrt: squareRoot;
}
