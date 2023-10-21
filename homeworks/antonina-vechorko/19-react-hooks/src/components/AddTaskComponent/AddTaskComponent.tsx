import React, {useRef} from 'react';
import Button from '../Button/Button';
import Input from '../Input/Input';

const AddTaskComponent = ({newTaskText, setNewTask, addTask}) => {
  const inputRef = useRef(null);

  const focusHandler = inputRef => {
    addTask();
    inputRef.current.focus();
  };

  return (
    <>
      <Input
        ref={inputRef}
        type="text"
        value={newTaskText}
        onChange={setNewTask}
      />
      <Button onClick={() => focusHandler(inputRef)}>Add</Button>
    </>
  );
};

export default AddTaskComponent;
