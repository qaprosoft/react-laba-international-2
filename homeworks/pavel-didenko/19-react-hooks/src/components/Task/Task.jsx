import React, { useRef, useState} from 'react';
import modifyIcon from '../../assets/img/icons/write.svg';
import removeIcon from '../../assets/img/icons/delete.svg';
import './task.css';

const Task = ({taskText, modifyTasks, index, removeTask}) => {
  const [disabledModification, setDisabledModification] = useState(true);
  const taskField = useRef(null);

  function modifyTaskHandler() {
    if (disabledModification) {
      setDisabledModification(false);
    } else {
      setDisabledModification(true);
      modifyTasks(index, taskField.current.value);
    }
  }

  return (
    <div className="task" onClick={e => e.stopPropagation()}>
      <input
        className="task__input"
        defaultValue={taskText}
        disabled={disabledModification}
        ref={taskField}
        onKeyUp={e => {
          if (e.key === 'Enter') {
            modifyTaskHandler();
          }
        }}
      ></input>
      <img
        className="task__icon"
        src={modifyIcon}
        alt="Modify task"
        onClick={modifyTaskHandler}
      />
      <img
        className="task__icon"
        src={removeIcon}
        alt="Remove task"
        onClick={() => removeTask(index)}
      />
    </div>
  );
};

export default Task;
