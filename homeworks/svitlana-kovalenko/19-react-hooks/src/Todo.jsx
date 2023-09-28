import React from 'react';
import write from './img/write.png';
import trash from './img/delete.png';

export const Todo = ({task, handleCompleted, handleDelete, handleEdit}) => {
  return (
    <>
      <div className="todos_wrap">
        <div className="todos_item" onClick={() => handleEdit(task.id)}>
          <p className={`${task.complete ? 'completed' : ''}`}>{task.task}</p>
        </div>
        <div>
          <img
            src={write}
            onClick={() => handleCompleted(task.id)}
            alt="complete"
          />
          <img src={trash} alt="delete" onClick={() => handleDelete(task.id)} />
        </div>
      </div>
    </>
  );
};
