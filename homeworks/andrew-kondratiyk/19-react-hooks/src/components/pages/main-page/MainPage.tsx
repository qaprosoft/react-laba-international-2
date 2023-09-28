import styles from './MainPage.module.css';
const MainPage = () => {
  return (
    <main className={styles.container}>
      <div className={styles.header}>
        <h1>Todos</h1>
        <div className={styles.buttons}>
          <button>Clear finished todos</button>
          <button>Clear all todos</button>
        </div>
      </div>
      <div className={styles.divider}></div>
    </main>
  );
};

export default MainPage;
