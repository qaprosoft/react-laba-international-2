import {useCallback, useContext} from 'react';
import IconButton from '../Buttons/IconButton/IconButton';
import styles from './TodoItem.module.css';
import {Context} from '../../contexts/AppContext/AppContext';
import {saveDataToStorage} from '../../utils/saveDataToStorage';
import FormEdit from '../FormEdit/FormEdit';

import ErrorMessage from '../ErrorMessage/ErrorMessage';
import {ACTION_TYPES} from '../../state/actionTypes';
import {validateTodo} from '../../utils/validateTodo';

const TodoItem = ({id, text, isCompleted}) => {
  const {
    state,
    dispatch,
    todoToEdit,
    setTodoToEdit,
    editingText,
    setEditingText,
    errorMessage,
    setErrorMessage,
    setIsShowDeleteModal,
    setTodoToDelete,
  } = useContext(Context);

  const currentError = validateTodo(editingText, state.todos, todoToEdit);

  //show modal
  const showModal = id => {
    setIsShowDeleteModal(true);
    setTodoToDelete(id);
  };

  //toggle isCompleted todo
  const toggleIsCompleted = useCallback(
    (id, isCompleted) => {
      dispatch({
        type: ACTION_TYPES.TOGGLE_COMPLETED,
        payload: {id: id, isCompleted: isCompleted},
      });
    },
    [dispatch],
  );

  //edit todo
  const editTodo = id => {
    setEditingText(text);
    setTodoToEdit(id);
    dispatch({
      type: ACTION_TYPES.UPDATE_TODO,
      payload: {id: id, text: editingText},
    });
  };

  const handleEditingText = e => {
    setEditingText(e.target.value);
  };

  const handleEditingTodo = useCallback(
    (e, id) => {
      e.preventDefault();

      if (!currentError) {
        dispatch({
          type: ACTION_TYPES.UPDATE_TODO,
          payload: {id: todoToEdit, text: editingText},
        });

        setTodoToEdit('');
        setEditingText('');
        saveDataToStorage(state.todos);
      } else {
        setErrorMessage(currentError);
      }
    },
    [
      currentError,
      dispatch,
      editingText,
      setEditingText,
      setErrorMessage,
      setTodoToEdit,
      state.todos,
      todoToEdit,
    ],
  );

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
            onBtnClickHandler={() => showModal(id)}
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
