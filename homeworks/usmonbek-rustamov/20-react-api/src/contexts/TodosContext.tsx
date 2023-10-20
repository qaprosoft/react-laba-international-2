import {ReactNode, createContext, useContext} from 'react';
import {TodosAction, Todo} from '../common/types';
import useLocalStorage from '../hooks/useLocalStorage';
import todosReducer from '../reducers/todosReducer';

interface ContextProps {
  todos: Todo[];
  onAddTodo: (task: string) => void;
  onEditTodo: (id: string, task: string) => void;
  onToggleTodo: (id: string, isCompleted: boolean) => void;
  onDeleteTodo: (id: string) => void;
}

interface ProviderProps {
  children: ReactNode;
}

const TodosContext = createContext({} as ContextProps);

const TodosProvider = ({children}: ProviderProps) => {
  const [state, dispatch] = useLocalStorage<Todo[], TodosAction>(
    'todo-app.todos',
    {data: [], error: ''},
    todosReducer,
  );

  const onAddTodo = (task: string) => {
    const action = {type: 'added', task} as TodosAction;
    const nextState = todosReducer(state, action);
    if (nextState.error) {
      throw new Error(nextState.error);
    }
    dispatch(action);
  };

  const onEditTodo = (id: string, task: string) => {
    const action = {type: 'edited', id, task} as TodosAction;
    const nextState = todosReducer(state, action);
    if (nextState.error) {
      throw new Error(nextState.error);
    }
    dispatch(action);
  };

  const onToggleTodo = (id: string, isCompleted: boolean) => {
    dispatch({type: 'toggled', id, isCompleted});
  };

  const onDeleteTodo = (id: string) => {
    dispatch({type: 'deleted', id});
  };

  return (
    <TodosContext.Provider
      value={{
        todos: state.data,
        onAddTodo,
        onEditTodo,
        onToggleTodo,
        onDeleteTodo,
      }}
    >
      {children}
    </TodosContext.Provider>
  );
};

const useTodos = () => {
  return useContext(TodosContext);
};

export {TodosProvider, useTodos};
