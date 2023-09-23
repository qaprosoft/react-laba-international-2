import styles from './button.module.css';

type PropsType = {
  text: string;
  callback: () => void;
  imageCount: number;
};

export const Button = ({text, callback, imageCount}: PropsType) => {
  const onClickHandler = () => {
    if (imageCount === 0) return;
    callback();
  };

  return (
    <div
      className={`${styles.wrapper} ${imageCount === 0 ? styles.disabled : ''}`}
      onClick={onClickHandler}
    >
      {text}
    </div>
  );
};
