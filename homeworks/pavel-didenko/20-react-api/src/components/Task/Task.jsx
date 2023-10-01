import React, { useState, useContext} from 'react';
import modifyIcon from '../../assets/img/icons/write.svg';
import removeIcon from '../../assets/img/icons/delete.svg';
import completeIcon from '../../assets/img/icons/task-complete.svg';
import './task.css';
import {MainContext} from '../../contexts/mainContext';
import useTaskEditValidator from '../../hooks/useTaskEditValidator';
import { taskLengthMessage } from '../../variables/errorMessages';

const taskCompletedStyles = {
  textDecoration: 'line-through',
  color: 'green',
};

const Task = ({taskText, id, completed, state}) => {
  const [disabledModification, setDisabledModification] = useState(true);
  const {modifyTasks, removeTask, setCompletedTask} = useContext(MainContext);
  const [newTaskText, setNewTaskText] = useState(taskText);
  const {opacity, unique} = useTaskEditValidator(newTaskText, 1, 33);


  

  function modifyTaskHandler(newTaskText) {
    if (disabledModification) {
      setDisabledModification(false);
    } else {
      setDisabledModification(true);
      modifyTasks(id, newTaskText);
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
            if (e.key === 'Enter' && opacity === 0) {
              modifyTaskHandler(newTaskText);
            }
          }}
        ></input>
        <img
          className="task__icon"
          src={modifyIcon}
          alt="Modify task"
          onClick={() => {
            if (opacity === 0 && unique) {
              modifyTaskHandler(newTaskText);
            }
          }}
        />
        <img
          className="task__icon"
          src={removeIcon}
          alt="Remove task"
          onClick={() => removeTask(id)}
        />
        <img
          className="task__icon"
          src={completeIcon}
          alt="Complete icon"
          onClick={() => setCompletedTask(id)}
        />
      </div>
      <p className="task-creator__warning" style={{opacity: opacity}}>
        {taskLengthMessage}
      </p>
    </div>
  );
};

export default Task;
