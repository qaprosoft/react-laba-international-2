import styles from './Form.module.css';
import Button from '../Buttons/Button/Button';
import {useContext, useEffect} from 'react';
import {Context} from '../../contexts/AppContext/AppContext';
import {useAddTodo} from '../../hooks/addTodoHook';

const Form = () => {
  const {currentInputText, setCurrentInputText, inputRef } =
    useContext(Context);

  const {addNewTodo} = useAddTodo();

  const handleCurrentInputValue = e => {
    setCurrentInputText(e.target.value);
  };

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <form className={styles.todo__form} onSubmit={addNewTodo} data-testid="form">
      <div className={styles.todo__error}>
      <input 
        className={styles.todo__input} 
        placeholder="Create Todo-Task"
        onChange={handleCurrentInputValue}
        value={currentInputText}
        ref={inputRef}
        data-testid="input"
        />
      </div>
      <Button type="submit" btnText="Add"/>
    </form>
  );
};

export default Form;
