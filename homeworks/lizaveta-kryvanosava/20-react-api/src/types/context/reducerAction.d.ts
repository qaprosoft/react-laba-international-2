import constants from '@/constants';

import IToDo from '../toDo';

export default interface ITodoAction {
  type: constants.Actions;
  payload: IPayload;
}

interface IPayload {
  newToDoValue?: IToDo['value'];
  toDos?: IToDo[];
  todoItemId?: IToDo['id'];
}
