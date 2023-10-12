import {useCallback, useContext, useMemo, useState} from 'react';
import IconButton from '../Buttons/IconButton/IconButton';
import styles from './TodoItem.module.css';
import {Context} from '../../contexts/AppContext/AppContext';
import {saveDataToStorage} from '../../utils/saveDataToStorage';
import FormEdit from '../FormEdit/FormEdit';
import {localStorageKeys} from '../../constants/constants';
import {useValidateTodo} from '../../hooks/useValidateTodo';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

const TodoItem = ({id, text, isCompleted}) => {
  const {
    todos,
    setTodos,
    todoToEdit,
    setTodoToEdit,
    editingText,
    setEditingText,
    errorMessage,
    setErrorMessage,
    setIsShowModal,
  } = useContext(Context);

  const {currentError} = useValidateTodo(editingText, todos, todoToEdit);

  //delete todo
  const deleteTodo = id => {
    const newTodos = todos.filter(todo => todo.id !== id);
    setTodos(newTodos);
    saveDataToStorage(newTodos);
  };

  //toggle isCompleted todo
  const toggleIsCompleted = (id, isCompleted) => {
    const newTodos = todos.map(todo =>
      todo.id === id ? {id, text, isCompleted: !isCompleted} : todo,
    );

    localStorage.setItem(localStorageKeys.TODOS, JSON.stringify(newTodos));
    setTodos(newTodos);
  };

  //edit todo
  const editTodo = id => {
    setEditingText(text);
    setTodoToEdit(id);
  };

  const handleEditingText = e => {
    setEditingText(e.target.value);
  };

  const handleEditingTodo = useCallback(
    (e, id) => {
      e.preventDefault();

      if (!currentError) {
        let newTodos = [...todos].map(todo => {
          return todo.id === todoToEdit
            ? {id, text: editingText, isCompleted}
            : todo;
        });
        setTodos(newTodos);
        setTodoToEdit('');
        setEditingText('');
        saveDataToStorage(newTodos);
      } else {
        setErrorMessage(currentError);
        setIsShowModal(true);
      }
    },
    [currentError],
  );
  console.log(errorMessage);
  return (
    <li className={`todo__todo-item ${styles.todoItem}`} id={id} key={id}>
      <div className={styles.todoItem__box}>
        <div className={styles.todoItem__info}>
          {todoToEdit === id ? (
            <>
              <FormEdit
                value={editingText}
                handleEditingText={handleEditingText}
                handleEditingTodo={handleEditingTodo}
              />
            </>
          ) : (
            <>
              <input
                className={styles.todo__checkbox}
                type="checkbox"
                defaultChecked={isCompleted}
                onClick={() => toggleIsCompleted(id, isCompleted)}
              />

              <span
                className={
                  isCompleted
                    ? styles.todoItem__textComplete
                    : styles.todoItem__text
                }
              >
                {text}
              </span>
            </>
          )}
        </div>
        <div className={styles.todoItem__btns}>
          <IconButton
            type="button"
            classType="iconBtn--update"
            onBtnClickHandler={() => editTodo(id)}
          />
          <IconButton
            type="button"
            classType="iconBtn--delete"
            onBtnClickHandler={() => deleteTodo(id)}
          />
        </div>
      </div>
      {errorMessage && todoToEdit === id && (
        <ErrorMessage errorText={errorMessage} />
      )}
    </li>
  );
};

export default TodoItem;
