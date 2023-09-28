import * as React from "react";
import InputUI from "../UI/Input";
import EditIcon from "../assets/edit.svg";
import DeleteIcon from "../assets/delete.svg";
import styles from "../styles/components/TodoEl.module.css";

interface IProps {
  todoValue: string;
  deleteTodoEl: () => void;
  changeTodoEl: (newValue: string) => void;
}

export default function TodoElComponent({ todoValue, deleteTodoEl, changeTodoEl }: IProps) {
  const [value, setValue] = React.useState<string>("");
  const [isEditable, setIsEditable] = React.useState<boolean>(false);
  
  React.useEffect(() => {
    setValue(todoValue);
  }, [todoValue]);

  const editTodo = () => {
    if(isEditable) {
      changeTodoEl(value);
    }
    setIsEditable((state: boolean) => !state);
    // inputRef.current.focus();
  }

  return (
    <div className={styles.container}>
      <InputUI
        value={value}
        readonly={!isEditable}
        customStyles={{ cursor: "inherit" }}
        changeValue={(value: string) => setValue(value)}
      />
      <div className={styles.buttonsGroup}>
        <img
          src={EditIcon}
          alt="edit todo"
          onClick={editTodo}
          className={styles.button}
        />
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