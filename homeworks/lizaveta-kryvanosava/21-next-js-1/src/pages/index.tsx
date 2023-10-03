import { Inter } from 'next/font/google';
import Head from 'next/head';
import Link from 'next/link';
import { ToastContainer } from 'react-toastify';

import styles from '@/styles/Home.module.scss';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Avatar</title>
        <meta name="description" content="Avatar app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={`${styles.main} ${inter.className}`}>
        <Link href="./SSR">Server Side Rendering Page</Link>
        <Link href="./SSG">Static Site Generation Page</Link>

        <ToastContainer />
      </main>
    </>
  );
}
