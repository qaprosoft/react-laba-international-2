import React from 'react';
import Button from '../Button/Button';
import Input from '../Input/Input';

const AddTaskComponent = ({newTaskText, setNewTask, addTask}) => {
  return (
    <>
      <Input type="text" value={newTaskText} onChange={setNewTask} />
      <Button onClick={addTask}>Add</Button>
    </>
  );
};

export default AddTaskComponent;
