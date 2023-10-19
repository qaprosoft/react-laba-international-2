import Link from 'next/link';
import AvatarList from '../components/AvatarList';

export default function HomePage({ usersAvatars }) {
  return (
    <>
      <main>
        {/*         <div>
          <div style={{ marginBottom: '20px' }}>
            <Link href="/ssg">SSG</Link>
          </div>
          <div style={{ marginBottom: '20px' }}>
            <Link href="/ssr">SSR</Link>
          </div>
          <div>
            <Link href="/csr">CSR</Link>
          </div>
        </div> */}

        <AvatarList usersAvatars={usersAvatars} />
      </main>
    </>
  );
}
