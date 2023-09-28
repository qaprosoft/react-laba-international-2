import React from 'react';
import './taskCreator.css';
import {useRef} from 'react';

const TaskCreator = ({createTask}) => {
  const addTaskInput = useRef(null);

  function taskLengthHandler(minTaskLength, maxTaskLength, callback, taskText) {
    const taskLength = addTaskInput.current.value.length;
    if (taskLength >= minTaskLength && taskLength <= maxTaskLength) {
      callback(taskText);
    } else {
      alert(
        `Task length must be minimum ${minTaskLength} and maximum ${maxTaskLength}`,
      );
    }
  }

  return (
    <div className="task-creator-wrapper">
      <input ref={addTaskInput}></input>
      <button
        className="add-task-button"
        onClick={() =>
          taskLengthHandler(1, 33, createTask, addTaskInput.current.value)
        }
      >
        Add
      </button>
    </div>
  );
};

export default TaskCreator;
