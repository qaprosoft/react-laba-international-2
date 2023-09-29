'use client';

import {signIn} from 'next-auth/react';
import Link from 'next/link';
import {useRouter} from 'next/navigation';
import {FormEvent, useState} from 'react';
import {useMutation} from 'react-query';
import styles from './LoginPage.module.css';
const LoginPage = () => {
  const router = useRouter();
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const {mutate} = useMutation({
    mutationFn: () => signIn('credentials', {name, password, redirect: false}),
    onSuccess: () => {
      router.push('/');
    },
    onError: error => {
      console.log(error);
    },
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    mutate();
  };

  return (
    <main className={styles.registerPage}>
      <h1 className={styles.title}>Login</h1>
      <form className={styles.registerContainer} onSubmit={handleSubmit}>
        <label htmlFor="email" className={styles.label}>
          Name
        </label>
        <input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
          id="name"
          name="name"
          className={styles.input}
        />
        <label htmlFor="password" className={styles.label}>
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          className={styles.input}
          value={password}
          onChange={e => setPassword(e.target.value)}
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
