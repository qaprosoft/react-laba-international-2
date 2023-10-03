import {getAvatars} from '@/api';
import Avatar from '@/components/avatar/Avatar';
import {AvatarResponse} from '@/types';
import {useState} from 'react';

import styles from './Home.module.css';

export type HomePageProps = {
  initialAvatars: AvatarResponse[];
};

const HomePage = ({initialAvatars}: HomePageProps) => {
  const [avatars, setAvatars] = useState<AvatarResponse[]>(initialAvatars);
  const addAvatar = async () => {
    const avatar = (await getAvatars())[0];
    setAvatars([...avatars, avatar]);
  };

  const refreshAvatar = async (custom_id: string) => {
    const newAvatar = (await getAvatars())[0];
    const updatedAvatars = avatars.map(avatar =>
      avatar.custom_id === custom_id ? newAvatar : avatar,
    );
    setAvatars(updatedAvatars);
  };

  const refreshAllAvatars = async () => {
    const avatarsCount = avatars.length;
    if (!avatarsCount) {
      return;
    }
    const newAvatars = await getAvatars(avatarsCount);
    setAvatars(newAvatars);
  };

  const deleteAvatar = (custom_id: string) => {
    const updatedAvatars = avatars.filter(
      avatar => avatar.custom_id !== custom_id,
    );
    setAvatars(updatedAvatars);
  };

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        {avatars.map(avatar => (
          <Avatar
            key={avatar.custom_id}
            avatar={avatar}
            refreshAvatar={() => refreshAvatar(avatar.custom_id)}
            deleteAvatar={() => deleteAvatar(avatar.custom_id)}
          />
        ))}
        <button className={styles.addAvatarBtn} onClick={addAvatar}></button>
      </div>
      <button className={styles.refreshAll} onClick={refreshAllAvatars}>
        Refresh all
      </button>
    </main>
  );
};

export default HomePage;
