import * as React from "react";
import { ITodo } from "../App";
import InputUI from "../UI/Input";
import styles from "../styles/components/CreateTodo.module.css";

interface IProps {
  addTodo: (todoEl: ITodo) => void;
}

export default function CreateTodoComponent({addTodo}: IProps) {
  const [value, setValue] = React.useState<string>("");

  const createTodo = () => {
    if(value.length > 0) {
      addTodo({
        value,
        isDone: false,
        id: (Date.now()).toString(),
      });
      setValue("");
    } else {
      alert("You can't create empty todo");
    }
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