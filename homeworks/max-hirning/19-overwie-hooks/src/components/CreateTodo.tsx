import { useState } from "react";
import InputUI from "../UI/Input";
import { ITodo } from "../types/todo";
import { checkTodoValue } from "../validations/error";
import styles from "../styles/components/CreateTodo.module.css";
import ButtonUI from "../UI/Button";

interface IProps {
  todos: ITodo[];
  addTodo: (todoEl: ITodo) => void;
}

export default function CreateTodoComponent({todos, addTodo}: IProps) {
  const [value, setValue] = useState<string>("");

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
      <ButtonUI
        value="Add"
        buttonAction={createTodo}
      />
    </div>
  )
}