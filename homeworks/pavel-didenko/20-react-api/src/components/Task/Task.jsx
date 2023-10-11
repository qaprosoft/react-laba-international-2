import React, {useState, useContext, useRef, useEffect} from 'react';
import modifyIcon from '../../assets/img/icons/write.svg';
import removeIcon from '../../assets/img/icons/delete.svg';
import completeIcon from '../../assets/img/icons/task-complete.svg';
import incompleteIcon from '../../assets/img/icons/task-incomplete.svg';
import './task.css';
import {MainContext} from '../../contexts/mainContext';
import useTaskEditValidator from '../../hooks/useTaskEditValidator';
import {taskLengthMessage} from '../../variables/errorMessages';
import IconButton from '../IconButton/IconButton';

const taskCompletedStyles = {
  textDecoration: 'line-through',
  color: 'green',
};

const Task = ({taskText, id, completed}) => {
  const [disabledModification, setDisabledModification] = useState(true);
  const {modifyTasks, removeTask, setCompletedTask} = useContext(MainContext);
  const [newTaskText, setNewTaskText] = useState(taskText);
  const {opacity, unique} = useTaskEditValidator(newTaskText, 1, 33);
  const taskInput = useRef(null);

  useEffect(() => {
    if (!disabledModification) taskInput.current.focus();
  }, [disabledModification]);

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
          ref={taskInput}
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
        <IconButton
          src={modifyIcon}
          clickHandler={() => {
            if (opacity === 0 && unique) modifyTaskHandler(newTaskText);
          }}
          alt="Modify task"
        />
        <IconButton
          src={removeIcon}
          clickHandler={() => removeTask(id)}
          alt="Remove task"
        />
        <IconButton
          src={completed ? completeIcon : incompleteIcon}
          clickHandler={() => setCompletedTask(id)}
          alt="Complete icon"
        />
      </div>
      <p className="task-creator__warning" style={{opacity: opacity}}>
        {taskLengthMessage}
      </p>
    </div>
  );
};

export default Task;
