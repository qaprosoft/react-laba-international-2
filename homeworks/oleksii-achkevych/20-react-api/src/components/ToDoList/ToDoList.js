import React, {useRef, useEffect, useCallback} from 'react';
import {useToDoContext} from '../../context/ToDoContext';
import ToDoItem from '../ToDoItem/ToDoItem';
import ToDoForm from '../ToDoForm/ToDoForm';
import useToDoValidation from '../../helpers/useValidation';
import styles from './ToDoList.module.css';

const ToDoList = React.memo(() => {
  const {state, dispatch} = useToDoContext();
  const {newToDo, editingId} = state;
  const inputRef = useRef(null);

  const {error, validateInput, setError} = useToDoValidation(state.toDos);

  useEffect(() => {
    const savedToDos = localStorage.getItem('toDos');
    if (savedToDos) {
      dispatch({type: 'SET_TO_DOS', payload: JSON.parse(savedToDos)});
    }
  }, [dispatch]);

  const addToDo = useCallback(() => {
    try {
      const isValid = validateInput(newToDo, state.toDos);

      if (!isValid) {
        return;
      }
      const newToDoItem = {id: Date.now(), text: newToDo, completed: false};
      const updatedToDos = [...state.toDos, newToDoItem];

      dispatch({type: 'ADD_TODO', payload: newToDoItem});
      dispatch({type: 'SET_NEW_TODO', payload: ''});

      if (inputRef.current) {
        inputRef.current.focus();
      }

      setError(null);

      updateLocalStorage(updatedToDos);
    } catch (err) {
      setError(err.message);
    }
  }, [newToDo, state.toDos, dispatch, setError, validateInput]);

  const editToDo = useCallback(
    (id, newText) => {
      try {
        const isValid = validateInput(newText, state.toDos);

        if (!isValid) {
          return;
        }

        const updatedToDos = state.toDos.map(todo =>
          todo.id === id ? {...todo, text: newText} : todo,
        );

        dispatch({type: 'EDIT_TODO', payload: {id, text: newText}});
        setError(null);

        updateLocalStorage(updatedToDos);
      } catch (err) {
        setError(err.message);
      }
    },
    [state.toDos, dispatch, setError, validateInput],
  );

  const deleteToDo = useCallback(
    id => {
      try {
        const updatedToDos = state.toDos.filter(todo => todo.id !== id);

        dispatch({type: 'DELETE_TODO', payload: id});
        setError(null);

        updateLocalStorage(updatedToDos);
      } catch (err) {
        setError(err.message);
      }
    },
    [state.toDos, dispatch, setError],
  );

  const updateLocalStorage = updatedToDos => {
    localStorage.setItem('toDos', JSON.stringify(updatedToDos));
  };

  return (
    <div>
      <ToDoForm
        newToDo={newToDo}
        setNewToDo={value => {
          dispatch({type: 'SET_NEW_TODO', payload: value});
        }}
        addToDo={addToDo}
        inputRef={inputRef}
      />

      {error && <div className={styles.error}>{error}</div>}

      <ul>
        {state.toDos.map(toDo => (
          <ol key={toDo.id}>
            <ToDoItem
              text={toDo.text}
              isEditing={editingId === toDo.id}
              completed={toDo.completed}
              onChange={newText => editToDo(toDo.id, newText)}
              onDelete={() => deleteToDo(toDo.id)}
              onToggleCompletion={() =>
                dispatch({type: 'TOGGLE_COMPLETION', payload: toDo.id})
              }
              onEdit={() =>
                dispatch({type: 'SET_EDITING_ID', payload: toDo.id})
              }
              onCancelEdit={() =>
                dispatch({type: 'SET_EDITING_ID', payload: null})
              }
            />
          </ol>
        ))}
      </ul>
    </div>
  );
});

export default ToDoList;
