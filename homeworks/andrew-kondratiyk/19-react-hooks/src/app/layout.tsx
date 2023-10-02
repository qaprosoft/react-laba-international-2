'use client';

import {ReactNode} from 'react';
import {Providers} from '@/context/Providers';
import {Inter} from 'next/font/google';

import '@/styles/global.css';
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer} from 'react-toastify';

const inter = Inter({subsets: ['latin']});

type Props = {
  children?: ReactNode;
};

export default function RootLayout({children}: Props) {
  return (
    <html lang="en">
      <Providers>
        <body className={inter.className}>
          {children}
          <ToastContainer />
        </body>
      </Providers>
    </html>
  );
}
