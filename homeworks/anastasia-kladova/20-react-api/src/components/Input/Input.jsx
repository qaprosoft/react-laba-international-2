import {useContext} from 'react';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import styles from './Input.module.css';
import {Context} from '../../contexts/AppContext/AppContext';

const Input = ({
  placeholder,
  value,
  onInputChangeHandler,
  classtype,
  inputRef,
}) => {
  const {errorMessage, isNewTodoValid} = useContext(Context);
  return (
    <>
      <input
        className={classtype ? styles[classtype] : styles.todo__input}
        placeholder={placeholder}
        value={value}
        onChange={onInputChangeHandler}
        ref={inputRef}
      />
      {errorMessage && isNewTodoValid && (
        <ErrorMessage errorText={errorMessage} />
      )}
    </>
  );
};

export default Input;
