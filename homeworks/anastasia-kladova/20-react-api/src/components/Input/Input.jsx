import styles from './Input.module.css';

const Input = ({
  placeholder,
  value,
  onInputChangeHandler,
  classtype,
  inputRef,
}) => {
  return (
    <input
      className={classtype ? styles[classtype] : styles.todo__input}
      placeholder={placeholder}
      value={value}
      onChange={onInputChangeHandler}
      ref={inputRef}
    />
  );
};

export default Input;
