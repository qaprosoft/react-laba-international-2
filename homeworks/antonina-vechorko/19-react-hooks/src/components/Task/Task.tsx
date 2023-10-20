import React, {useState} from 'react';
import Input from '../Input/Input';
import IconButton from '../IconButton/IconButton';
import deleteIcon from '../../assets/delete.svg';
import editIcon from '../../assets/edit.svg';
import saveIcon from '../../assets/save.svg';

const Task = ({text, onChange, onDelete, onToggle}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(text);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    onChange(editedText);
    setIsEditing(false);
  };

  return (
    <>
      <Input type="checkbox" onChange={onToggle} value="" />
      <Input
        type="text"
        value={editedText}
        onChange={setEditedText}
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
