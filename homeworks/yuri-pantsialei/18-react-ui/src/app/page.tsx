'use client';

import styles from './page.module.css';
import {useState} from 'react';
import {getTinyfaces} from '../HTTP/tinyfaces';
import {AddingTile} from '@/components/AddingTile/AddingTile';
import {ImageTile} from '@/components/ImageTile/ImageTile';
import {Button} from '@/components/Button/Button';

type ImageType = {
  id: number;
  url: string;
  first_name: string;
  last_name: string;
};

export default function Home() {
  const [images, setImages] = useState<
    Array<{id: number; url: string; fullname: string}>
  >([]);

  const addOneImage = async () => {
    const imageInfo = await getTinyfaces();
    if (!imageInfo) return;
    const {id, url, first_name, last_name} = imageInfo[0];
    setImages([...images, {id, url, fullname: `${first_name} ${last_name}`}]);
  };

  const updateOneImage = async (imageId: number, index: number) => {
    const imageInfo = await getTinyfaces();
    if (!imageInfo) return;
    const {id, url, first_name, last_name} = imageInfo[0];

    setImages(
      images.map((image, i) => {
        if (image.id === imageId && index === i) {
          return {
            id,
            url,
            fullname: `${first_name} ${last_name}`,
          };
        }
        return image;
      }),
    );
  };

  const refreshAllImages = async () => {
    const newImages = await getTinyfaces(images.length);
    if (!newImages) return;
    setImages(
      newImages.map((image: ImageType) => {
        return {
          id: image.id,
          url: image.url,
          fullname: `${image.first_name} ${image.last_name}`,
        };
      }),
    );
  };

  return (
    <main className={styles.main}>
      <div className={styles.tiles_wrapper}>
        {images &&
          images.map((image, index) => {
            return (
              <ImageTile
                key={image.id + index}
                imageId={image.id}
                index={index}
                imageUrl={image.url}
                fullname={image.fullname}
                refreshImage={updateOneImage}
              />
            );
          })}
        <AddingTile onClickHandler={addOneImage} />
      </div>
      <div className={styles.button_wrapper}>
        <Button
          text="Refresh All"
          callback={refreshAllImages}
          imageCount={images.length}
        />
      </div>
    </main>
  );
}
