import React, {useState} from 'react';
import styles from './ToDoItem.module.css';
import ToDoIcon from '../ToDoIcon/ToDoIcon';
import TodoButton from '../ToDoButton/ToDoButton';

const ToDoItem = ({
  text,
  completed,
  onChange,
  onDelete,
  onToggleCompletion,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(text);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    onChange(editedText);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditedText(text);
  };

  const handleTextChange = e => {
    setEditedText(e.target.value);
  };

  return (
    <div className={styles.container}>
      <div className={styles.task}>
        <div className={styles.text}>
          {isEditing ? (
            <input
              type="text"
              value={editedText}
              onChange={handleTextChange}
              autoFocus
            />
          ) : (
            <div className={styles.item_title}>
              {completed ? (
                <>
                  <img
                    width={24}
                    src="/images/icons/tick.png"
                    alt="Completed"
                    onClick={onToggleCompletion}
                  />
                  {editedText}
                </>
              ) : (
                <>
                  <img
                    width={24}
                    src="/images/icons/cancel.png"
                    alt="Not Completed"
                    onClick={onToggleCompletion}
                  />
                  {editedText}
                </>
              )}
            </div>
          )}
        </div>
        <div className={styles.icons}>
          {isEditing ? (
            <div>
              <TodoButton label="Save" onClick={handleSave} />
              <TodoButton label="Cancel" onClick={handleCancel} />
            </div>
          ) : (
            <div>
              <ToDoIcon
                onClick={onDelete}
                iconSrc="/images/icons/delete.png"
                alt="Delete"
              />
              <ToDoIcon
                onClick={handleEdit}
                iconSrc="/images/icons/write.png"
                alt="Edit"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ToDoItem;
