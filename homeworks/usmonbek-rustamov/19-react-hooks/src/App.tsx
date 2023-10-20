import {v4 as uuidV4} from 'uuid';
import {Todo} from './common/types';
import CreateTaskForm from './components/CreateTaskForm';
import TodoList from './components/TodoList';
import useLocalStorage from './hooks/useLocalStorage';
import {checkTodoExist} from './services/todos';

function App() {
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

  const handleAddTodo = (task: string) => {
    checkTodoExist(todos, task);

    const newTodo = {
      id: uuidV4(),
      isCompleted: false,
      task,
    };
    setTodos(prevTodos => [newTodo, ...prevTodos]);
  };

  const handleEditTodo = (id: string, task: string) => {
    checkTodoExist(todos, task);
    updateTodo(id, {task});
  };

  const handleToggleTodo = (id: string, isCompleted: boolean) => {
    updateTodo(id, {isCompleted});
  };

  const handleDeleteTodo = (id: string) => {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
  };

  return (
    <div className="container">
      <CreateTaskForm onAddTodo={handleAddTodo} />
      <TodoList
        todos={todos}
        onEdit={handleEditTodo}
        onDelete={handleDeleteTodo}
        onToggle={handleToggleTodo}
      />
    </div>
  );
}

export default App;
