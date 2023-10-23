import React from 'react';
import TaskList from './components/TaskList/TaskList';
import AddTaskComponent from './components/AddTaskComponent/AddTaskComponent';
import {TaskProvider} from './context/Context';
import ActionButtons from './components/ActionButton/ActionButtons';

function App() {
  return (
    <TaskProvider>
      <div className="wrapper">
        <AddTaskComponent />
        <ActionButtons />
        <TaskList />
      </div>
    </TaskProvider>
  );
}

export default App;
