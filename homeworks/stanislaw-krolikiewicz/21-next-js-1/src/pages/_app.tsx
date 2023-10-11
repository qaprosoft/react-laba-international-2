import '@/styles/globals.css';
import type {AppProps} from 'next/app';
import {Basic} from 'next/font/google';
const basic = Basic({
  weight: '400',
  subsets: ['latin'],
});

export default function App({Component, pageProps}: AppProps) {
  return (
    <div className={basic.className}>
      <Component {...pageProps} />
    </div>
  );
}
