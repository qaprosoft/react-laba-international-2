import React from 'react';
import './taskCreator.css';
import {useState, useRef} from 'react';

const TaskCreator = ({setTasks}) => {
  const addTaskButton = useRef(null);

  function clickHandler(){
    setTasks(tasks => [...tasks, addTaskButton.current.value]);
  }

  return (
    <div className="task-creator-wrapper">
      <input ref={addTaskButton}></input>
      <button className="add-task-button" onClick={clickHandler}>
        Add
      </button>
    </div>
  );
};

export default TaskCreator;
