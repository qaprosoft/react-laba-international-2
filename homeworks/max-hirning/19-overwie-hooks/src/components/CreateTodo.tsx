import InputUI from "../UI/Input";
import ButtonUI from "../UI/Button";
import { ITodo } from "../types/todo";
import { useState, useRef } from "react";
import { checkTodoValue } from "../validations/error";
import styles from "../styles/components/CreateTodo.module.css";

interface IProps {
  todos: ITodo[];
  addTodo: (todoEl: ITodo) => void;
}

export default function CreateTodoComponent({todos, addTodo}: IProps) {
  const [value, setValue] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);

  const createTodo = () => {
    (inputRef.current) && inputRef.current.focus();
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
        inputRef={inputRef}
        placeholder='Create Todo-Task'
        changeValue={(value: string) => setValue(value)}
      />
      <ButtonUI
        value="Add"
        buttonAction={createTodo}
      />
    </div>
  )
}