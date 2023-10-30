import {v4 as uuidV4} from 'uuid';
import {checkTodoExist, updateSingleTodo} from '../services/todos';
import {TodosAction, State, Todo} from '../common/types';

const todosReducer = (todos: State<Todo[]>, action: TodosAction) => {
  switch (action.type) {
    case 'added': {
      try {
        checkTodoExist(todos.data, action.task);

        const newTodo = {
          id: uuidV4(),
          isCompleted: false,
          task: action.task,
        };
        return {
          data: [newTodo, ...todos.data],
          error: '',
        };
      } catch (error) {
        return {
          data: [...todos.data],
          error: (error as Error).message,
        };
      }
    }

    case 'edited': {
      try {
        checkTodoExist(todos.data, action.task);
        const newTodos = updateSingleTodo(todos.data, action.id, {
          task: action.task,
        });
        return {
          data: newTodos,
          error: '',
        };
      } catch (error) {
        return {
          data: [...todos.data],
          error: (error as Error).message,
        };
      }
    }

    case 'toggled': {
      const newTodos = updateSingleTodo(todos.data, action.id, {
        isCompleted: action.isCompleted,
      });
      return {
        data: newTodos,
        error: '',
      };
    }

    case 'deleted': {
      const newTodos = todos.data.filter(todo => todo.id !== action.id);
      return {
        data: newTodos,
        error: '',
      };
    }

    default:
      return {
        data: todos.data,
        error: 'Unrecognized action type',
      };
  }
};

export default todosReducer;
