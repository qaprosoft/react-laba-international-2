import React, {useRef, useState, useContext} from 'react';
import modifyIcon from '../../assets/img/icons/write.svg';
import removeIcon from '../../assets/img/icons/delete.svg';
import completeIcon from '../../assets/img/icons/task-complete.svg';
import './task.css';
import {MainContext} from '../../contexts/mainContext';

const taskCompletedStyles = {
  textDecoration: 'line-through',
  color: 'green',
};

const Task = ({taskText, index, completed}) => {
  const [disabledModification, setDisabledModification] = useState(true);
  const [opacity, setOpacity] = useState(0);
  const [newTaskText, setNewTaskText] = useState(taskText);
  const {modifyTasks, removeTask, setCompletedTask} = useContext(MainContext);

  

  function modifyTaskHandler(newTaskText) {
    if (disabledModification) {
      setDisabledModification(false);
    } else {
      setDisabledModification(true);
      modifyTasks(index, newTaskText);
    }
  }

  function taskLengthValidator(task, minLength, maxLength) {
    if (task.length >= minLength && task.length <= maxLength) {
      modifyTaskHandler(task);
    } else {
      if (opacity === 0) {
        setOpacity(1);
      }
    }
  }

  return (
    <div className="task" onClick={e => e.stopPropagation()}>
      <div className="task__inputs-wrapper">
        <input
          className="task__input"
          defaultValue={taskText}
          disabled={disabledModification}
          style={completed ? taskCompletedStyles : {}}
          onChange={e => {
            setNewTaskText(e.target.value);
          }}
          onKeyUp={e => {
            if (e.key === 'Enter') {
              taskLengthValidator(newTaskText, 1, 33);
            }
          }}
        ></input>
        <img
          className="task__icon"
          src={modifyIcon}
          alt="Modify task"
          onClick={() => {
            taskLengthValidator(newTaskText, 1, 33);
          }}
        />
        <img
          className="task__icon"
          src={removeIcon}
          alt="Remove task"
          onClick={() => removeTask(index)}
        />
        <img
          className="task__icon"
          src={completeIcon}
          alt="Complete icon"
          onClick={() => setCompletedTask(index)}
        />
      </div>
      <p className="task-creator__warning" style={{opacity: opacity}}>
        Task length must be from 1 to 33 characters
      </p>
    </div>
  );
};

export default Task;
