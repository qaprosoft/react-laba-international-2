'use client';

import Modal from '@/components/common/modal/Modal';
import {signOut, useSession} from 'next-auth/react';
import {useRouter} from 'next/navigation';
import styles from './MainPage.module.css';
const MainPage = () => {
  const router = useRouter();
  const session = useSession();
  const isLoggedIn = session.status === 'authenticated';
  return (
    <main className={styles.container}>
      {isLoggedIn ? (
        <>
          <div className={styles.header}>
            <h1>Todos</h1>
            <div className={styles.buttons}>
              <button className={styles.button}>Clear finished todos</button>
              <button className={styles.button}>Clear all todos</button>
              <button className={styles.button} onClick={() => signOut()}>
                Sign out
              </button>
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
