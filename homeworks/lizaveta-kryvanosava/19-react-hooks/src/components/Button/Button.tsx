import IButtonProps from '@/types/buttonProps';

import styles from './button.module.scss';

export default function Button({
  onClickHandler,
  text,
  externalStyles,
}: IButtonProps) {
  return (
    <button
      className={`${styles.button} ${externalStyles}`}
      onClick={onClickHandler}
    >
      {text}
    </button>
  );
}
