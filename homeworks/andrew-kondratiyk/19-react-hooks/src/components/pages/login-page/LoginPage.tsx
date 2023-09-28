'use client';

import Link from 'next/link';
import styles from './LoginPage.module.css';
const LoginPage = () => {
  return (
    <main className={styles.registerPage}>
      <h1 className={styles.title}>Login</h1>
      <form className={styles.registerContainer}>
        <label htmlFor="email" className={styles.label}>
          Email
        </label>
        <input type="email" id="email" name="email" className={styles.input} />
        <label htmlFor="password" className={styles.label}>
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          className={styles.input}
        />

        <button className={styles.submitBtn}>Login</button>
      </form>
      <p className={styles.haveAccountText}>Do not have an account?</p>
      <Link href="/register" className={styles.haveAccountLink}>
        Create account
      </Link>
    </main>
  );
};

export default LoginPage;
