import styles from './refreshButton.module.scss';

export default function RefreshButton({
  text,
  clickHandler,
}: {
  text: string;
  clickHandler: () => Promise<void>;
}) {
  return (
    <button onClick={clickHandler} className={styles.button}>
      {text}
    </button>
  );
}
