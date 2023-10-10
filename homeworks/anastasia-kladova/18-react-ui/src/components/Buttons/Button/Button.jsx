import styles from './Button.module.css';

const Button = ({children, handler, isLoading, setIsLoading}) => {
  return (
    <button
      className={styles.btn}
      type="button"
      disabled={isLoading}
      onClick={() => handler()}
    >
      {children}
    </button>
  );
};

export default Button;
