import React, { memo, useState } from 'react';
import write from './img/write.png';
import trash from './img/delete.png';

export const Todo = memo(({ task, handleCompleted, handleDelete, handleEdit }) => {
  const [value, setValue] = useState('');
  const handleSubmit = e => {
    e.preventDefault();
    handleEdit(task.id);
  };

  return (
    <>
      <div className="todos_wrap">
        <div className="todos_item" onClick={() => handleEdit(task.id)}>
          <input className={`${task.complete ? 'completed' : ''}`} type="text"
            value={value}
            placeholder={task.task}
            onChange={e => setValue(e.target.value)}
            onFocus={() => setValue(task.task)} />
        </div>
        {task.edition ? <button type="submit" onClick={handleSubmit}>Update</button> :
          <div>
            <img
              src={write}
              onClick={() => handleCompleted(task.id)}
              alt="complete"
            />
            <img src={trash} alt="delete" onClick={() => handleDelete(task.id)} />
          </div>
        }
      </div>
    </>
  );
});
