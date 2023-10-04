import styles from './RefreshAllBtn.module.css';

const RefreshAllBt = ({handler}) => {
  return <button className={styles.refreshAllBtn} onClick={handler}></button>;
};

export default RefreshAllBt;
