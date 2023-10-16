import React, { useState } from 'react';
import "./Todo.css";
import write from "../../img/write.png"
import trash from '../../img/delete.png';

export const Todo = ({
  task,
  handleCompleted,
  handleDelete,
  handleEdit,
  updateTodoList
}) => {
  const [value, setValue] = useState(task.task);
  const [error, setError] = useState(null);

  const handleSubmit = () => {
    if ((task.task === value)) {
      setError('Duplicate To-Do Item');
      return;
    } else if (!/^[a-zA-Z0-9\s]+$/.test(value)) {
      setError('Invalid Characters in To-Do Name');
      return;
    } else if (value.length > 50) {
      setError('Exceeding Maximum To-Do Length');
      return;
    } else { updateTodoList(task.id, value); }
  };
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };
  const handleBlur = () => {
    updateTodoList(task.id, value);
  }

  return (
    <>
      <div className="todos_wrap">
        <div className="todos_item">
          {error ? <input className="error" value={error} onChange={e => setValue(e.target.value)}
            onFocus={() => setError('')} /> :
            <input
              className={`${task.complete ? 'completed' : ''}`}
              type="text"
              value={value}
              onKeyPress={handleKeyPress}
              placeholder={'Enter task'}
              onChange={e => setValue(e.target.value)}
              onFocus={() => handleEdit(task.id)}
              onBlur={handleBlur} />}
        </div>
        {task.edition ? (
          <button type="submit" onClick={handleSubmit}>
            Update
          </button>
        ) : (
          <div>
            <img
              src={write}
              onClick={() => handleCompleted(task.id)}
              alt="complete"
            />
            <img
              src={trash}
              alt="delete"
              onClick={() => handleDelete(task.id)}
            />
          </div>
        )}
      </div>
    </>
  );
};
