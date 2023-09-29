'use client';

import Modal from '@/components/common/modal/Modal';
import {Session} from 'next-auth';
import {useRouter} from 'next/navigation';
import styles from './MainPage.module.css';
type MainPageProps = {
  session: Session | null;
};
const MainPage = ({session}: MainPageProps) => {
  const router = useRouter();
  const isLoggedIn = false;
  console.log(session);
  return (
    <main className={styles.container}>
      {isLoggedIn ? (
        <>
          <div className={styles.header}>
            <h1>Todos</h1>
            <div className={styles.buttons}>
              <button className={styles.button}>Clear finished todos</button>
              <button className={styles.button}>Clear all todos</button>
            </div>
          </div>
          <div className={styles.divider}></div>
        </>
      ) : (
        <Modal isOpen={true} title="Please, login to see your todos">
          <button
            className={styles.siginButton}
            onClick={() => router.push('/login')}
          >
            Sign in
          </button>
        </Modal>
      )}
    </main>
  );
};

export default MainPage;
