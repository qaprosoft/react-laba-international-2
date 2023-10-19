import {useState} from 'react';
import {v4 as uuidV4} from 'uuid';
import {Todo} from './common/types';
import CreateTaskForm from './components/CreateTaskForm';
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAddTodo = (task: string) => {
    const newTodo = {
      id: uuidV4(),
      isCompleted: false,
      task,
    };
    setTodos(prevTodos => [newTodo, ...prevTodos]);
  };

  return (
    <div className="container">
      <CreateTaskForm onAddTodo={handleAddTodo} />
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
