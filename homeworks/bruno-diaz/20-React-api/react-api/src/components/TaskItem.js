import { useState, useRef, useEffect, useMemo } from "react";

export function TaskItem({
  task,
  handleDeleteTask,
  handleCompleteTask,
  handleUpdateTask,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedDescription, setEditedDescription] = useState(task.description);
  const inputRef = useRef(null);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    const trimmedDescription = editedDescription.trim();

    if (trimmedDescription !== "") {
      setIsEditing(false);
      handleUpdateTask(task.id, trimmedDescription);
    } else {
      alert("Empty task is not allowed");
    }
  };

  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isEditing]);

  const spanClassName = useMemo(() => {
    return `input__form ${task.done ? "completed" : ""}`;
  }, [task.done]);

  return (
    <div className="item-container">
      {isEditing ? (
        <div>
          <input
            className="input__form"
            type="text"
            value={editedDescription}
            onChange={(e) => setEditedDescription(e.target.value)}
            onBlur={handleSave}
            ref={inputRef}
          />
        </div>
      ) : (
        <span
          className={spanClassName}
          onClick={() => handleCompleteTask(task.id)}
        >
          {task.description}
        </span>
      )}
      <button
        className="button__icon button__icon-update"
        onClick={handleEdit}
      ></button>
      <button
        className="button__icon button__icon-delete"
        onClick={() => handleDeleteTask(task.id)}
      ></button>
    </div>
  );
}
