import IToDo from './toDo';

export default interface IToDoProps {
  toDoData: IToDo;
  deleteToDo: (id: IToDo['id']) => void;
  editToDo: <T extends keyof IToDo>(
    id: IToDo['id'],
    newValue: IToDo[T],
    keyToChange: T,
  ) => void;
  isInputValid: (newToDoValue: IToDo['value']) => boolean;
  setEditingId: (id: IToDo['id'] | null) => void;
  isEditing: boolean;
}
