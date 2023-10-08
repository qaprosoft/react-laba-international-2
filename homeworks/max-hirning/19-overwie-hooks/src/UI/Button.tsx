import styles from "../styles/UI/Button.module.css";

interface IProps {
  value: string;
  buttonAction: () => void;
}

export default function ButtonUI({value, buttonAction}: IProps) {
  return (
    <button 
      onClick={buttonAction}
      className={styles.button}
    >{value}</button>
  )
}