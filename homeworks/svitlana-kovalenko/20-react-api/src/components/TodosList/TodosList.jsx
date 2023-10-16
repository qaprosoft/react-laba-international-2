import React, { useState, useEffect, useRef, useReducer, useCallback } from 'react';
import { ADD_TODO, DELETE_TODO, EDIT_TODO, COMPLETED_TODO, UPDATE_TODO } from '../../reducer/actions';
import { reducer } from "../../reducer/reducer";
import useValidation from '../../useValidation';
import { Todo } from '../Todo/Todo';

const defaultState = {
    todos: JSON.parse(localStorage.getItem('todos')) || [],

}
export const TodoContext = React.createContext(defaultState);

export const TodosList = () => {
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
    const updateTodoList = (id, updatedTask) => {
        dispatch({
            type: UPDATE_TODO,
            payload: { id, updatedTask }
        });
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleClick();
        }
    };
    return (
        <TodoContext.Provider value={{ state, dispatch }}>
            <div className="container">
                {error && <div className="error">{error}</div>}
                <div>
                    <input
                        ref={inputRef}
                        value={input}
                        onFocus={(e) => e.target.placeholder = ""}
                        onInput={e => setInput(e.target.value)}
                        onKeyPress={handleKeyPress}
                        placeholder="Create Todo-Task"
                    ></input>
                    <button onClick={() => handleClick()} type="submit">
                        Add
                    </button>
                </div>
                <ul className="todos">
                    {state.todos.map((todo) =>
                        < Todo
                            task={todo}
                            key={todo.id}
                            handleCompleted={handleCompleted}
                            handleDelete={handleDelete}
                            handleEdit={handleEdit}
                            updateTodoList={updateTodoList}
                            state={state}
                        />
                    )}
                </ul>
            </div>
        </TodoContext.Provider>
    )
}