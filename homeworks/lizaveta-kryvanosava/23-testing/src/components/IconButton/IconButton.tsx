import IIconButtonProps from '@/types/props/iconButtonProps';

import styles from './iconButton.module.scss';

export default function IconButton({
  onClickHandler,
  children,
  externalStyles,
}: IIconButtonProps) {
  return (
    <button
      className={`${styles.button} ${externalStyles}`}
      onClick={onClickHandler}
    >
      {children}
    </button>
  );
}
