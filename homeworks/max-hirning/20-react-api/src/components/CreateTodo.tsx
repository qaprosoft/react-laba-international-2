import * as React from "react";
import { ITodo } from "../App";
import InputUI from "../UI/Input";
import { checkTodoValue } from "../functions/error";
import styles from "../styles/components/CreateTodo.module.css";

interface IProps {
  todos: ITodo[];
  addTodo: (todoEl: ITodo) => void;
}

export default function CreateTodoComponent({todos, addTodo}: IProps) {
  const [value, setValue] = React.useState<string>("");

  const createTodo = () => {
    checkTodoValue({value, todos}, () => {
      addTodo({
        value,
        isDone: false,
        id: (Date.now()).toString(),
      });
      setValue("");
    });
  }

  return (
    <div className={styles.container}>
      <InputUI
        value={value}
        placeholder='Create Todo-Task'
        changeValue={(value: string) => setValue(value)}
      />
      <button 
        onClick={createTodo}
        className={styles.button}
      >Add</button>
    </div>
  )
}