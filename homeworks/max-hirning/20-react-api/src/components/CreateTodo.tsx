import * as React from "react";
import InputUI from "../UI/Input";
import { TodosContext } from "../store/todos"; 
import { checkTodoValue } from "../functions/error";
import styles from "../styles/components/CreateTodo.module.css";

export default function CreateTodoComponent() {
  const todos = React.useContext(TodosContext);
  const [value, setValue] = React.useState<string>("");
  const inputRef = React.useRef<HTMLInputElement>(null);

  const createTodo = () => {
    checkTodoValue({value, todos: todos?.todos}, () => {
      todos?.addTodo(value);
      setValue("");
    });
    console.log(inputRef.current);
    (inputRef.current) && inputRef.current.focus();
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
        onClick={createTodo}
        className={styles.button}
      >Add</button>
    </div>
  )
}