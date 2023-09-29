'use client';

import {Providers} from '@/context/Providers';
import {Inter} from 'next/font/google';

import '@/styles/global.css';
import {ReactNode} from 'react';

const inter = Inter({subsets: ['latin']});

type Props = {
  children?: ReactNode;
};

export default function RootLayout({children}: Props) {
  return (
    <html lang="en">
      <Providers>
        <body className={inter.className}>{children}</body>
      </Providers>
    </html>
  );
}
