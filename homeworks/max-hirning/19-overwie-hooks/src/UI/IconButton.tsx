import SaveIcon from "../assets/save.svg";
import EditIcon from "../assets/edit.svg";
import DeleteIcon from "../assets/delete.svg";
import styles from "../styles/UI/IconButton.module.css";

interface IProps {
  buttonAction: () => void;
  iconType: "edit"|"save"|"delete";
}

export default function IconButtonUI({ iconType, buttonAction }: IProps) {
  const buttonIcon = (): string => {
    switch(iconType) {
      case "edit":
        return EditIcon;
      case "save":
        return SaveIcon;
      case "delete":
        return DeleteIcon;
      default:
        throw new Error("Please, provide button iconType")
    }
  }

  const buttonIconAlt = (): string => {
    switch(iconType) {
      case "edit":
        return "edit todo";
      case "save":
        return "save changed todo";
      case "delete":
        return "delete todo";
      default:
        throw new Error("Please, provide button iconType")
    }
  }

  return (
    <button 
      onClick={buttonAction}
      className={styles.button}
    >
      <img
        style={{
          width: "56px",
          height: "53px",
        }}
        src={buttonIcon()}
        alt={buttonIconAlt()}
      />
      {/* <img
        style={{
          width: "56px",
          height: "53px",
        }}
        src={SaveIcon}
        onClick={editTodo}
        alt="save changed todo"
      />
      <img
        src={EditIcon}
        alt="edit todo"
        onClick={editTodo}
      /> 
      <img
        src={DeleteIcon}
        alt="delete todo"
        onClick={deleteTodoEl}
      /> */}
    </button>
  )
}