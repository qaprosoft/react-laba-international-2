import React, { useState, useEffect } from "react";
import "./App.css";
import { Task } from "./components/Task";

function App() {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);

  // Recuperar las tareas almacenadas en localStorage cuando se carga la página
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    // Fusiona los datos almacenados con los datos existentes
    setTaskList((prevList) => [...prevList, ...storedTasks]);
  }, []);

  // Actualizar localStorage cada vez que taskList cambie
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(taskList));
  }, [taskList]);

  function handleSubmit(e) {
    e.preventDefault();

    if (task === "") {
      alert("You must input a task!");
      return;
    }

    if (taskList.some((item) => item.task === task)) {
      alert("Task already exists!");
      return;
    }

    const newTask = {
      id: Date.now(),
      task: task,
      completed: false,
    };

    setTaskList((prevList) => [...prevList, newTask]);
    setTask("");

    // Actualiza localStorage después de agregar una tarea
    localStorage.setItem("tasks", JSON.stringify([...taskList, newTask]));
  }

  function handleUpdateTask(updatedTask) {
    const updatedList = taskList.map((item) =>
      item.id === updatedTask.id ? updatedTask : item
    );
    setTaskList(updatedList);

    // Actualiza localStorage después de editar una tarea
    localStorage.setItem("tasks", JSON.stringify(updatedList));
  }

  function handleDeleteTask(id) {
    const filteredList = taskList.filter((item) => item.id !== id);
    setTaskList(filteredList);

    // Actualiza localStorage después de eliminar una tarea
    localStorage.setItem("tasks", JSON.stringify(filteredList));
  }

  return (
    <>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <input
            className="input__form"
            type="text"
            placeholder="Add a new task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <button className="input__button">Add</button>
        </form>
      </div>

      <div className="task-container">
        <div className="task-container__info">
          {taskList.map((task) => (
            <Task
              key={task.id}
              task={task}
              onUpdateTask={handleUpdateTask}
              onDeleteTask={handleDeleteTask}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
