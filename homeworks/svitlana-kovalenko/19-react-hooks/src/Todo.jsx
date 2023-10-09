import React, {useState} from 'react';
import write from './img/write.png';
import trash from './img/delete.png';

export const Todo = ({
  task,
  handleCompleted,
  handleDelete,
  handleEdit,
  edition,
}) => {
  const [value, setValue] = useState(task.task);

  const handleSubmit = e => {
    // e.preventDefault();

    // !!!UPDATE TASK HERE INSTEAD OF HANDLING EDIT STATE
    handleEdit(task.id);
  };

  console.log('task:::', task);

  return (
    <>
      <div className="todos_wrap">
        <div
          className="todos_item"
          // onClick={() => handleEdit(task.id)}
        >
          <input
            className={`${task.complete ? 'completed' : ''}`}
            type="text"
            value={value}
            // placeholder={task.task}
            placeholder={'Enter task'}
            // onChange={e => setValue(e.target.value)}
            onChange={e => setValue(e.target.value)}
            onFocus={() => handleEdit(task.id)}
          />
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
