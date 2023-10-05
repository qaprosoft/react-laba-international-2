import {Inter} from 'next/font/google';
import Link from 'next/link';

const inter = Inter({subsets: ['latin']});

export default function Home() {
  return (
    <>
      <main>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-around',
            marginTop: '100px',
          }}
        >
          <div style={{marginBottom: '20px', color: 'blue'}}>
            <Link href="/SSG" style={{fontSize: '30px'}}>
              Static Site Generation
            </Link>
          </div>
          <div style={{marginBottom: '20px', color: 'red'}}>
            <Link href="/SSR" style={{fontSize: '30px'}}>
              Server-Side Rendering
            </Link>
          </div>
        </div>

        <h1 style={{textAlign: 'center', marginTop: '100px'}}>
          Welcome To The Home Page
        </h1>
      </main>
    </>
  );
}
