import styles from '@/components/RefreshButton/refreshButton.module.scss';

export default function RefreshButton({
  updateAllAvatars,
}: {
  updateAllAvatars: () => Promise<void>;
}) {
  return (
    <div className={styles.refresh}>
      <button onClick={updateAllAvatars} className={styles['refresh-button']}>
        Refresh All
      </button>
    </div>
  );
}
