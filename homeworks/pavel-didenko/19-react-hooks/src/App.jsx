import './App.css';
import Task from './components/Task/Task';
import TaskCreator from './components/TaskCreator/TaskCreator';
import { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState({});
  return (
    <div className="main-container">
      <TaskCreator setTasks={setTasks} />
      <div className="tasks-section">
        <Task />
      </div>
    </div>
  );
}

export default App;
