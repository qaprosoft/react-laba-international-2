import './App.css';
import React, { useState, useEffect } from 'react';
import { Todo } from './Todo';
import { EditInput } from './EditInput';

function App() {
  const [input, setInput] = useState('');
  const [todoList, setTodoList] = useState(
    JSON.parse(localStorage.getItem('todos')) || [],
  );
  const [error, setError] = useState(null);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todoList));
  }, [todoList]);

  const handleClick = () => {
    if (todoList.some(todo => todo.task === input)) {
      setError('Duplicate To-Do Item');
      return;
    } else if (!/^[a-zA-Z0-9\s]+$/.test(input)) {
      setError('Invalid Characters in To-Do Name');
      return;
    } else if (input.length > 50) {
      setError('Exceeding Maximum To-Do Length');
      return;
    } else {

      const id = Date.now();
      setTodoList(prev => [
        ...prev,
        {
          id: id,
          task: input,
          complete: false,
          edition: false,
        },
      ]);
      setInput('');
    }
  };
  const handleCompleted = id => {
    setTodoList(
      todoList.map(todo =>
        todo.id === id ? { ...todo, complete: !todo.complete } : todo,
      ),
    );
  };
  const handleDelete = id => {
    setTodoList(todoList.filter(todo => todo.id !== id));
  };
  const handleEdit = id => {
    setTodoList(
      todoList.map(todo =>
        todo.id === id ? { ...todo, edition: !todo.edition } : todo,
      ),
    );
  };
  const handleEditTask = (task, id) => {
    setTodoList(
      todoList.map(todo =>
        todo.id === id ? { ...todo, task, edition: !todo.edition } : todo,
      ),
    );
  };
  return (
    <div className="App">
      <div className="container">
        {error && <div className="error">{error}</div>}
        <div>
          <input
            value={input}
            onInput={e => setInput(e.target.value)}
            placeholder="Create Todo-Task"
          ></input>
          <button onClick={() => handleClick()} type="submit">
            Add
          </button>
        </div>
        <ul className="todos">
          {todoList.map((todo, index) =>
            todo.edition ? (
              <EditInput handleEdit={handleEditTask} task={todo} />
            ) : (
              <Todo
                task={todo}
                key={index}
                handleCompleted={handleCompleted}
                handleDelete={handleDelete}
                handleEdit={handleEdit}
              />
            )
          )}
        </ul>
      </div>
    </div>
  );
}

export default App;
