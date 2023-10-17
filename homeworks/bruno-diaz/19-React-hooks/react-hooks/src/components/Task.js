import React, { useState } from "react";

export function Task(props) {
  const { task, onUpdateTask, onDeleteTask } = props;

  const [editing, setEditing] = useState(false);
  const [editedValue, setEditedValue] = useState(task.task);

  function handleEditClick() {
    setEditing(true);
  }

  function handleCancelEdit() {
    setEditing(false);
    setEditedValue(task.task);
  }

  function handleSaveEdit() {
    onUpdateTask({
      id: task.id,
      task: editedValue,
      completed: task.completed,
    });
    setEditing(false);
  }

  return (
    <>
      <div className="task-container" id={task.id}>
        {editing ? (
          <>
            <input
              className="input__form"
              type="text"
              value={editedValue}
              onChange={(e) => setEditedValue(e.target.value)}
            />
            <button onClick={handleSaveEdit} className="button__icon button__icon-update"></button>
            <button onClick={handleCancelEdit} className="button__icon button__icon-delete"></button>
          </>
        ) : (
          <>
            <span
              className={task.completed ? "input__form task-field completed" : "input__form"}
              onClick={() => onUpdateTask({ ...task, completed: !task.completed })}
            >
              {task.task}
            </span>
            <button onClick={handleEditClick} className="button__icon button__icon-update"></button>
            <button onClick={() => onDeleteTask(task.id)} className="button__icon button__icon-delete"></button>
          </>
        )}
      </div>
    </>
  );
}
