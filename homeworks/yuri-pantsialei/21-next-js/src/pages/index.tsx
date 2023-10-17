'use client';

import Head from 'next/head';
import {HomeComponent} from '@/components/Home/HomeComponent';

export default function Home() {
  return (
    <>
      <Head>
        <title>CSR - Next.js</title>
      </Head>
      <HomeComponent />
    </>
  );
}
