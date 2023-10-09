import React, { useContext } from 'react';
import { useState } from 'react';

import editIcon from '../assets/write 1.png';
import deleteIcon from '../assets/delete 1.png';
import IconBtn from './IconBtn';
import { ToDoContext } from '../store/toDoContext';
import ForwardedInput from './ForwardedInput';

function ToDoItem({ toDo }) {

  const [isEdit, setIsEdit] = useState(false);
  const [inputValue, setInputValue] = useState(toDo.value);
  const [isMarked, setIsMarked] = useState(toDo.completed);
  let { dispatchToDos, deleteToDo, editToDo } = useContext(ToDoContext)
  
  const toggleIsMarked = id => {
    setIsMarked(!isMarked);
    dispatchToDos({ type: 'ToggleMarked', value: inputValue, completed: !isMarked, id })
  };

  const checkEdit = () => {
    setIsEdit(!isEdit)
    console.log('ToDoItem Run')
  }


  return (
    <div className="toDoItem">
      {isEdit ? (
        <>
          <ForwardedInput
            value={inputValue}
            inputHandler={e => setInputValue(e.target.value)}
          />
          <IconBtn
            src={editIcon}
            alt="edit"
            iconHandler={() => editToDo(inputValue, toDo.id, setIsEdit)}
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
          src={editIcon}
          alt="edit"
          iconHandler={checkEdit}
        />
      )}
      <IconBtn
        src={deleteIcon}
        alt="delete"
        iconHandler={() => deleteToDo(toDo.id)}
      />
    </div>
  );
}

export default ToDoItem;
