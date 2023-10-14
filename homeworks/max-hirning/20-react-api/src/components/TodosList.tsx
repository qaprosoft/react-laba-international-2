import * as React from "react";
import TodoElComponent from "./TodoEl";
import { ITodo } from "../store/types";
import { TodosContext } from "../store/todos";
import styles from "../styles/components/TodosList.module.css";

export default function TodosListComponent() {
  const todos = React.useContext(TodosContext);

  return (
    <section className={styles.list}>
      {
        (todos?.todos||[]).map(({ value, isDone, id }: ITodo) => {
          return (
            <TodoElComponent
              id={id}
              key={id}
              value={value}
              isDone={isDone}
            />
          )
        })
      }
    </section>
  )
}