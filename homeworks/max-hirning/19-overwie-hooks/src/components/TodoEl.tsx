import * as React from "react";
import { ITodo } from "../App";
import InputUI from "../UI/Input";
import SaveIcon from "../assets/save.svg";
import EditIcon from "../assets/edit.svg";
import DeleteIcon from "../assets/delete.svg";
import { checkTodoValue } from "../functions/error";
import styles from "../styles/components/TodoEl.module.css";

interface IProps {
  isDone: boolean;
  todoValue: string;
  deleteTodoEl: () => void;
  changeTodoDoneStatus: () => void;
  changeTodoEl: (newValue: string) => void;
}

export default function TodoElComponent({ isDone, todoValue, deleteTodoEl, changeTodoEl, changeTodoDoneStatus }: IProps) {
  const [value, setValue] = React.useState<string>("");
  const [isEditable, setIsEditable] = React.useState<boolean>(false);
  
  React.useEffect(() => {
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
          textDecoration: (isDone && !isEditable) ? "line-through" : "auto",
          backgroundColor: isEditable ? "yellow" : "#ECF3FF",
        }}
        onClick={() => {
          if(!isEditable) changeTodoDoneStatus();
        }}
        readonly={!isEditable}
        changeValue={(value: string) => setValue(value)}
      />
      <div className={styles.buttonsGroup}>
        {
          (isEditable)
          ?
          <img
            style={{
              width: "56px",
              height: "53px",
            }}
            src={SaveIcon}
            onClick={editTodo}
            alt="save changed todo"
            className={styles.button}
          />
          :
          <img
            src={EditIcon}
            alt="edit todo"
            onClick={editTodo}
            className={styles.button}
          /> 
        }
        <img
          src={DeleteIcon}
          alt="delete todo"
          onClick={deleteTodoEl}
          className={styles.button}
        />
      </div>
    </div>
  )
}