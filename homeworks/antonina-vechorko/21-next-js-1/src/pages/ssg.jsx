import {fetchAvatars} from '@/helpers/fetchAvatars';
import App from '@/components/App/App';
import Link from 'next/link';
import styles from '../styles/page.module.css';

export async function getStaticProps() {
  const avatars = await fetchAvatars(5);

  return {
    props: {
      avatars,
    },
  };
}

const SSG = ({avatars = []}) => {
  return (
    <div className={styles.wrapper}>
      <App avatars={avatars} />
      <Link href="." className={styles.link}>
        Back to home
      </Link>
    </div>
  );
};

export default SSG;
