import React, {useState} from 'react';
import Avatars from '@/components/Avatars/Avatars';
import Button from '@/components/Button/Button';
import {fetchAvatars} from '@/helpers/fetchAvatars';
import Image from 'next/image';
import addAvatarImg from '../../assets/add_avatar.svg';
import styles from '../../styles/app.module.css';

function App({avatars}) {
  const [allAvatars, setAllAvatars] = useState(avatars);

  const addNewAvatar = async () => {
    try {
      const newAvatar = await fetchAvatars(1);
      setAllAvatars([...allAvatars, newAvatar]);
    } catch (error) {
      console.log(error);
    }
  };

  const refreshAvatar = async avatar => {
    try {
      const newAvatar = await fetchAvatars(1);
      const updatedAvatars = allAvatars.map((prevAvatar, index) => {
        return allAvatars.indexOf(avatar) === index ? newAvatar : prevAvatar;
      });
      setAllAvatars(updatedAvatars);
    } catch (error) {
      console.log(error);
    }
  };

  const refreshAllAvatars = async () => {
    try {
      const nextAvatars = await fetchAvatars(allAvatars.length);
      setAllAvatars(nextAvatars);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.avatars__wrapper}>
        <Avatars avatars={allAvatars} onRefresh={refreshAvatar} />
        <Button
          className={styles.btn + ' ' + styles.btn__add}
          onClick={addNewAvatar}
        >
          <Image
            src={addAvatarImg}
            alt="click to add"
            width={240}
            height={240}
          />
        </Button>
      </div>
      <div className={styles.btn__wrapper}>
        <Button
          className={styles.btn + ' ' + styles.btn__refresh}
          onClick={refreshAllAvatars}
        >
          Refresh All
        </Button>
      </div>
    </div>
  );
}

export default App;
