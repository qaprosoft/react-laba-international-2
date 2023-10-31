import Link from 'next/link';
import styles from '../styles/homePage.module.css';

export default function HomePage({usersAvatars}) {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.header}>Welcome To The Home Page</h1>
      <div className={styles.linksWrapper}>
        <Link href="/ssg" className={styles.text}>
          SSG
        </Link>
        <Link href="/ssr" className={styles.text}>
          SSR
        </Link>
      </div>
    </div>
  );
}
