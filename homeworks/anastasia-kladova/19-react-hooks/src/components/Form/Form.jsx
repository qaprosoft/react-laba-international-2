import styles from './Input.module.css';
import Input from '../Input/Input';

const Form = ({onFormSubmitHandler}) => {
  return (
    <form className={styles.todo__form} onSubmit={onFormSubmitHandler}>
      <Input />
    </form>
  );
};

export default Form;
