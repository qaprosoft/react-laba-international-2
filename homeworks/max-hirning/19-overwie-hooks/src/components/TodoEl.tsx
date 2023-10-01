import InputUI from "../UI/Input";
import IconButtonUI from "../UI/IconButton";
import { useState, useEffect, useRef } from "react";
import { checkTodoValue } from "../validations/error";
import styles from "../styles/components/TodoEl.module.css";

interface IProps {
  isDone: boolean;
  todoValue: string;
  deleteTodoEl: () => void;
  changeTodoDoneStatus: () => void;
  changeTodoEl: (newValue: string) => void;
}

export default function TodoElComponent({ isDone, todoValue, deleteTodoEl, changeTodoEl, changeTodoDoneStatus }: IProps) {
  const [value, setValue] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);
  const [isEditable, setIsEditable] = useState<boolean>(false);
  
  useEffect(() => {
    setValue(todoValue);
  }, [todoValue]);

  const editTodo = () => {
    if(!isEditable) {
      setIsEditable(true);
    } else {
      checkTodoValue({value}, () => {
        changeTodoEl(value);
        setIsEditable(false);
      })
    }
  }

  return (
    <div className={styles.container}>
      <InputUI
        value={value}
        customStyles={{ 
          cursor: isEditable ? "text" : "pointer", 
          backgroundColor: isEditable ? "yellow" : "#ECF3FF",
          textDecoration: (isDone && !isEditable) ? "line-through" : "auto",
        }}
        onClick={() => {
          if(!isEditable) changeTodoDoneStatus();
        }}
        inputRef={inputRef}
        readonly={!isEditable}
        changeValue={(newValue: string) => setValue(newValue)}
      />
      <div className={styles.buttonsGroup}>
        {
          (isEditable)
          ?
          <IconButtonUI
            iconType="save"
            buttonAction={editTodo}
          />
          :
          <IconButtonUI
            iconType="edit"
            buttonAction={editTodo}
          />
        }
        <IconButtonUI
          iconType="delete"
          buttonAction={deleteTodoEl}
        />
      </div>
    </div>
  )
}