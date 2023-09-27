import './App.css';
import TaskCreator from './components/TaskCreator/TaskCreator';
import TasksSection from './components/TasksSection/TasksSection';

function App() {
  return <div className="main-container">
    <TaskCreator />
    <TasksSection />
  </div>;
}

export default App;
