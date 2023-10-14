import styles from './refreshAllUsersButton.module.css';

const RefreshAllUsersButton = ({refreshAllUsers}) => {
  return (
    <button className={styles['refresh-button']} onClick={refreshAllUsers}>
      Refresh All
    </button>
  );
};

export default RefreshAllUsersButton;
