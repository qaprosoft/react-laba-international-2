import '@/styles/globals.css';
import type {AppProps} from 'next/app';
import {Hind_Siliguri} from 'next/font/google';
import {TasksProvider} from '@/contexts/TasksContext';
import {ErrorsProvider} from '@/contexts/ErrorsContext';

const hindSiliguri = Hind_Siliguri({
  weight: '400',
  subsets: ['latin'],
});

export default function App({Component, pageProps}: AppProps) {
  return (
    <ErrorsProvider>
      <TasksProvider>
        <div className={hindSiliguri.className}>
          <Component {...pageProps} />
        </div>
      </TasksProvider>
    </ErrorsProvider>
  );
}
