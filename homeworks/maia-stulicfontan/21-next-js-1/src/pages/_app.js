import {useEffect} from 'react';
import {useRouter} from 'next/router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import '../styles/style.css';
import '../styles/media-queries.css';

NProgress.configure({showSpinner: false});

export default function MyApp({Component, pageProps}) {
  const router = useRouter();

  useEffect(() => {
    const handleStart = url => {
      console.log(`Loading: ${url}`);
      NProgress.start();
    };

    const handleStop = () => {
      NProgress.done();
    };

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleStop);
    router.events.on('routeChangeError', handleStop);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleStop);
      router.events.off('routeChangeError', handleStop);
    };
  }, [router]);

  return <Component {...pageProps} />;
}
