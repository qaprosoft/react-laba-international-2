import styles from './button.module.css';

type PropsType = {
  text: string;
  callback: () => void;
  isDisabled: boolean;
};

export const Button = ({text, callback, isDisabled}: PropsType) => {
  const onClickHandler = () => {
    if (isDisabled) return;
    callback();
  };

  return (
    <div
      className={`${styles.wrapper} ${isDisabled ? styles.disabled : ''}`}
      onClick={onClickHandler}
    >
      {text}
    </div>
  );
};
