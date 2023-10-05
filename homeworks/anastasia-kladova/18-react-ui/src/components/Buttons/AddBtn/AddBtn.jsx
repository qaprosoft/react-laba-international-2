import styles from './AddBtn.module.css';

const AddBtn = ({handler}) => {
  return (
    <button
      className={styles.avatars__addBtn}
      type="button"
      onClick={() => handler()}
    ></button>
  );
};

export default AddBtn;
