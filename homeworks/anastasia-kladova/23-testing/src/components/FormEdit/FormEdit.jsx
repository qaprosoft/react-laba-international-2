import Input from '../Input/Input';
import IconButton from '../Buttons/IconButton/IconButton';
import styles from './FormEdit.module.css';

const FormEdit = ({value, handleEditingText, handleEditingTodo}) => {
  return (
    <form onSubmit={handleEditingTodo} className={styles.form}>
      <Input
        value={value}
        onInputChangeHandler={handleEditingText}
        classtype="todo__input--edit"
      />
      <IconButton type="submit" classType="iconBtn--approveEdit" />
    </form>
  );
};

export default FormEdit;
