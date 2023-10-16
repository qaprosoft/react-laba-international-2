import Input from '../Input/Input';
import IconButton from '../Buttons/IconButton/IconButton';
import styles from './FormEdit.module.css';

const FormEdit = ({value, handleEditingText, handleEditingTodo}) => {
  return (
    <form onSubmit={handleEditingTodo} className={styles.form} data-testid="formEdit">
      <Input
        data-testid="input"
        value={value}
        onInputChangeHandler={handleEditingText}
        classtype="todo__input--edit"
      />
      <IconButton type="submit" classType="iconBtn--approveEdit" data-testid="submit"/>
      {/* <input
          value={value}
          onChange={handleEditingText}
          className={styles.formField}
        /> */}
    </form>
  );
};

export default FormEdit;
