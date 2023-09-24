'use client';

import {useState} from 'react';
import styles from './addAvatar.module.scss';
import Loader from './Loader';

export default function AddAvatar({
  addNewAvatar,
}: {
  addNewAvatar: () => Promise<void>;
}) {
  const [isLoading, setIsLoading] = useState(false);

  const clickHandler = async () => {
    setIsLoading(true);

    await addNewAvatar();

    setIsLoading(false);
  };

  return isLoading ? (
    <Loader />
  ) : (
    <button className={styles.tile} onClick={clickHandler}></button>
  );
}
