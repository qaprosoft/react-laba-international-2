import styles from "../styles/components/RefreshAllButton.module.css";

interface IProps {
  disabled: boolean;
  onClick: () => void;
}

export function RefreshAllButton({ disabled, onClick }: IProps) {
  return (
    <button 
      onClick={onClick}
      disabled={disabled}
      className={styles.button}
      style={(disabled) ? { opacity: 0.5 } : {}}
    >Refresh All</button>
  )
}