import React, {useRef, useState} from 'react';
import modifyIcon from '../../assets/img/icons/write.svg';
import removeIcon from '../../assets/img/icons/delete.svg';
import completeIcon from '../../assets/img/icons/task-complete.svg';
import './task.css';

const taskCompletedStyles = {
  textDecoration: 'line-through',
  color: 'green',
};

const Task = ({
  taskText,
  modifyTasks,
  index,
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
      modifyTasks(index, newTaskText);
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
    <div className="task" onClick={e => e.stopPropagation()}>
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
          onChange={(e) => {
            setTask(e.target.value);
          }}
        ></input>
        <img
          className="task__icon"
          src={modifyIcon}
          alt="Modify task"
          onClick={() => taskLengthValidator(task, 1, 33)}
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
