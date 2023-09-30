import * as React from "react";
import InputUI from "../UI/Input";
import { ITodo } from "../store/types";
import SaveIcon from "../assets/save.svg";
import EditIcon from "../assets/edit.svg";
import { TodosContext } from "../store/todos";
import DeleteIcon from "../assets/delete.svg";
import { checkTodoValue } from "../functions/error";
import styles from "../styles/components/TodoEl.module.css";

export default function TodoElComponent({ id, isDone, value }: ITodo) {
  const todos = React.useContext(TodosContext);
  const [newValue, setNewValue] = React.useState<string>("");
  const [isEditable, setIsEditable] = React.useState<boolean>(false);
  
  React.useEffect(() => {
    setNewValue(value);
  }, [value]);

  const editTodo = () => {
    if(!isEditable) {
      setIsEditable(true);
    } else {
      checkTodoValue({value: newValue}, () => {
        todos?.updateTodo(id, newValue);
        setIsEditable(false);
      })
    }
  }

  const deleteTodoEl = () => {
    todos?.deleteTodo(id);
  }

  const changeTodoDoneStatus = () => {
    todos?.toggleTodo(id);
  }

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
          if(!isEditable) changeTodoDoneStatus();
        }}
        readonly={!isEditable}
        changeValue={(newValue: string) => setNewValue(newValue)}
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