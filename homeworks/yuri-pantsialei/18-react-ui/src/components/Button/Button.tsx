import styles from './button.module.css';
import {PropsType} from './types';

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
