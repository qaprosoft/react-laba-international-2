import Link from 'next/link';
import AvatarList from '../components/AvatarList/AvatarList';

export default function HomePage({ usersAvatars }) {
  return (
    <>
      <main className='app-container'>
        <div className='nav-container'>
          <div style={{ marginBottom: '20px' }}>
            <Link href="/ssg">SSG</Link>
          </div>
          <div style={{ marginBottom: '20px' }}>
            <Link href="/ssr">SSR</Link>
          </div>
        </div>

        <AvatarList usersAvatars={usersAvatars} />
      </main>
    </>
  );
}
