import styles from './AddButton.module.css';

const AddButton = ({type, btnText}) => {
  return (
    <button className={styles.todo__addBtn} type={type} data-testid="addBtn">
      {btnText}
    </button>
  );
};

export default AddButton;
