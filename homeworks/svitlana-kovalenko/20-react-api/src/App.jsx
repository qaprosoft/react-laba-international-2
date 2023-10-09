import './App.css';
import React, { useState, useEffect, useRef, useReducer, useCallback } from 'react';
import { Todo } from './Todo';
import { ADD_TODO, DELETE_TODO, EDIT_TODO, COMPLETED_TODO } from './reducer/actions';
import { reducer } from './reducer/reducer';
import useValidation from './useValidation';

const defaultState = {
  todos: JSON.parse(localStorage.getItem('todos')) || [],

}
export const TodoContext = React.createContext(defaultState);

function App() {
  const [state, dispatch] = useReducer(reducer, defaultState);
  const [input, setInput] = useState('');
  const { error, validateInput } = useValidation();

  const inputRef = useRef(null);
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(state.todos));
  }, [state.todos]);

  const handleClick = () => {
    const isValid = validateInput(input);

    if (!isValid) {
      return;
    } else {

      const id = Date.now();
      dispatch({
        type: ADD_TODO,
        payload: {
          id: id,
          task: input,
          complete: false,
          edition: false,
        }
      })

      setInput('');
      inputRef.current.focus();

    }
  };

  const handleCompleted = useCallback((id) => {
    dispatch({
      type: COMPLETED_TODO,
      payload: id
    })
  }, []);

  const handleDelete = useCallback((id) => {
    dispatch({
      type: DELETE_TODO,
      payload: id
    })
  }, []);

  const handleEdit = useCallback((id) => {
    dispatch({
      type: EDIT_TODO,
      payload: id
    })
  }, []);

  return (
    <div className="App">
      <TodoContext.Provider value={{ state, dispatch }}>
        <div className="container">
          {error && <div className="error">{error}</div>}
          <div>
            <input
              ref={inputRef}
              value={input}
              onFocus={(e) => e.target.placeholder = ""}
              onInput={e => setInput(e.target.value)}
              placeholder="Create Todo-Task"
            ></input>
            <button onClick={() => handleClick()} type="submit">
              Add
            </button>
          </div>
          <ul className="todos">
            {state.todos.map((todo, index) =>
              <Todo
                task={todo}
                key={index}
                handleCompleted={handleCompleted}
                handleDelete={handleDelete}
                handleEdit={handleEdit}
              />
            )}
          </ul>
        </div>
      </TodoContext.Provider>
    </div>
  );
}

export default App;
