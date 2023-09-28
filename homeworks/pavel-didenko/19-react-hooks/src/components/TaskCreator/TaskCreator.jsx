import React from 'react';
import './taskCreator.css';
import {useRef, useState} from 'react';

const TaskCreator = ({createTask}) => {
  const addTaskInput = useRef(null);
  const [opacity, setOpacity] = useState(0);

  function taskLengthHandler(minLength, maxLength, callback, taskText) {
    const taskLength = addTaskInput.current.value.length;
    if (taskLength >= minLength && taskLength <= maxLength) {
      callback(taskText);
      if (opacity === 1) {
        setOpacity(0);
      }
    } else {
      setOpacity(1);
    }
  }

  return (
    <div className="task-creator-wrapper">
      <div>
        <input ref={addTaskInput} placeholder="Create-Todo-Task"></input>
        <p className="task-creator__warning" style={{opacity: opacity}}>
          Task length must be from 0 to 33 characters
        </p>
      </div>
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
