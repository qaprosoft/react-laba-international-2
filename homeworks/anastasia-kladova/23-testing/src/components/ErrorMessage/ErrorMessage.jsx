import styles from './ErrorMessage.module.css';

const ErrorMessage = ({errorText}) => {
  return <p className={styles.todo__errorMessage} data-testid="errorMessage">{errorText}</p>;
};

export default ErrorMessage;
