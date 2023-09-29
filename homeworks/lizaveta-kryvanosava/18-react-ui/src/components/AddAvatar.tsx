'use client';

import { useState } from 'react';
import { toast } from 'react-toastify';

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
      toast.error(`${error}`);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return <Loader />;
  }
  return (
    <div className={styles.tile} onClick={clickHandler}>
      <button className={styles.tile__button}></button>
    </div>
  );
}
