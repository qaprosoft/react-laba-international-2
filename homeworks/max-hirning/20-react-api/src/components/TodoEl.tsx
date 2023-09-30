import * as React from "react";
import InputUI from "../UI/Input";
import { ITodo } from "../store/types";
import SaveIcon from "../assets/save.svg";
import EditIcon from "../assets/edit.svg";
import DeleteIcon from "../assets/delete.svg";
import { useTodoActions } from "../hooks/actions";
import { useStringValidation } from "../hooks/validation";
import styles from "../styles/components/TodoEl.module.css";

export default function TodoElComponent({ id, isDone, value }: ITodo) {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const [newValue, setNewValue] = React.useState<string>("");
  const errorStatus: boolean = useStringValidation(newValue);
  const { isEditable, editTodo, deleteTodoEl, changeTodoDoneStatus } = useTodoActions();

  React.useEffect(() => {
    if(inputRef.current) {
      if(isEditable) {
        inputRef.current.focus();
      } else {
        inputRef.current.blur();
      }
    }
  }, [isEditable]);

  React.useEffect(() => {
    setNewValue(value);
  }, [value]);

  return (
    <div className={styles.container}>
      <InputUI
        value={newValue}
        customStyles={{ 
          cursor: isEditable ? "text" : "pointer", 
          backgroundColor: isEditable ? "yellow" : "#ECF3FF",
          textDecoration: (isDone && !isEditable) ? "line-through" : "auto",
        }}
        onClick={() => {
          if(!isEditable) changeTodoDoneStatus(id);
        }}
        inputRef={inputRef}
        readonly={!isEditable}
        changeValue={(newValue: string) => setNewValue(newValue)}
      />
      <div className={styles.buttonsGroup}>
        {
          (isEditable)
          ?
          <button
            style={{
              opacity: errorStatus ? 0.5 : 1,
              cursor: errorStatus ? "not-allowed" : "pointer",
            }}
            disabled={errorStatus}
            className={styles.button}
            onClick={() => editTodo(id, value)}
          >
            <img
              style={{
                width: "56px",
                height: "53px",
              }}
              src={SaveIcon}
              alt="save changed todo"
              className={styles.icon}
            />
          </button>
          :
          <button
            className={styles.button}
            onClick={() => editTodo(id, value)}
          >
            <img
              src={EditIcon}
              alt="edit todo"
              className={styles.icon}
            /> 
          </button>
        }
        <button
          className={styles.button}
          onClick={() => deleteTodoEl(id)}
        >
          <img
            src={DeleteIcon}
            alt="delete todo"
            className={styles.icon}
          />
        </button>
      </div>
    </div>
  )
}