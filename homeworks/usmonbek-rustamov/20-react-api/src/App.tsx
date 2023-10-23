import {TodosProvider} from './contexts/TodosContext';
import CreateTaskForm from './components/CreateTaskForm';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="container">
      <TodosProvider>
        <CreateTaskForm />
        <TodoList />
      </TodosProvider>
    </div>
  );
}

export default App;
