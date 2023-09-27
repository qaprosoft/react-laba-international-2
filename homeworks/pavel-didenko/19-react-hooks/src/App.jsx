import './App.css';
import TaskCreator from './components/TaskCreator/TaskCreator';
import TasksSection from './components/TasksSection/TasksSection';
import { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState({});
  return <div className="main-container">
    <TaskCreator setTasks={setTasks}/>
    <TasksSection />
  </div>;
}

export default App;
