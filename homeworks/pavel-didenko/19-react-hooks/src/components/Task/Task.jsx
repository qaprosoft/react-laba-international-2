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
  const taskField = useRef(null);

  function modifyTaskHandler(newTaskText) {
    if (disabledModification) {
      setDisabledModification(false);
    } else {
      setDisabledModification(true);
      modifyTasks(index, newTaskText);
    }
  }

  function taskLengthValidator(task, minLength, maxLength) {
    if(task.length > minLength && task.length <= maxLength) {
      modifyTaskHandler(task);
    } else {
      modifyTaskHandler(
        `Task length must be from ${minLength} to ${maxLength} chars`,
      );
    }
  }

  return (
    <div className="task" onClick={e => e.stopPropagation()}>
      <input
        className="task__input"
        defaultValue={taskText}
        disabled={disabledModification}
        ref={taskField}
        style={completed ? taskCompletedStyles : {}}
        onKeyUp={e => {
          if (e.key === 'Enter') {
            taskLengthValidator(taskField.current.value, 1, 33);
          }
        }}
      ></input>
      <img
        className="task__icon"
        src={modifyIcon}
        alt="Modify task"
        onClick={() => taskLengthValidator(taskField.current.value, 1, 33)}
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
  );
};

export default Task;
