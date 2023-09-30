import * as React from "react";
import InputUI from "../UI/Input";
import { TodosContext } from "../store/todos";
import { useStringValidation } from "../hooks/validation";
import styles from "../styles/components/CreateTodo.module.css";

export default function CreateTodoComponent() {
  const todos = React.useContext(TodosContext);
  const [value, setValue] = React.useState<string>("");
  const inputRef = React.useRef<HTMLInputElement>(null);
  const errorStatus: boolean = useStringValidation(value);

  const createTodo = () => {
    (inputRef.current) && inputRef.current.focus();
    todos?.addTodo(value);
    setValue("");
  }

  return (
    <div className={styles.container}>
      <InputUI
        value={value}
        inputRef={inputRef}
        placeholder='Create Todo-Task'
        changeValue={(value: string) => setValue(value)}
      />
      <button 
        style={{
          opacity: errorStatus ? 0.5 : 1,
          cursor: errorStatus ? "not-allowed" : "pointer",
        }}
        onClick={createTodo}
        disabled={errorStatus}
        className={styles.button}
      >Add</button>
    </div>
  )
}