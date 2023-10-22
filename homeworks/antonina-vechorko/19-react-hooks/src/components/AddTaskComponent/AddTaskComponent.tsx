import React, {useRef, useContext, useState} from 'react';
import Button from '../Button/Button';
import Input from '../Input/Input';
import {TaskDispatchContext} from '../../context/Context';
import useInputValidation from '../../customHooks/useInputValidation';
import useEnterKeyPress from '../../customHooks/useEnterKeyPress';

const AddTaskComponent = () => {
  const [newTaskText, setNewTaskText] = useState('');
  const inputRef = useRef(null);
  const dispatch = useContext(TaskDispatchContext);
  const {validateInput} = useInputValidation();

  useEnterKeyPress(() => {
    addTask(inputRef);
  });

  const addTask = inputRef => {
    const validationError = validateInput(newTaskText);
    if (validationError) {
      alert(validationError);
      return;
    }

    dispatch({
      type: 'add',
      text: newTaskText,
    });
    setNewTaskText('');
    inputRef.current.focus();
  };

  return (
    <>
      <Input
        ref={inputRef}
        value={newTaskText}
        placeholder="Create Todo-Task"
        onChange={e => setNewTaskText(e.target.value)}
      />
      <Button onClick={() => addTask(inputRef)}>Add</Button>
    </>
  );
};

export default AddTaskComponent;
