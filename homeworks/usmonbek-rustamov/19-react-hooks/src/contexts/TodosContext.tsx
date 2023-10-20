import {ReactNode, createContext, useContext} from 'react';
import {v4 as uuidV4} from 'uuid';
import {Todo} from '../common/types';
import {checkTodoExist} from '../services/todos';
import useLocalStorage from '../hooks/useLocalStorage';

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
  const [todos, setTodos] = useLocalStorage<Todo[]>('todo-app.todos', []);

  const updateTodo = (id: string, props: Partial<Todo>) => {
    setTodos(prevTodos => {
      return prevTodos.map(todo => {
        if (todo.id === id) {
          return {...todo, ...props};
        }
        return todo;
      });
    });
  };

  const onAddTodo = (task: string) => {
    checkTodoExist(todos, task);

    const newTodo = {
      id: uuidV4(),
      isCompleted: false,
      task,
    };
    setTodos(prevTodos => [newTodo, ...prevTodos]);
  };

  const onEditTodo = (id: string, task: string) => {
    checkTodoExist(todos, task);
    updateTodo(id, {task});
  };

  const onToggleTodo = (id: string, isCompleted: boolean) => {
    updateTodo(id, {isCompleted});
  };

  const onDeleteTodo = (id: string) => {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
  };

  return (
    <TodosContext.Provider
      value={{
        todos,
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
