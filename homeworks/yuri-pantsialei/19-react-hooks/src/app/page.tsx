'use client';

import {AddToDo} from '@/components/AddToDo/AddToDo';
import styles from './page.module.css';
import {useState, useEffect} from 'react';
import {TodoType} from '@/types/mainTypes';
import {ToDo} from '@/components/ToDo/ToDo';
import {v4} from 'uuid';

export default function Home() {
  const [todos, setTodos] = useState<Array<TodoType>>([]);
  const [isAlreadyExist, setIsAlreadyExist] = useState<null | string>(null);
  const [isInitialRender, setIsInitialRender] = useState<boolean>(true);

  useEffect(() => {
    const savedTodos = localStorage.getItem('todos');
    if (savedTodos) {
      setTodos(JSON.parse(savedTodos));
    }
  }, []);

  useEffect(() => {
    if (!isInitialRender) {
      localStorage.setItem('todos', JSON.stringify(todos));
    } else {
      setIsInitialRender(false);
    }
  }, [todos]);

  const addNewTodo = (value: string) => {
    if (value.length < 2 || value.length > 30) {
      setIsAlreadyExist(
        'Todo title length need to be at least 2 symbols and not longer than 30',
      );
      return;
    }
    const isExist = todos.findIndex(todo => todo.value === value);
    if (isExist > -1) {
      setIsAlreadyExist('To do with such title already exist');
      return;
    }
    setIsAlreadyExist(null);
    const id = v4();
    setTodos([...todos, {id, value}]);
  };

  const editTodoHandler = (id: string, value: string) => {
    const isExist = todos.findIndex(todo => todo.value === value);
    if (isExist > -1) {
      setIsAlreadyExist('To do with such title already exist');
      return;
    }
    setIsAlreadyExist(null);
    setTodos(todos.map(todo => (todo.id === id ? {id, value} : todo)));
  };

  const deleteTodo = (id: string) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <main className={styles.main}>
      <div className={styles.addTodo_wrapper}>
        <AddToDo callback={addNewTodo} />
        {isAlreadyExist && (
          <div className={styles.errror_text}>{isAlreadyExist}</div>
        )}
      </div>

      <div className={styles.todo_wrapper}>
        {todos.length !== 0 &&
          todos.map(todo => {
            return (
              <ToDo
                key={todo.id}
                value={todo.value}
                callback={editTodoHandler}
                id={todo.id}
                deleteCallback={deleteTodo}
              />
            );
          })}
      </div>
    </main>
  );
}
