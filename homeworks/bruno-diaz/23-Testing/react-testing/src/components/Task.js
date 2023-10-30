import React, { useState } from "react";

export function Task(props) {
  const { task, onUpdateTask, onDeleteTask } = props;

  const [editing, setEditing] = useState(false);
  const [editedValue, setEditedValue] = useState(task.task); 

  const [isCompleted, setIsCompleted] = useState(false);

  function EditionModeOn() {
    function handleChange(e) {
      const text = e.target.value;
      setEditedValue(text); 
    }

    function handleUpdate() {
      onUpdateTask({
        id: task.id,
        task: editedValue,
        completed: false,
      });
      setEditing(false);
    }

    return (
      <>
        <input
          className="input__form"
          type="text"
          value={editedValue} 
          onChange={handleChange}
        ></input>
        <button
          onClick={handleUpdate}
          className={"button__icon button__icon-update"}
        ></button>
        <button
          className={"button__icon button__icon-delete"}
          onClick={() => onDeleteTask(task.id)}
        ></button>
      </>
    );
  }

  function EditionModeOff() {
    return (
      <>
        <span
          className={isCompleted ? "input__form task-field completed" : "input__form"}
          onClick={() => setIsCompleted(!isCompleted)}
        >
          {task.task}
        </span>
        <button onClick={() => setEditing(true)} className={"button__icon button__icon-update"}></button>
        <button
          className={"button__icon button__icon-delete"}
          onClick={() => onDeleteTask(task.id)}
        ></button>
      </>
    );
  }

  return (
    <>
      <div className="task-container" id={task.id}>
        {editing ? <EditionModeOn /> : <EditionModeOff />}
      </div>
    </>
  );
}
