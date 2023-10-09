import '@/styles/globals.css';
import type {AppProps} from 'next/app';
import {Inter} from 'next/font/google';
import {TasksProvider} from '@/contexts/tasks';

const inter = Inter({subsets: ['latin']});

export default function App({Component, pageProps}: AppProps) {
  return (
    <TasksProvider>
      <div className={inter.className}>
        <Component {...pageProps} />
      </div>
    </TasksProvider>
  );
}
