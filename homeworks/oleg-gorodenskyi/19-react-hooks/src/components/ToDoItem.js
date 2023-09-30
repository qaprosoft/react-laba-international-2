import React, {Fragment} from 'react';
import {useState} from 'react';

import editIcon from '../assets/write 1.png';
import deleteIcon from '../assets/delete 1.png';

function ToDoItem({toDo, editToDo, deleteToDo}) {
  const [isEdit, setIsEdit] = useState(false);
  const [inputValue, setInputValue] = useState(toDo.value);
  const [isMarked, setIsMarked] = useState({});

  console.log(isMarked)


  function handleSave() {
    editToDo(inputValue, toDo.id);
    setIsEdit(false);
  }

  // Learn and repeat how it works
  const toggleIsMarked = id => {
    const updatedIsMarked = {...isMarked};
    updatedIsMarked[id] = !updatedIsMarked[id];
    setIsMarked(updatedIsMarked);
  };

  return (
    <div className="toDoItem">
      {isEdit ? (
        <>
          <input
            type="text"
            value={inputValue}
            onChange={e => setInputValue(e.target.value)}
          />
          <button className="editBtn" onClick={handleSave}>
            <img src={editIcon} alt="edit" />
          </button>
        </>
      ) : (
        <div
          className="toDoItem__value"
          onClick={() => toggleIsMarked(toDo.id)}
        >
          <div
            style={{
              textDecoration: isMarked[toDo.id] ? 'line-through' : 'none',
            }}
          >
            {inputValue}
          </div>
        </div>
      )}
      {!isEdit && (
        <button className="editBtn" onClick={() => setIsEdit(!isEdit)}>
          <img src={editIcon} alt="edit" />
        </button>
      )}
      <button className="deleteBtn" onClick={() => deleteToDo(toDo.id)}>
        <img src={deleteIcon} alt="delete" />
      </button>
    </div>
  );
}

export default ToDoItem;
