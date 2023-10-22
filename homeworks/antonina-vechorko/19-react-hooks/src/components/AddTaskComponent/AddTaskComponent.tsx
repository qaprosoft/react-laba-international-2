import React, {useRef, useContext, useState} from 'react';
import Button from '../Button/Button';
import Input from '../Input/Input';
import {TaskContext, TaskDispatchContext} from '../../context/Context';
import {MAX_TASK_LENGTH} from '../../constants/constants';

const AddTaskComponent = () => {
  const [newTaskText, setNewTaskText] = useState('');
  const inputRef = useRef(null);
  const tasks = useContext(TaskContext);
  const dispatch = useContext(TaskDispatchContext);

  const addTask = inputRef => {
    if (newTaskText.length === 0) {
      alert('Please enter to-do');
      return;
    }

    if (newTaskText.length > MAX_TASK_LENGTH) {
      alert('Your to-do is longer than 35 symbols');
      return;
    }

    if (tasks.some(task => task.text === newTaskText)) {
      alert('This to-do already exists');
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
        onChange={e => setNewTaskText(e.target.value)}
      />
      <Button onClick={() => addTask(inputRef)}>Add</Button>
    </>
  );
};

export default AddTaskComponent;
