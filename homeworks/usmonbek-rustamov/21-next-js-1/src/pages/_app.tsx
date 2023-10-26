import 'react-toastify/dist/ReactToastify.min.css';
import '@/styles/index.css';

import type {AppProps} from 'next/app';
import {ToastContainer} from 'react-toastify';

export default function App({Component, pageProps}: AppProps) {
  return (
    <main className="main">
      <div className="container">
        <Component {...pageProps} />
      </div>
      <ToastContainer />
    </main>
  );
}
