import '@/styles/globals.css';
import type {AppProps} from 'next/app';
import {Hind_Siliguri} from 'next/font/google';
import {TasksProvider} from '@/contexts/tasks';

const hindSiliguri = Hind_Siliguri({
  weight: '400',
  subsets: ['latin'],
});

export default function App({Component, pageProps}: AppProps) {
  return (
    <TasksProvider>
      <div className={hindSiliguri.className}>
        <Component {...pageProps} />
      </div>
    </TasksProvider>
  );
}
