import IToDo from '@/types/toDo';

export default interface IContext {
  toDos: IToDo[];
  setToDos: (toDos: IToDo[]) => void;
  addTodoItem: (newToDoValue: string) => void;
  removeTodoItem: (todoItemId: string) => void;
  editTodoItem: (todoItemId: string, newValue: string) => void;
  toggleDone: (todoItemId: string) => void;
  setEditMode: (todoItemId: string) => void;
}
