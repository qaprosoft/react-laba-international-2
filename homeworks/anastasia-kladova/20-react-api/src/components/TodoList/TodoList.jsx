import {useContext, useEffect, useMemo} from 'react';
import TodoItem from '../TodoItem/TodoItem';
import styles from './TodoList.module.css';
import {Context} from '../../contexts/AppContext/AppContext';
import {localStorageKeys} from '../../constants/constants';
import {ACTION_TYPES} from '../../state/actionTypes';
import {saveDataToStorage} from '../../utils/saveDataToStorage';
import {INITIAL_STATE} from '../../state/initialState';

const TodoList = () => {
  const {state, dispatch} = useContext(Context);
  const todosLength = useMemo(() => state.todos.length, [state.todos.length]);

  // useEffect(() => {
  //   if (JSON.parse(localStorage.getItem(localStorageKeys.TODOS))) {
  //     dispatch({
  //       type: ACTION_TYPES.SET_TODOS,
  //       payload: JSON.parse(localStorage.getItem(localStorageKeys.TODOS)),
  //     });
  //   }
  // }, []);

  // useEffect(() => {
  //   if (state !== INITIAL_STATE) {
  //     localStorage.setItem(localStorageKeys.TODOS, JSON.stringify(state.todos));
  //     saveDataToStorage(state.todos);
  //   }
  // }, [state]);

  return (
    <>
      {todosLength === 0 ? (
        <p className={styles.todo__noTodoList}>
          There are no todos yet. To start, add new one.
        </p>
      ) : (
        <ul className={styles.todo__todoList}>
          {state.todos.map(todo => (
            <TodoItem
              key={todo.id}
              id={todo.id}
              text={todo.text}
              isCompleted={todo.isCompleted}
            />
          ))}
        </ul>
      )}
    </>
  );
};

export default TodoList;
