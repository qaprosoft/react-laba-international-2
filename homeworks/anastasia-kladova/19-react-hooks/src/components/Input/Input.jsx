import styles from './Input.module.css';

const Input = ({placeholder, value, onInputChangeHandler, classtype}) => {
  return (
    <input
      className={classtype ? styles[classtype] : styles.todo__input}
      placeholder={placeholder}
      value={value}
      onChange={onInputChangeHandler}
    />
  );
};

export default Input;
