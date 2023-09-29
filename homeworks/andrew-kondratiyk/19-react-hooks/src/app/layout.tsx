'use client';

import {NextAuthProvider} from '@/context/AuthProvider';
import {Session} from 'next-auth';
import {Inter} from 'next/font/google';

import '@/styles/global.css';
import {ReactNode} from 'react';
import {QueryClient, QueryClientProvider} from 'react-query';

const inter = Inter({subsets: ['latin']});

const queryClient = new QueryClient();

type Props = {
  children?: ReactNode;
};

export default function RootLayout({children}: Props) {
  return (
    <html lang="en">
      <NextAuthProvider>
        <QueryClientProvider client={queryClient}>
          <body className={inter.className}>{children}</body>
        </QueryClientProvider>
      </NextAuthProvider>
    </html>
  );
}
