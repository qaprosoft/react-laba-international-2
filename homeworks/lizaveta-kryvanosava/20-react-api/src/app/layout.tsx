import './global.scss';
import 'react-toastify/dist/ReactToastify.css';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ReactNode } from 'react';
import { ToastContainer } from 'react-toastify';

import { ToDoProvider } from '@/context/toDoContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'To-Do',
  description: 'To-Do List with CRUD Operations',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <ToDoProvider>
        <body className={inter.className}>
          {children}

          <ToastContainer />
        </body>
      </ToDoProvider>
    </html>
  );
}
