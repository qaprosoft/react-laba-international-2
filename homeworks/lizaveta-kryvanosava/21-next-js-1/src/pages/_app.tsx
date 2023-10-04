import '@/styles/globals.scss';
import 'react-toastify/dist/ReactToastify.css';

import type { AppProps } from 'next/app';
import NextNProgress from 'nextjs-progressbar';
import { ToastContainer } from 'react-toastify';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <NextNProgress height={10} />
      <ToastContainer />
    </>
  );
}
