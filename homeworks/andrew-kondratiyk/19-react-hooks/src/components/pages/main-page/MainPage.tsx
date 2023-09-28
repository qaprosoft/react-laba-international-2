import EditTodoCard from '@/components/common/edit-todo-card/EditTodoCard';
import styles from './MainPage.module.css';
const MainPage = () => {
  return (
    <main className={styles.container}>
      <div className={styles.header}>
        <h1>Todos</h1>
        <div className={styles.buttons}>
          <button className={styles.button}>Clear finished todos</button>
          <button className={styles.button}>Clear all todos</button>
        </div>
      </div>
      <div className={styles.divider}></div>
    </main>
  );
};

export default MainPage;
