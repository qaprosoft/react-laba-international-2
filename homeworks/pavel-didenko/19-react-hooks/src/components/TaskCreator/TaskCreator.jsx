import React from 'react';
import './taskCreator.css';
import { useRef } from 'react';

const TaskCreator = ({createTask}) => {
  const addTaskInput = useRef(null);

  return (
    <div className="task-creator-wrapper">
      <input ref={addTaskInput}></input>
      <button
        className="add-task-button"
        onClick={() => createTask(addTaskInput.current.value)}
      >
        Add
      </button>
    </div>
  );
};

export default TaskCreator;
