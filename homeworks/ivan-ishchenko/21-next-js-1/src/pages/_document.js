import {Html, Head, Main, NextScript} from 'next/document';
import Link from 'next/link';

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <div className="menu">
          <Link href="/" className="mr-10 font-bold">
            Home
          </Link>
          <Link href="ssr" className="mr-10 font-bold">
            SSR
          </Link>
          <Link href="ssg" className="font-bold">
            SSG
          </Link>
        </div>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
