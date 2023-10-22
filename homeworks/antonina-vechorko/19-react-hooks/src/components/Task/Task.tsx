import React, {useContext, useState} from 'react';
import Input from '../Input/Input';
import IconButton from '../IconButton/IconButton';
import deleteIcon from '../../assets/delete.svg';
import editIcon from '../../assets/edit.svg';
import saveIcon from '../../assets/save.svg';
import {TaskDispatchContext} from '../../context/Context';

const Task = ({task, onDelete}) => {
  const dispatch = useContext(TaskDispatchContext);
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
  };

  return (
    <>
      <input
        type="checkbox"
        checked={task.done}
        onChange={e => {
          dispatch({
            type: 'toggle checkbox',
            task: {
              ...task,
              done: e.target.checked,
            },
          });
        }}
      />
      <Input
        value={task.text}
        onChange={e => {
          dispatch({
            type: 'edit',
            task: {
              ...task,
              text: e.target.value,
            },
          });
        }}
        disabled={!isEditing}
      />
      {isEditing ? (
        <IconButton src={saveIcon} alt="Save" onClick={handleSave} />
      ) : (
        <IconButton src={editIcon} alt="Edit" onClick={handleEdit} />
      )}
      <IconButton src={deleteIcon} alt="Delete" onClick={onDelete}></IconButton>
    </>
  );
};

export default Task;
