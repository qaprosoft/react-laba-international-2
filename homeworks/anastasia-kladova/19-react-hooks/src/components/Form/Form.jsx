import styles from './Form.module.css';
import Input from '../Input/Input';
import AddButton from '../Buttons/AddButton/AddButton';

const Form = ({onFormSubmitHandler}) => {
  return (
    <form className={styles.todo__form} onSubmit={onFormSubmitHandler}>
      <Input placeholder="Create Todo-Task" />
      <AddButton type="submit" btnText="Add" />
    </form>
  );
};

export default Form;
