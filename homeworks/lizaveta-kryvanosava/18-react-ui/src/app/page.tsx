'use client';

import {useState} from 'react';

import styles from '@/app/page.module.scss';
import AddAvatar from '@/components/AddAvatar';
import Avatar from '@/components/Avatar';
import RefreshButton from '@/components/RefreshButton';
import getNewAvatar from '@/helpers/getNewAvatar';
import IAvatarResponse from '@/types/avatarResponse';

export default function Home() {
  const [avatars, setAvatars] = useState<Array<IAvatarResponse>>([]);
  const [isRefreshing, setIsRefreshing] = useState<boolean>(false);

  const addNewAvatar = async () => {
    try {
      setAvatars([...avatars, ...(await getNewAvatar(1))]);
    } catch (error) {
      console.log(error);
    }
  };

  const updateAllAvatars = async () => {
    if (!avatars.length) return;

    setIsRefreshing(true);

    try {
      const newAvatars = await getNewAvatar(avatars.length);
      setAvatars(newAvatars);
    } catch (error) {
      console.log(error);
    } finally {
      setIsRefreshing(false);
    }
  };

  return (
    <main className={styles.main}>
      <section className={styles.main__avatars}>
        {avatars.map(avatar => {
          return (
            <Avatar
              avatar={avatar}
              isRefreshingAll={isRefreshing}
              key={avatar.id}
            />
          );
        })}
        <AddAvatar addNewAvatar={addNewAvatar} />
      </section>

      <section className={styles.main__refresh}>
        <RefreshButton text="Refresh All" clickHandler={updateAllAvatars} />
      </section>
    </main>
  );
}
