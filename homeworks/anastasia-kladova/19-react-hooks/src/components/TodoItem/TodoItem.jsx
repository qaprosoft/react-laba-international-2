import {useContext} from 'react';
import IconButton from '../Buttons/IconButton/IconButton';
import styles from './TodoItem.module.css';
import {Context} from '../../contexts/AppContext/AppContext';
import {saveDataToStorage} from '../../utils/saveDataToStorage';
import {localStorageKeys} from '../../constants/constants';

const TodoItem = ({id, text, isCompleted}) => {
  const {todos, setTodos} = useContext(Context);
  console.log(todos);
  console.log(id);
  const deleteTodo = id => {
    const newTodos = todos.filter(todo => todo.id !== id);
    setTodos(newTodos);
    saveDataToStorage(newTodos);
  };

  const toggleIsCompleted = (id, isCompleted) => {
    const newTodos = todos.map(todo =>
      todo.id === id ? {id, text, isCompleted: !isCompleted} : todo,
    );

    localStorage.setItem(localStorageKeys.TODOS, JSON.stringify(newTodos));
    setTodos(newTodos);
  };

  return (
    <li className={`todo__todo-item ${styles.todoItem}`} id={id} key={id}>
      <div className={styles.todoItem__box}>
        <div className={styles.todoItem__info}>
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
        </div>
        <div className={styles.todoItem__btns}>
          <IconButton type="button" classType="iconBtn--update" />
          <IconButton
            type="button"
            classType="iconBtn--delete"
            onBtnClickHandler={() => deleteTodo(id)}
          />
        </div>
      </div>
    </li>
  );
};

export default TodoItem;
