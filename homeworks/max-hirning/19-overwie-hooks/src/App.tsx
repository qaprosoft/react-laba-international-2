import * as React from "react";
import styles from "./App.module.css";
import TodoElComponent from "./components/TodoEl";
import CreateTodoComponent from './components/CreateTodo';

export interface ITodo {
  id: string;
  value: string;
  isDone: boolean;
}

export default function App() {
  const [list, setList] = React.useState<ITodo[]>([]);

  React.useEffect(() => {
    const result = localStorage.getItem("todos");
    if(result) setList(JSON.parse(result));
  }, []);

  React.useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(list));
  }, [list]);

  return (
    <main className={styles.main}>
      <CreateTodoComponent
        addTodo={(todoEl: ITodo) => {
          setList((state: ITodo[]) => ([...state, todoEl]))
        }}
      />
      <section className={styles.list}>
        {
          list.map(({ value, isDone, id }: ITodo, index: number) => {
            return (
              <TodoElComponent
                key={id}
                todoValue={value}
                deleteTodoEl={() => {
                  setList((state: ITodo[]) => state.filter((todo: ITodo) => todo.id !== id))
                }}
                changeTodoEl={(newValue: string) => {
                  setList((state: ITodo[]) => {
                    const stateClone = [...state];
                    const changeTodoId = stateClone.findIndex((todo: ITodo) => todo.id === id);
                    if(changeTodoId !== -1) stateClone.splice(index, 1, {value: newValue, isDone, id});
                    return stateClone;
                  })
                }}
              />
            )
          })
        }
      </section>
    </main>
  )
}