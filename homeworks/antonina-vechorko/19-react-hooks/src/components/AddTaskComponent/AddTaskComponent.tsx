import React, {useRef, useContext, useState, FC} from 'react';
import Button from '../Button/Button';
import Input from '../Input/Input';
import {TaskDispatchContext} from '../../context/Context';
import useInputValidation from '../../customHooks/useInputValidation';
import useEnterKeyPress from '../../customHooks/useEnterKeyPress';

const AddTaskComponent: FC = () => {
  const [newTaskText, setNewTaskText] = useState('');
  const inputRef = useRef(null);
  const dispatch = useContext(TaskDispatchContext);
  const {validateInput} = useInputValidation();

  useEnterKeyPress(() => {
    addTask(inputRef);
  });

  const addTask = (inputRef: React.RefObject<HTMLInputElement>) => {
    const validationError = validateInput(newTaskText);
    if (validationError) {
      alert(validationError);
      return;
    }

    if (dispatch) {
      dispatch({
        type: 'add',
        text: newTaskText,
      });
    }
    setNewTaskText('');
    if (inputRef.current) inputRef.current.focus();
  };

  return (
    <div className="add__wrapper">
      <Input
        ref={inputRef}
        value={newTaskText}
        placeholder="Create Todo-Task"
        onChange={e => setNewTaskText(e.target.value)}
      />
      <Button onClick={() => addTask(inputRef)}>Add</Button>
    </div>
  );
};

export default AddTaskComponent;
