import Link from 'next/link';

export default function Home() {
  return (
    <>
      <main>
        <div>
          <div style={{marginBottom: '20px'}}>
            <Link href="/ssg">SSG</Link>
          </div>
          <div style={{marginBottom: '20px'}}>
            <Link href="/ssr">SSR</Link>
          </div>
        </div>
      </main>
    </>
  );
}
