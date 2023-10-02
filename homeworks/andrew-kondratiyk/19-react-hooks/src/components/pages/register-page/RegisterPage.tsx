'use client';

import {ValidationError} from '@/types/validation-error';
import axios, {AxiosError} from 'axios';
import Link from 'next/link';
import {useRouter} from 'next/navigation';
import {FormEvent, useState} from 'react';
import {useMutation} from 'react-query';
import {toast} from 'react-toastify';
import styles from './RegisterPage.module.css';
const RegisterPage = () => {
  const router = useRouter();
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const {mutate} = useMutation({
    mutationFn: () => axios.post('/api/auth/register', {name, password}),
    onSuccess: () => {
      toast.success('You have successfully registered. Now you can log in');
      router.push('/login');
    },
    onError: (error: AxiosError<ValidationError>) => {
      toast.error(error.response?.data.message);
    },
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    mutate();
  };

  return (
    <main className={styles.registerPage}>
      <h1 className={styles.title}>Create Account</h1>
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
