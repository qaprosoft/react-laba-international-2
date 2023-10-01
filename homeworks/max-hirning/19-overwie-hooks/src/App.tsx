import { ITodo } from "./types/todo";
import styles from "./App.module.css";
import { useState, useEffect } from "react";
import TodoElComponent from "./components/TodoEl";
import CreateTodoComponent from './components/CreateTodo';

export default function App() {
  const [list, setList] = useState<ITodo[]>([]);

  useEffect(() => {
    const result = localStorage.getItem("todos");
    if(result) setList(JSON.parse(result));
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(list));
  }, [list]);

  const deleteTodo = (id: string) => () => {
    setList((state: ITodo[]) => state.filter((todo: ITodo) => todo.id !== id))
  }

  const changeTodo = (newValue: string, id: string) => {
    setList((state: ITodo[]) => {
      const stateClone = [...state];
      const changeTodoId = stateClone.findIndex((todo: ITodo) => todo.id === id);
      if(changeTodoId !== -1) stateClone.splice(changeTodoId, 1, {value: newValue, isDone: false, id});
      return stateClone;
    })
  }

  const toggleTodoStatus = (id: string, todo: ITodo) => () => {
    setList((state: ITodo[]) => {
      const stateClone = [...state];
      const changeTodoId = stateClone.findIndex((todo: ITodo) => todo.id === id);
      todo.isDone = !todo.isDone;
      if(changeTodoId !== -1) stateClone.splice(changeTodoId, 1, todo);
      return stateClone;
    })
  }

  return (
    <main className={styles.main}>
      <CreateTodoComponent
        todos={list}
        addTodo={(todoEl: ITodo) => {
          setList((state: ITodo[]) => ([...state, todoEl]))
        }}
      />
      <section className={styles.list}>
        {
          list.map(({ value, isDone, id }: ITodo) => {
            return (
              <TodoElComponent
                key={id}
                isDone={isDone}
                todoValue={value}
                deleteTodoEl={deleteTodo(id)}
                changeTodoEl={(newValue: string) => {
                  changeTodo(newValue, id);
                }}
                changeTodoDoneStatus={toggleTodoStatus(id, { value, isDone, id })}
              />
            )
          })
        }
      </section>
    </main>
  )
}