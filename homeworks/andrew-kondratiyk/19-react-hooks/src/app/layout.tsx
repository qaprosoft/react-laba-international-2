'use client';

import {SessionProvider} from 'next-auth/react';
import {Inter} from 'next/font/google';

import '@/styles/global.css';

const inter = Inter({subsets: ['latin']});

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider>{children}</SessionProvider>
      </body>
    </html>
  );
}
