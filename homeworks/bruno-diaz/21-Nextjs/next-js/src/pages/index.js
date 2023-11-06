import Link from 'next/link';


function Home() {
  return (
    <div>
      <h1>Avatar Tile App using Next.js</h1>
      <p>Here is my homework #23: create SSG and SSR pages using Next.js</p>
      <ul>
        <li>
          <Link href="/ssg">
            <h2>Página SSG</h2>
          </Link>
        </li>
        <li>
          <Link href="/ssr">
            <h2>Página SSR</h2>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Home;
