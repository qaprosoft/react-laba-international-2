import styles from './Form.module.css';
import Input from '../Input/Input';
import Button from '../Buttons/Button/Button';
import {useContext} from 'react';
import {Context} from '../../contexts/AppContext/AppContext';
import {useValidateTodo} from '../../hooks/validateTodoHook';
import {ACTION_TYPES} from '../../state/actionTypes';
import {useAddTodo} from '../../hooks/deleteTodoHook';

const Form = () => {
  const {
    state,
    dispatch,
    currentInputText,
    setCurrentInputText,
    setErrorMessage,
    inputRef,
    setIsNewTodoValid,
  } = useContext(Context);

  const newTodo = currentInputText.trim();
  const {currentError} = useValidateTodo(newTodo, state.todos);

  const handleCurrentInputValue = e => {
    setCurrentInputText(e.target.value);
  };

  const addNewTodo = e => {
    e.preventDefault();

    if (!currentError) {
      dispatch({type: ACTION_TYPES.ADD_NEWTODO, payload: {newTodo: newTodo}});
      setCurrentInputText('');
      inputRef.current.focus();
      setIsNewTodoValid(false);
      setErrorMessage('');
    } else {
      setIsNewTodoValid(true);
      setErrorMessage(currentError);
      setCurrentInputText('');
    }
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
