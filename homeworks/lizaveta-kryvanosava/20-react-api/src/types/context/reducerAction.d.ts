import constants from '@/constants';

import IToDo from '../toDo';

export default interface ITodoAction {
  type: constants.Actions;
  payload: IPayload;
}

interface IPayload {
  newToDoValue: string;
  toDos: IToDo[];
  todoItemId: string;
}
