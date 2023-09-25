import './global.scss';

import type {Metadata} from 'next';
import {Inter} from 'next/font/google';
import React from 'react';

const inter = Inter({subsets: ['latin']});

export const metadata: Metadata = {
  title: 'Avatar App',
  description: 'Generate random avatar',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
