import * as React from "react";
import InputUI from "../UI/Input";
import styles from "../styles/components/CreateTodo.module.css";

interface IProps {
  addTodo: (todoEl: string) => void;
}

export default function CreateTodoComponent({addTodo}: IProps) {
  const [value, setValue] = React.useState<string>("");

  const createTodo = () => {
    addTodo(value);
    setValue("");
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