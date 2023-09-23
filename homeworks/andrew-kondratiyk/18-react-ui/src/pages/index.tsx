import {getAvatar} from '@/api';
import styles from '@/styles/Home.module.css';
import {type AvatarResponse} from '@/types';
import Image from 'next/image';
import {useEffect, useState} from 'react';

export default function Home() {
  const [avatars, setAvatars] = useState<AvatarResponse[]>([]);
  const handleAddAvatar = async () => {
    const avatar = await getAvatar();
    setAvatars([...avatars, avatar]);
  };

  return (
    <main className={styles.main}>
      {avatars.map(avatar => (
        <div className={styles.avatar} key={avatar.id}>
          <Image
            width={240}
            height={240}
            src={avatar.url}
            alt={avatar.first_name}
          />
        </div>
      ))}
      <button
        className={styles.addAvatarBtn}
        onClick={handleAddAvatar}
      ></button>
    </main>
  );
}
