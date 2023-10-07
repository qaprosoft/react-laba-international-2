import styles from './Input.module.css';

const Input = ({placeholder, value, onInputChangeHandler}) => {
  return (
    <input
      className={styles.todo__input}
      placeholder={placeholder}
      value={value}
      onChange={onInputChangeHandler}
    />
  );
};

export default Input;
