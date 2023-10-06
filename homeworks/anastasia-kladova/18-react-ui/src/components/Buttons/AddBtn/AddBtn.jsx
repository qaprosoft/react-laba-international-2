import styles from './AddBtn.module.css';

const AddBtn = ({handler, isLoading, setIsLoading}) => {
  return (
    <button
      className={styles.avatars__addBtn}
      type="button"
      disabled={isLoading}
      onClick={() => handler()}
    ></button>
  );
};

export default AddBtn;
