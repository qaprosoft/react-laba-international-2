import Link from 'next/link'
import Head from 'next/head'
import styles from "@/styles/Home.module.css";

export default function HeaderComponent() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link className={styles.link} href="/ssr">SSR</Link>
        <Link className={styles.link} href="/ssg">SSG</Link>
      </nav>
    </header>
  )
}