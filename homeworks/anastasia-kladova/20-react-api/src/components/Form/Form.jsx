import styles from './Form.module.css';
import Input from '../Input/Input';
import Button from '../Buttons/Button/Button';
import {useContext} from 'react';
import {Context} from '../../contexts/AppContext/AppContext';

import {useAddTodo} from '../../hooks/addTodoHook';

const Form = () => {
  const {currentInputText, setCurrentInputText, inputRef, state} =
    useContext(Context);

  const {addNewTodo} = useAddTodo();

  const handleCurrentInputValue = e => {
    setCurrentInputText(e.target.value);
  };

  return (
    <form className={styles.todo__form} onSubmit={addNewTodo}>
      <div className={styles.todo__error}>
        <Input
          placeholder="Create Todo-Task"
          onInputChangeHandler={handleCurrentInputValue}
          value={currentInputText}
          inputRef={inputRef}
        />
      </div>
      <Button type="submit" btnText="Add" />
    </form>
  );
};

export default Form;
