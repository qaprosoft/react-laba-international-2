import React from 'react';
import './taskCreator.css';
import {useRef, useState} from 'react';

const taskExistsMessage = 'The task already exists';
const taskLengthMessage = "Task length must be from 0 to 33 characters";

const TaskCreator = ({createTask, tasks}) => {
  const addTaskInput = useRef(null);
  const [opacity, setOpacity] = useState(0);
  const [taskExists, setTaskExists] = useState(false);

  function taskLengthHandler(minLength, maxLength, callback, taskText) {
    const taskLength = taskText.length;
    if (!validateDublicatedTask(taskText)) {
      setTaskExists(true);
      setOpacity(1);
      addTaskInput.current.focus();
      return;
    }
    if (taskLength >= minLength && taskLength <= maxLength) {
      callback(taskText);
      addTaskInput.current.focus();
      if (opacity === 1) {
        setOpacity(0);
      }

    } else {
      setTaskExists(false);
      setOpacity(1);
      addTaskInput.current.focus();
    }
  }

  function validateDublicatedTask(task) {
    let result = true;

    for (let item of tasks) {
      if (item.taskText === task) {
        result = false;
      }
    }

    return result;
  }

  return (
    <div className="task-creator-wrapper">
      <div>
        <input ref={addTaskInput} placeholder="Create-Todo-Task"></input>
        <p className="task-creator__warning" style={{opacity: opacity}}>
          {taskExists ? taskExistsMessage : taskLengthMessage}
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
