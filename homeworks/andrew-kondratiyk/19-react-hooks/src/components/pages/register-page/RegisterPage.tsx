'use client';

import Link from 'next/link';
import styles from './RegisterPage.module.css';
const RegisterPage = () => {
  return (
    <main className={styles.registerPage}>
      <h1 className={styles.title}>Create Account</h1>
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

        <button className={styles.submitBtn}>Sign up</button>
      </form>
      <p className={styles.haveAccountText}>Already have an account?</p>
      <Link href="/login" className={styles.haveAccountLink}>
        Log in
      </Link>
    </main>
  );
};

export default RegisterPage;
