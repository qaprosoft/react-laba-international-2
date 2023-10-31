import App from '@/components/App/App';
import {fetchAvatars} from '@/helpers/fetchAvatars';
import Link from 'next/link';
import styles from '../styles/page.module.css';

export async function getServerSideProps() {
  const avatars = await fetchAvatars(5);

  return {
    props: {
      avatars,
    },
  };
}

const SSR = ({avatars = []}) => {
  return (
    <div className={styles.wrapper}>
      <App avatars={avatars} />
      <Link href="." className={styles.link}>
        Back to home
      </Link>
    </div>
  );
};

export default SSR;
