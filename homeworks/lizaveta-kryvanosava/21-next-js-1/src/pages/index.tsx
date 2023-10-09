import { Inter } from 'next/font/google';
import Head from 'next/head';
import Link from 'next/link';

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
        <nav className={styles.main__navigation}>
          <Link href="./ssr">Server Side Rendering Page</Link>
          <Link href="./ssg">Static Site Generation Page</Link>
        </nav>
      </main>
    </>
  );
}
