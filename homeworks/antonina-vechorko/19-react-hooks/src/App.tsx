import React, {useState, useContext} from 'react';
import TaskList from './components/TaskList/TaskList';
import AddTaskComponent from './components/AddTaskComponent/AddTaskComponent';
import {TaskProvider} from './context/Context';
import ActionButtons from './components/ActionButton/ActionButtons';

function App() {
  return (
    <TaskProvider>
      <AddTaskComponent />
      <ActionButtons />
      <TaskList />
    </TaskProvider>
  );
}

export default App;
