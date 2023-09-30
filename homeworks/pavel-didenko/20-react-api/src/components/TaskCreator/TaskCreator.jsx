import React, {useEffect, useMemo} from 'react';
import './taskCreator.css';
import {useRef, useState, useContext} from 'react';
import {MainContext} from '../../contexts/mainContext';
import useLengthHandler from '../../hooks/useLengthHandler';

const taskExistsMessage = 'The task already exists';
const taskLengthMessage = 'Task length must be from 0 to 33 characters';

const TaskCreator = ({state}) => {
  const addTaskInput = useRef(null);
  // const [opacity, setOpacity] = useState(0);
  // const [taskExists, setTaskExists] = useState(false);
  const [taskText, setTastText] = useState('');
  const {createTask} = useContext(MainContext);


  const {taskExists, opacity, result} = useLengthHandler(1, 33, taskText, state);

  // function taskLengthHandler(minLength, maxLength, createTask, taskText) {
  //   const taskLength = taskText.length;
  //   if (!validateDublicatedTask(taskText)) {
  //     setTaskExists(true);
  //     setOpacity(1);
  //     addTaskInput.current.focus();
  //     return;
  //   }
  //   if (taskLength >= minLength && taskLength <= maxLength) {
  //     createTask(taskText);
  //     addTaskInput.current.focus();
  //     if (opacity === 1) {
  //       setOpacity(0);
  //     }

  //   } else {
  //     setTaskExists(false);
  //     setOpacity(1);
  //     addTaskInput.current.focus();
  //   }
  // }

  return (
    <div className="task-creator-wrapper">
      <div>
        <input
          ref={addTaskInput}
          placeholder="Create-Todo-Task"
          onChange={e => {
            setTastText(e.target.value);
          }}
        ></input>
        <p className="task-creator__warning" style={{opacity: opacity}}>
          {taskExists ? taskExistsMessage : taskLengthMessage}
        </p>
      </div>
      <button
        className="add-task-button"
        onClick={() => {
          if (result) createTask(taskText);
          addTaskInput.current.focus();
        }}
      >
        Add
      </button>
    </div>
  );
};

export default TaskCreator;
