import styles from './addingTile.module.css';

type PropsType = {
  callback: () => void;
  isLoading: boolean;
};

export const AddingTile = ({callback, isLoading}: PropsType) => {
  const onClickHandler = () => {
    if (isLoading) return;
    callback();
  };

  return (
    <div className={styles.wrapper} onClick={onClickHandler}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="244"
        height="244"
        viewBox="0 0 244 244"
        fill="none"
      >
        <rect
          x="2"
          y="2"
          width="240"
          height="240"
          rx="6"
          stroke="#02CC67"
          strokeWidth="4"
        />
        <rect x="119" y="87" width="6" height="70" fill="#02CC67" />
        <rect
          x="157"
          y="119"
          width="6"
          height="70"
          transform="rotate(90 157 119)"
          fill="#02CC67"
        />
      </svg>
    </div>
  );
};
