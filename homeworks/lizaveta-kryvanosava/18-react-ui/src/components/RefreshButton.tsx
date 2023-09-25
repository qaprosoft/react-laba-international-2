import styles from '@/components/refreshButton.module.scss';

export default function RefreshButton({
  text,
  clickHandler,
}: {
  text: string;
  clickHandler: () => void;
}) {
  return (
    <button onClick={clickHandler} className={styles.button}>
      {text}
    </button>
  );
}
