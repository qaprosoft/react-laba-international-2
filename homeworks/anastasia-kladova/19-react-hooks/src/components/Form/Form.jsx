import styles from './Form.module.css';
import Input from '../Input/Input';
import AddButton from '../Buttons/AddButton/AddButton';
import {useContext} from 'react';
import {Context} from '../../contexts/AppContext/AppContext';
import {saveDataToStorage} from '../../utils/saveDataToStorage';

const Form = () => {
  const {currentInputText, setCurrentInputText, todos, setTodos} =
    useContext(Context);

  const handleCurrentInputValue = e => {
    setCurrentInputText(e.target.value);
  };

  const addNewTodo = e => {
    e.preventDefault();
    const newTodo = currentInputText.trim();
    if (newTodo) {
      let newTodos = [...todos, {text: newTodo, id: Date.now()}];
      setTodos(newTodos);
      setCurrentInputText('');
      saveDataToStorage(newTodos);
    }
  };

  return (
    <form className={styles.todo__form} onSubmit={addNewTodo}>
      <Input
        placeholder="Create Todo-Task"
        onInputChangeHandler={handleCurrentInputValue}
        value={currentInputText}
      />
      <AddButton type="submit" btnText="Add" />
    </form>
  );
};

export default Form;
