import IToDo from './toDo';

export default interface IToDoProps {
  taskData: IToDo;
  deleteToDo: (id: string) => void;
  editToDo: (
    id: string,
    newValue: string | boolean,
    keyToChange: keyof IToDo,
  ) => void;
}
