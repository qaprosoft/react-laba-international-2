import React, {Fragment} from 'react';
import {useState, useEffect} from 'react';

import editIcon from '../assets/write 1.png';
import deleteIcon from '../assets/delete 1.png';

function ToDoItem({toDo, deleteToDo, toDoList, setToDoList}) {
  const [isEdit, setIsEdit] = useState(false);
  const [inputValue, setInputValue] = useState(toDo.value);
  const [isMarked, setIsMarked] = useState({});

  function editToDo(value, id) {
    const valueToStore = JSON.stringify(value);
    const isValueExist = Object.values(localStorage).includes(valueToStore);
    if (isValueExist) {
      alert('This value is already exist');
      setInputValue('');
      localStorage.setItem(id, JSON.stringify(''));
      setIsEdit(false);
    } else if (value.length > 25) {
      alert('The value should be not longer 25 symbols');
      setInputValue('');
      localStorage.setItem(id, JSON.stringify(''));
    } else {
      const updatedToDoList = toDoList.map(list =>
        list.id === id ? {id: list.id, value: value} : list,
      );
      localStorage.setItem(id, JSON.stringify(value));
      setToDoList(updatedToDoList);
      setIsEdit(false);
    }
  }

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
          <button
            className="editBtn"
            onClick={() => editToDo(inputValue, toDo.id)}
          >
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
