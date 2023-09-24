import Image from 'next/image';

import styles from '@/components/avatar.module.scss';

import IAvatarResponse from '@/types/avatarResponse';
import {useState} from 'react';
import getNewAvatar from '@/helpers/getNewAvatar';
import refreshButton from '../../public/refresh.svg';
import Loader from './Loader';

export default function Avatar({avatar}: {avatar: IAvatarResponse}) {
  const [url, setUrl] = useState(avatar.url);
  const [isLoading, setIsLoading] = useState(false);

  const refreshAvatar = async () => {
    setIsLoading(true);
    // try catch finally
    // in finally  setIsLoading(false);
    const newAvatar = await getNewAvatar(1);
    setUrl(newAvatar[0].url);

    setIsLoading(false);
  };

  return isLoading ? (
    <Loader />
  ) : (
    <div className={styles.tile}>
      <Image
        className={styles['tile__image']}
        width={240}
        height={240}
        unoptimized
        src={url}
        alt="Avatar"
      />

      <div className={styles['tile__hidden']} onClick={refreshAvatar}>
        <Image
          className={styles['tile__refresh']}
          width={100}
          height={100}
          unoptimized
          src={refreshButton}
          alt="refresh"
        />
      </div>
    </div>
  );
}
