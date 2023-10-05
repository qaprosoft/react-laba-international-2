import styles from './Button.module.css';

const Button = ({children, handler}) => {
  return (
    <button className={styles.btn} type="button" onClick={() => handler()}>
      {children}
    </button>
  );
};

export default Button;
