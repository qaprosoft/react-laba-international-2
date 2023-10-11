import styles from './Button.module.css';

const Button = ({type, btnText, onClickHandler}) => {
  return (
    <button
      className={styles.todo__btn}
      type={type}
      onClick={() => onClickHandler()}
    >
      {btnText}
    </button>
  );
};

export default Button;
