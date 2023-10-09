import styles from './FormEdit.module.css';

const FormEdit = ({value, handleEditingText, handleEditingTodo}) => {
  return (
    <form onSubmit={handleEditingTodo} className={styles.form}>
      <div className={styles.formEnter}>
        <input
          value={value}
          onChange={handleEditingText}
          className={styles.formField}
        />
      </div>
    </form>
  );
};

export default FormEdit;
