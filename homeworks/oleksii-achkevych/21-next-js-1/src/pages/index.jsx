import Head from 'next/head';
import Image from 'next/image';
import {Inter} from 'next/font/google';
import styles from '@/styles/Home.module.css';
import HomePage from '@/components/HomePage/HomePage';
import Link from 'next/link';

const inter = Inter({subsets: ['latin']});

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <Link href="/ssg">SSG</Link>

        <Link href="/ssr">SSR</Link>
      </div>
    </>
  );
}
