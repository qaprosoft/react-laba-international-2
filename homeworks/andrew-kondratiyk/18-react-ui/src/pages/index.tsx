import {getAvatar} from '@/api';
import Avatar from '@/components/avatar/Avatar';
import styles from '@/styles/Home.module.css';
import {type AvatarResponse} from '@/types';
import {useState} from 'react';

const Home = () => {
  const [avatars, setAvatars] = useState<AvatarResponse[]>([]);
  const addAvatar = async () => {
    const avatar = await getAvatar();
    setAvatars([...avatars, avatar]);
  };

  const refreshAvatar = async (id: number) => {
    const newAvatar = await getAvatar();
    const updatedAvatars = avatars.map(avatar =>
      avatar.id === id ? newAvatar : avatar,
    );
    setAvatars(updatedAvatars);
  };

  return (
    <main className={styles.main}>
      {avatars.map(avatar => (
        <Avatar key={avatar.id} avatar={avatar} refreshAvatar={refreshAvatar} />
      ))}
      <button className={styles.addAvatarBtn} onClick={addAvatar}></button>
    </main>
  );
};

export default Home;
