import * as React from "react";
import styles from "./App.module.css";
import TodoElComponent from "./components/TodoEl";
import CreateTodoComponent from './components/CreateTodo';

export default function App() {
  const [list, setList] = React.useState<string[]>([]);

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
        addTodo={(todoEl: string) => {
          setList((state: string[]) => ([...state, todoEl]))
        }}
      />
      <section className={styles.list}>
        {
          list.map((el: string, index: number) => {
            return (
              <TodoElComponent
                key={index}
                todoValue={el}
                deleteTodoEl={() => {
                  setList((state: string[]) => state.filter((_: string, todoIndex: number) => todoIndex !== index))
                }}
                changeTodoEl={(value: string) => {
                  setList((state: string[]) => {
                    const stateClone = [...state];
                    stateClone.splice(index, 1, value);
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