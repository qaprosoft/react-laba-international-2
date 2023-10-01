import React, { useState} from 'react';
import modifyIcon from '../../assets/img/icons/write.svg';
import removeIcon from '../../assets/img/icons/delete.svg';
import completeIcon from '../../assets/img/icons/task-complete.svg';
import './task.css';
import IconButton from '../IconButton/IconButton';
import incompleteIcon from '../../assets/img/icons/task-incomplete.svg'

const taskCompletedStyles = {
  textDecoration: 'line-through',
  color: 'green',
};

const Task = ({
  taskText,
  modifyTasks,
  id,
  removeTask,
  completed,
  setCompletedTask,
}) => {
  const [disabledModification, setDisabledModification] = useState(true);
  const [opacity, setOpacity] = useState(0);
  const [task, setTask] = useState(taskText);

  function modifyTaskHandler(newTaskText) {
    if (disabledModification) {
      setDisabledModification(false);
    } else {
      setDisabledModification(true);
      modifyTasks(id, newTaskText);
    }
  }

  function taskLengthValidator(task, minLength, maxLength) {
    if(task.length >= minLength && task.length <= maxLength) {
      modifyTaskHandler(task);
    } else {
      if(opacity === 0){
        setOpacity(1);
      }
    }
  }

  return (
    <div className="task">
      <div className="task__inputs-wrapper">
        <input
          className="task__input"
          defaultValue={taskText}
          disabled={disabledModification}
          style={completed ? taskCompletedStyles : {}}
          onKeyUp={e => {
            if (e.key === 'Enter') {
              taskLengthValidator(task, 1, 33);
            }
          }}
          onChange={e => {
            setTask(e.target.value);
          }}
        ></input>
        <IconButton
          src={modifyIcon}
          alt="Modify task"
          clickHandler={() => taskLengthValidator(task, 1, 33)}
        />
        {/* <img
          className="task__icon"
          src={modifyIcon}
          alt="Modify task"
          onClick={() => taskLengthValidator(task, 1, 33)}
        /> */}
        <IconButton
          src={removeIcon}
          alt="Remove task"
          clickHandler={() => removeTask(id)}
        />
        {/* <img
          className="task__icon"
          src={removeIcon}
          alt="Remove task"
          onClick={() => removeTask(id)}
        /> */}
        <IconButton
          src={completed? completeIcon: incompleteIcon}
          alt="Complete icon"
          clickHandler={() => setCompletedTask(id)}
        />
        {/* <img
          className="task__icon"
          src={completeIcon}
          alt="Complete icon"
          onClick={() => setCompletedTask(id)}
        /> */}
      </div>
      <p className="task-creator__warning" style={{opacity: opacity}}>
        Task length must be from 1 to 33 characters
      </p>
    </div>
  );
};

export default Task;
