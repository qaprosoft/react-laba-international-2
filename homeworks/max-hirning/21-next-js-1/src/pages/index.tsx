import Head from 'next/head'
import HeaderComponent from '@/components/Header';

export default function Home() {
  return (
    <>
      <Head>
        <title>Tiles</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Tiles" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <HeaderComponent/>
    </>
  )
}
