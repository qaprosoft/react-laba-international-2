import styles from './IconButton.module.css';

const IconButton = ({type, onBtnClickHandler, classType}) => {
  return (
    <button
      className={`todo__todo-iconBtn ${styles.iconBtn} ${styles[classType]}`}
      type={type}
      onClick={onBtnClickHandler}
    ></button>
  );
};

export default IconButton;
