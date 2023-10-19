import {useContext, useEffect, useRef } from 'react';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import styles from './Input.module.css';
import {Context} from '../../contexts/AppContext/AppContext';

const Input = ({
  placeholder,
  value,
  onInputChangeHandler,
  classtype,
}) => {

  const ref = useRef(null);
  const {errorMessage, isNewTodoValid} = useContext(Context);

  useEffect(() => {
    ref.current.focus();
  }, []);

  return (
    <>
      <input
        className={classtype ? styles[classtype] : styles.todo__input}
        placeholder={placeholder}
        value={value}
        onChange={onInputChangeHandler}
        ref={ref}
        data-testid="input"
      />
      {errorMessage && isNewTodoValid && (
        <ErrorMessage errorText={errorMessage} data-testid="errorMessage"/>
      )}
    </>
  );
};

export default Input;
