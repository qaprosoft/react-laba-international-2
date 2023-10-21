import { useForm } from "../hooks/useForm";
import { useState, useRef, useCallback } from "react";

const initialState = { description: "" };

export function AddTask({ handleNewTask }) {
  const { description, onInputChange, onResetForm } = useForm(initialState);
  const inputRef = useRef(null);
  const [existingTasks, setExistingTasks] = useState([]);
  const [error, setError] = useState(null);

  const onFormSubmit = useCallback((e) => {
    e.preventDefault();
    inputRef.current.focus();

    if (description.trim() === "") {
      setError("Empty task is not allowed");
      return;
    }

    if (existingTasks.includes(description)) {
      setError("Task already exists");
      return;
    }

    setError(null);

    let newTask = {
      id: new Date().getTime(),
      description: description,
      done: false,
    };

    setExistingTasks([...existingTasks, description]);

    handleNewTask(newTask);
    onResetForm();
  }, [description, existingTasks, handleNewTask, onResetForm]);

  return (
    <form onSubmit={onFormSubmit}>
      <input
        type="text"
        className="input__form"
        name="description"
        value={description}
        onChange={onInputChange}
        ref={inputRef}
        placeholder="Add a new task"
      />
      <button className="input__button">Add</button>
      {error && <div className="error-message">{error}</div>}
    </form>
  );
}
