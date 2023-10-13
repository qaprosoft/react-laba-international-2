import React from 'react';
import { useState } from 'react';

import editIcon from '../assets/write 1.png';
import deleteIcon from '../assets/delete 1.png';
import IconBtn from './IconBtn';
import Input from './Input';

function ToDoItem({ toDo, deleteToDo, toDoList, setToDoList }) {
  const [isEdit, setIsEdit] = useState(false);
  const [inputValue, setInputValue] = useState(toDo.value);
  const [isMarked, setIsMarked] = useState(toDo.completed);

  function editToDo(value, id) {
    let isValueExist = toDoList.some(list => list.value === inputValue);

    if (isValueExist) {
      alert('This value is already exist');
      setInputValue('');
      const updatedToDoList = toDoList.map(list =>
        list.id === id ? { id: list.id, value: '', completed: false } : list,
      );
      localStorage.setItem('toDoList', JSON.stringify(updatedToDoList));
      setIsEdit(false);
    } else if (value.length > 25) {
      alert('The value should be not longer 25 symbols');
      setInputValue('');
      const updatedToDoList = toDoList.map(list =>
        list.id === id ? { id: list.id, value: '', completed: false } : list,
      );
      localStorage.setItem('toDoList', JSON.stringify(updatedToDoList));
    } else {
      const updatedToDoList = toDoList.map(list =>
        list.id === id ? { id: list.id, value: value, completed: false } : list,
      );
      localStorage.setItem('toDoList', JSON.stringify(updatedToDoList));
      setToDoList(updatedToDoList);
      setIsEdit(false);
    }
  }

  const toggleIsMarked = id => {
    setIsMarked(!isMarked);
    const updatedToDoList = toDoList.map(list =>
      list.id === id ? { id, value: inputValue, completed: !isMarked } : list,
    );
    localStorage.setItem('toDoList', JSON.stringify(updatedToDoList));
    setToDoList(updatedToDoList);
  };


  return (
    <div className="toDoItem" data-testid="to-do-item">
      {isEdit ? (
        <>
          <Input
            testId='edit-input'
            value={inputValue}
            inputHandler={e => setInputValue(e.target.value)}
          />
          <IconBtn
            testId='edit-save-btn'
            src={editIcon}
            alt="edit"
            iconHandler={() => editToDo(inputValue, toDo.id)}
          />
        </>
      ) : (
        <div
          className="toDoItem__value"
          onClick={() => toggleIsMarked(toDo.id)}
        >
          <div
            style={{
              textDecoration: isMarked ? 'line-through' : 'none',
            }}
          >
            {inputValue}
          </div>
        </div>
      )}
      {!isEdit && (
        <IconBtn
          testId='edit-btn'
          src={editIcon}
          alt="edit"
          iconHandler={() => setIsEdit(!isEdit)}
        />
      )}
      <IconBtn
        testId='delete-btn'
        src={deleteIcon}
        alt="delete"
        iconHandler={() => deleteToDo(toDo.id)}
      />
    </div>
  );
}

export default ToDoItem;
