import { v4 as uuidv4 } from 'uuid';

import constants from '@/constants';
import ITodoAction from '@/types/context/reducerAction';
import IState from '@/types/context/state';

const toDoReducer = (state: IState, action: ITodoAction) => {
  const { type, payload } = action;
  const { newToDoValue, toDos, todoItemId } = payload;

  switch (type) {
    case constants.Actions.SET_TODOS: {
      return {
        toDos: [
          ...toDos!.map(toDO => {
            return { ...toDO, editMode: false };
          }),
        ],
      };
    }

    case constants.Actions.ADD_TODO_ITEM: {
      return {
        toDos: [
          ...state.toDos,
          { value: newToDoValue, done: false, id: uuidv4(), editMode: false },
        ],
      };
    }

    case constants.Actions.REMOVE_TODO_ITEM: {
      return {
        toDos: [...state.toDos.filter(toDo => toDo.id !== todoItemId)],
      };
    }

    case constants.Actions.EDIT_TODO_ITEM: {
      return {
        toDos: [
          ...state.toDos.map(toDo =>
            toDo.id === todoItemId ? { ...toDo, value: newToDoValue } : toDo,
          ),
        ],
      };
    }

    case constants.Actions.TOGGLE_DONE: {
      return {
        toDos: [
          ...state.toDos.map(toDo =>
            toDo.id === todoItemId ? { ...toDo, done: !toDo.done } : toDo,
          ),
        ],
      };
    }

    case constants.Actions.SET_EDIT_MODE: {
      return {
        toDos: [
          ...state.toDos.map(toDo =>
            toDo.id === todoItemId
              ? { ...toDo, editMode: !toDo.editMode }
              : { ...toDo, editMode: false },
          ),
        ],
      };
    }

    default:
      return state;
  }
};

export default toDoReducer;
