'use client';

import {AddToDo} from '@/components/AddToDo/AddToDo';
import styles from './page.module.css';
import {useState, useEffect} from 'react';
import {MainPropType, TodoType} from '@/types/mainTypes';
import {ToDo} from '@/components/ToDo/ToDo';
import {v4} from 'uuid';
import {TodoError} from '@/helpers/errors';

export default function Home({propsTodos = []}: MainPropType) {
  const [todos, setTodos] = useState<Array<TodoType>>(propsTodos);
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
  }, [todos, isInitialRender]);

  const addNewTodo = (value: string) => {
    if (value.length < 2 || value.length > 30) {
      setIsAlreadyExist(TodoError.wrongTitleSize);
      return;
    }
    const isExist = todos.findIndex(todo => todo.value === value);
    if (isExist > -1) {
      setIsAlreadyExist(TodoError.alreadyExist);
      return;
    }
    setIsAlreadyExist(null);
    const id = v4();
    setTodos([...todos, {id, value, status: false}]);
  };

  const editTodoHandler = (id: string, value: string) => {
    const isExist = todos.findIndex(todo => todo.value === value);
    if (isExist > -1) {
      setIsAlreadyExist(TodoError.alreadyExist);
      return;
    }
    setIsAlreadyExist(null);
    setTodos(todos.map(todo => (todo.id === id ? {...todo, value} : todo)));
  };

  const deleteTodo = (id: string) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const changeTodoStatus = (id: string, status: boolean) => {
    setTodos(todos.map(todo => (todo.id === id ? {...todo, status} : todo)));
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
                isChecked={todo.status}
                id={todo.id}
                changeEditMode={editTodoHandler}
                deleteCallback={deleteTodo}
                changeTodoStatus={changeTodoStatus}
              />
            );
          })}
      </div>
    </main>
  );
}
