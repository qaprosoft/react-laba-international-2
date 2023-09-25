'use client';

import { useState } from 'react';

import styles from '@/components/addAvatar.module.scss';
import Loader from '@/components/Loader';

export default function AddAvatar({
  addNewAvatar,
}: {
  addNewAvatar: () => Promise<void>;
}) {
  const [isLoading, setIsLoading] = useState(false);

  const clickHandler = async () => {
    try {
      setIsLoading(true);

      await addNewAvatar();
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return isLoading ? (
    <Loader />
  ) : (
    <div className={styles.tile} onClick={clickHandler}>
      <button className={styles.tile__button}></button>
    </div>
  );
}
