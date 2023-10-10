import React, {useRef} from 'react';
import styles from './ToDoForm.module.css';
import TodoInput from '../ToDoInput/ToDoInput';
import TodoButton from '../ToDoButton/ToDoButton';
import useFocus from '../../helpers/useFocus';
import useEnterKeyPress from '../../helpers/useEnterKeyPress';

const ToDoForm = ({newToDo, setNewToDo, addToDo}) => {
  const inputRef = useRef(null);
  const [focusRef, focusInput] = useFocus();

  useEnterKeyPress(() => {
    handleAddClick();
  });

  const handleAddClick = () => {
    addToDo(inputRef);
    setNewToDo('');
    focusInput();
  };

  return (
    <div>
      <div className={styles.input_block}>
        <TodoInput
          value={newToDo}
          onChange={setNewToDo}
          ref={input => {
            inputRef.current = input;
            focusRef.current = input;
          }}
        />
        <TodoButton label="Add" onClick={handleAddClick} />
      </div>
    </div>
  );
};

export default ToDoForm;
