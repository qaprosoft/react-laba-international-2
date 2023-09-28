import IToDo from './toDo';

export default interface IToDoProps {
  data: IToDo;
  deleteHandler: (id: string) => void;
  editHandler: (
    id: string,
    newValue: string | boolean,
    keyToChange: keyof IToDo,
  ) => void;
}
