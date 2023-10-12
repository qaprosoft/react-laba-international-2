import styles from './Form.module.css';
import Input from '../Input/Input';
import Button from '../Buttons/Button/Button';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import {useContext} from 'react';
import {Context} from '../../contexts/AppContext/AppContext';
import {saveDataToStorage} from '../../utils/saveDataToStorage';
import {useValidateTodo} from '../../hooks/useValidateTodo';

const Form = () => {
  const {
    currentInputText,
    setCurrentInputText,
    todos,
    setTodos,
    setErrorMessage,
    setIsShowModal,
    inputRef,
    isNewTodoValid,
    setIsNewTodoValid,
    errorMessage,
  } = useContext(Context);

  const newTodo = currentInputText.trim();
  const {currentError} = useValidateTodo(newTodo, todos);

  const handleCurrentInputValue = e => {
    setCurrentInputText(e.target.value);
  };

  const addNewTodo = e => {
    e.preventDefault();

    if (!currentError) {
      let newTodos = [
        ...todos,
        {text: newTodo, id: Date.now(), isCompleted: false},
      ];
      setTodos(newTodos);
      setCurrentInputText('');
      saveDataToStorage(newTodos);
      inputRef.current.focus();
    } else {
      setIsNewTodoValid(true);
      setErrorMessage(currentError);
      setCurrentInputText('');
      setIsShowModal(true);
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
