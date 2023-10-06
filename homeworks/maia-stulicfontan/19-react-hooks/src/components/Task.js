import editIcon from '../assets/images/edit.svg';
import deleteIcon from '../assets/images/delete.svg';
import {useState} from 'react';

function Task({task, isCompleted, onEdit, onDelete, onComplete}) {
  const [inputEnabled, setInputEnabled] = useState(false);
  const [taskCompleted, setTaskCompleted] = useState(isCompleted);
  const [inputValue, setInputValue] = useState(task.text);
  return (
    <>
      <div className="task">
        <div className="task__container">
          <input
            type="checkbox"
            className="task__checkbox"
            checked={taskCompleted}
            disabled={inputEnabled}
            onChange={() => {
              setTaskCompleted(!taskCompleted);
              onComplete(task.id, !taskCompleted);
            }}
          ></input>
          <input
            type="text"
            className={`task__text ${isCompleted ? 'task--completed' : ''}`}
            readOnly={!inputEnabled}
            value={inputValue}
            onChange={e => setInputValue(e.target.value)}
          ></input>
          {!isCompleted && (
            <button
              className="task__button"
              onClick={() => {
                setInputEnabled(true);
              }}
            >
              <img className="task__img" src={editIcon} alt="Edit"></img>
            </button>
          )}
          <button className="task__button" onClick={() => onDelete(task.id)}>
            <img className="task__img" src={deleteIcon} alt="Delete"></img>
          </button>
        </div>
        {inputEnabled && (
          <div className="edit-buttons__container">
            <button
              className="edit-buttons__button button--green"
              onClick={() => {
                try {
                  onEdit(task.id, inputValue);
                  setInputEnabled(false);
                } catch (error) {
                  alert(error);
                }
              }}
              disabled={inputValue.length === 0 || task.text === inputValue}
            >
              Save
            </button>
            <button
              className="edit-buttons__button button--red"
              onClick={() => {
                setInputEnabled(false);
                setInputValue(task.text);
              }}
            >
              Cancel
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default Task;
