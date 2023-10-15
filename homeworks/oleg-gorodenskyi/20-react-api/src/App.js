import './App.css';

import ToDoProvider from './store/ToDoProvider';
import ToDoItemsList from './components/ToDoItemsList';
import Form from './components/Form';

function App() {
  return (
    <ToDoProvider>
      <div className="App">
        <Form />
        <ToDoItemsList />
      </div>
    </ToDoProvider>
  );
}

export default App;
