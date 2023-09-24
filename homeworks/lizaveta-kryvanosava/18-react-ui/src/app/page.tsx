'use client';

import {useState} from 'react';
import styles from '@/app/page.module.scss';
import AddAvatar from '@/components/AddAvatar';
import RefreshButton from '@/components/RefreshButton';
import Avatar from '@/components/Avatar';
import getNewAvatar from '@/helpers/getNewAvatar';
import IAvatarResponse from '@/types/avatarResponse';

export default function Home() {
  const [avatars, setAvatars] = useState<Array<IAvatarResponse>>([]);

  const addNewAvatar = async () => {
    // try catch
    setAvatars([...avatars, ...(await getNewAvatar(1))]);
  };

  const updateAllAvatars = async () => {
    if (!avatars.length) return;

    // try catch
    const newAvatars = await getNewAvatar(avatars.length);
    setAvatars(newAvatars);
  };

  return (
    <main className={styles.main}>
      <div className={styles['main__avatars']}>
        {avatars.map(avatar => {
          return <Avatar avatar={avatar} key={avatar.id} />;
        })}
        <AddAvatar addNewAvatar={addNewAvatar} />
      </div>

      <RefreshButton text="Refresh All" clickHandler={updateAllAvatars} />
    </main>
  );
}
