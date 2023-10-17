import {useRef, useState} from 'react';
import deleteIcon from '../assets/images/delete.svg';
import editIcon from '../assets/images/edit.svg';
import {useDispatch, useTasks} from '../context/TasksProvider';
import useInput from '../hooks/useInput';
import useTaskValidation from '../hooks/useTaskValidation';

export default function Task({task, isCompleted}) {
  const tasks = useTasks();
  const dispatch = useDispatch();
  const taskRef = useRef(null);
  const [inputEnabled, setInputEnabled] = useState(false);
  const [taskCompleted, setTaskCompleted] = useState(isCompleted);
  const [inputValue, setInputValue, handleChange] = useInput(task.text);
  const validateTask = useTaskValidation(tasks);

  const handleCompleteTask = () => {
    setTaskCompleted(!taskCompleted);
    dispatch({
      type: 'completed',
      id: task.id,
      isCompleted: !isCompleted,
    });
  };

  const handleEditTask = () => {
    setInputEnabled(true);
    taskRef.current.focus();
  };

  const handleSaveTask = () => {
    if (validateTask(inputValue)) {
      dispatch({type: 'edited', id: task.id, text: inputValue});
      setInputEnabled(false);
      return;
    }
  };

  const handleCancelEdit = () => {
    setInputEnabled(false);
    setInputValue(task.text);
  };

  const handleDeleteTask = () => {
    dispatch({type: 'deleted', id: task.id});
  };

  return (
    <div className="task">
      <div className="task__container">
        <input
          type="checkbox"
          className="task__checkbox"
          checked={taskCompleted}
          disabled={inputEnabled}
          onChange={handleCompleteTask}
        />
        <input
          type="text"
          className={`task__text ${isCompleted ? 'task--completed' : ''}`}
          readOnly={!inputEnabled}
          ref={taskRef}
          value={inputValue}
          onChange={handleChange}
        />
        <button
          className="task__button"
          onClick={handleEditTask}
          disabled={isCompleted || inputEnabled}
        >
          <img className="task__img" src={editIcon} alt="Edit" />
        </button>
        <button className="task__button" onClick={handleDeleteTask}>
          <img className="task__img" src={deleteIcon} alt="Delete" />
        </button>
      </div>
      {inputEnabled && (
        <div className="edit-buttons__container">
          <button
            className="edit-buttons__button button--green"
            onClick={handleSaveTask}
            disabled={inputValue.length === 0 || task.text === inputValue}
          >
            Save
          </button>
          <button
            className="edit-buttons__button button--red"
            onClick={handleCancelEdit}
          >
            Cancel
          </button>
        </div>
      )}
    </div>
  );
}
