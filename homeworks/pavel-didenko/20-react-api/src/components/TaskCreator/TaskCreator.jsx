import './taskCreator.css';
import {useRef, useState, useContext} from 'react';
import {MainContext} from '../../contexts/mainContext';
import useTaskCreationValidator from '../../hooks/useTaskCreationValidator';
import { taskExistsMessage, taskLengthMessage } from '../../variables/errorMessages';


const TaskCreator = ({state}) => {
  const addTaskInput = useRef(null);
  const [taskText, setTastText] = useState('');
  const {createTask} = useContext(MainContext);



  const {taskExists, opacity, result} = useTaskCreationValidator(
    1,
    33,
    taskText,
    state,
  );

  return (
    <div className="task-creator-wrapper">
      <div>
        <input
          ref={addTaskInput}
          placeholder="Create-Todo-Task"
          onChange={e => {
            setTastText(e.target.value);
          }}
          onKeyUp={(e) => {
            if(e.key === "Enter" && result){
              createTask(taskText);
              addTaskInput.current.focus();
            }
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
          addTaskInput.current.value='';
          addTaskInput.current.focus();
        }}
      >
        Add
      </button>
    </div>
  );
};

export default TaskCreator;
