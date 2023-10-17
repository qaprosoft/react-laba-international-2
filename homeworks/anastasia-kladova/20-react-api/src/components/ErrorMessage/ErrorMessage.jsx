import styles from './ErrorMessage.module.css';

const ErrorMessage = ({errorText}) => {
  return <p className={styles.todo__errorMessage}>{errorText}</p>;
};

export default ErrorMessage;
