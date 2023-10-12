import '@/styles/globals.css';
import type {AppProps} from 'next/app';
import NextNProgress from 'nextjs-progressbar';
import {Basic} from 'next/font/google';
const basic = Basic({
  weight: '400',
  subsets: ['latin'],
});

export default function App({Component, pageProps}: AppProps) {
  return (
    <div className={basic.className}>
      <NextNProgress color="#02CC67" stopDelayMs={200} height={3} />
      <Component {...pageProps} />
    </div>
  );
}
