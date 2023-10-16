import React, { memo, useState } from 'react';
import write from '../../img/write.png'
import trash from '../../img/delete.png';
import useValidation from '../../useValidation';

export const Todo = memo(({ task, handleCompleted, handleDelete, handleEdit, updateTodoList, state }) => {
  const [value, setValue] = useState(task.task);
  const { error, validateInput, handleDuplicates } = useValidation();

  const handleSubmit = () => {
    const isValid = validateInput(value);
    const hasDuplicates = handleDuplicates(value, state.todos);

    if (!isValid) {
      return;
    } else if (hasDuplicates) {
      return;
    } else {
      updateTodoList(task.id, value);
    }
  };
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  return (
    <>
      {error && <div className="error">{error}</div>}
      <div className="todos_wrap">
        <div className="todos_item" >
          <input className={`${task.complete ? 'completed' : ''}`} type="text"
            value={value}
            placeholder={'Edit task'}
            onChange={e => setValue(e.target.value)}
            onFocus={() => handleEdit(task.id)}
            onKeyPress={handleKeyPress}
          />
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
