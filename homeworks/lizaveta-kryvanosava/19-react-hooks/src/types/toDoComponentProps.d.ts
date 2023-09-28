import IToDo from './toDo';

export default interface IToDoProps {
  toDoData: IToDo;
  deleteToDo: (id: string) => void;
  editToDo: <T extends keyof IToDo>(
    id: string,
    newValue: IToDo[T],
    keyToChange: T,
  ) => void;
}
