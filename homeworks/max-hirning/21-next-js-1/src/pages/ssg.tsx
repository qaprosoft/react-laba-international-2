import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function SSG() {
  return (
    <>
      <Head>
        <title>SSG</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="SSG" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <h1>SSG</h1>
      </main>
    </>
  )
}
