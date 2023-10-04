import styles from './Button.module.css';

const Button = ({children, handler}) => {
  return (
    <button className={styles.btn} onClick={handler}>
      {children}
    </button>
  );
};

export default Button;
