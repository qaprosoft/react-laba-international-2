import React, {useCallback, useContext, useState} from 'react';
import Input from '../Input/Input';
import IconButton from '../IconButton/IconButton';
import Checkbox from '../Checkbox/Checkbox';
import {TaskDispatchContext} from '../../context/Context';
import deleteIcon from '../../assets/delete.svg';
import editIcon from '../../assets/edit.svg';
import saveIcon from '../../assets/save.svg';

const Task = ({task}) => {
  const dispatch = useContext(TaskDispatchContext);
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
  };

  const handleCheckboxClick = useCallback(
    e => {
      dispatch({
        type: 'toggle checkbox',
        task: {
          ...task,
          done: e.target.checked,
        },
      });
    },
    [dispatch, task],
  );

  const handleEditText = useCallback(
    e => {
      dispatch({
        type: 'edit',
        task: {
          ...task,
          text: e.target.value,
        },
      });
    },
    [dispatch, task],
  );

  const handleDeleteTask = id => {
    dispatch({
      type: 'delete',
      id: id,
    });
  };

  return (
    <>
      <Checkbox checked={task.done} onChange={e => handleCheckboxClick(e)} />
      <Input
        value={task.text}
        onChange={e => handleEditText(e)}
        disabled={!isEditing}
      />
      {isEditing ? (
        <IconButton src={saveIcon} alt="Save" onClick={handleSave} />
      ) : (
        <IconButton src={editIcon} alt="Edit" onClick={handleEdit} />
      )}
      <IconButton
        src={deleteIcon}
        alt="Delete"
        onClick={() => handleDeleteTask(task.id)}
      ></IconButton>
    </>
  );
};

export default Task;
