import React, { useState } from "react";

export function Task(props) {
  const { task, onUpdateTask, onDeleteTask } = props;

  const [editing, setEditing] = useState(false);
  const [editedValue, setEditedValue] = useState(task.task);

  function handleUpdate() {
    onUpdateTask({
      id: task.id,
      task: editedValue,
      completed: task.completed,
    });
    setEditing(false);
  }

  function EditionModeOn() {
    return (
      <>
        <input
          className="input__form"
          type="text"
          value={editedValue}
          onChange={(e) => setEditedValue(e.target.value)}
        />
        <button className="button__icon button__icon-update" onClick={handleUpdate}></button>
        <button className="button__icon button__icon-delete" onClick={() => onDeleteTask(task.id)}></button>
      </>
    );
  }

  function EditionModeOff() {
    return (
      <>
        <span
          className={`input__form task-field ${task.completed ? "completed" : ""}`}
          onClick={() => onUpdateTask({ ...task, completed: !task.completed })}
        >
          {task.task}
        </span>
        <button className="button__icon button__icon-update" onClick={() => setEditing(true)}></button>
        <button className="button__icon button__icon-delete" onClick={() => onDeleteTask(task.id)}></button>
      </>
    );
  }

  return (
    <div className="task-container" id={task.id}>
      {editing ? <EditionModeOn /> : <EditionModeOff />}
    </div>
  );
}
