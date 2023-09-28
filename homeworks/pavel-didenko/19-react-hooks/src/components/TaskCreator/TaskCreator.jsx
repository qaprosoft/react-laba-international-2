import React from 'react';
import './taskCreator.css';
import {useState, useRef} from 'react';

const TaskCreator = ({setTasks}) => {
  const addTaskInput = useRef(null);

  function clickHandler(){
    setTasks(tasks => [
      ...tasks,
      {id: Date.now(), taskText: addTaskInput.current.value},
    ]);
  }

  return (
    <div className="task-creator-wrapper">
      <input ref={addTaskInput}></input>
      <button className="add-task-button" onClick={clickHandler}>
        Add
      </button>
    </div>
  );
};

export default TaskCreator;
