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
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [selectedImages, setSelectedImages] = useState<
    Array<{id: number; index: number}>
  >([]);
  const [isSelectMode, setIsSelectMode] = useState<boolean>(false);

  const addOneImage = async () => {
    setIsLoading(true);
    const imageInfo = await getTinyfaces();
    setIsLoading(false);
    if (imageInfo.error) return;
    const {id, url, first_name, last_name} = imageInfo[0];
    setImages([...images, {id, url, fullname: `${first_name} ${last_name}`}]);
  };

  const updateOneImage = async (imageId: number, index: number) => {
    setIsLoading(true);
    const imageInfo = await getTinyfaces();
    setIsLoading(false);
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
    setIsLoading(true);
    const newImages = await getTinyfaces(images.length);
    setIsLoading(false);
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

  const selectTile = (tileId: number, tileIndex: number) => {
    const isAlreadySelected = selectedImages.findIndex(
      image => image.index === tileIndex,
    );
    if (isAlreadySelected >= 0) {
      setSelectedImages(
        selectedImages.filter(image => image.index !== tileIndex),
      );
      return;
    }
    setSelectedImages([...selectedImages, {id: tileId, index: tileIndex}]);
  };

  const toggleSelectMode = () => {
    if (isSelectMode) {
      setSelectedImages([]);
      setIsSelectMode(false);
      return;
    }

    setIsSelectMode(true);
  };

  const refreshSelectedImages = async () => {
    setIsLoading(true);
    const newImages = await getTinyfaces(selectedImages.length);
    setIsLoading(false);
    if (!newImages) return;
    const imagesCopy = [...images];
    for (let i = 0; i < selectedImages.length; i++) {
      const {id, url, first_name, last_name} = newImages[i];
      imagesCopy.splice(selectedImages[i].index, 1, {
        id,
        url,
        fullname: `${first_name} ${last_name}`,
      });
    }
    setImages(imagesCopy);
    setSelectedImages([]);
    setIsSelectMode(false);
  };

  const deleteSelectedImages = () => {
    setImages(
      images.filter((image, index) => {
        for (let i = 0; i < selectedImages.length; i++) {
          if (selectedImages[i].index === index) {
            return false;
          }
        }
        return true;
      }),
    );
    setSelectedImages([]);
    setIsSelectMode(false);
  };

  return (
    <main className={styles.main}>
      <div className={styles.tiles_wrapper}>
        {images &&
          images.map((image, index) => {
            let isSelected = -1;
            if (isSelectMode) {
              isSelected = selectedImages.findIndex(
                selectedImage =>
                  selectedImage.id === image.id &&
                  selectedImage.index === index,
              );
            }
            return (
              <ImageTile
                key={image.id + index}
                imageId={image.id}
                index={index}
                imageUrl={image.url}
                fullname={image.fullname}
                refreshImage={updateOneImage}
                isLoading={isLoading}
                selectTile={selectTile}
                isSelectMode={isSelectMode}
                isSelected={isSelected > -1}
              />
            );
          })}
        <AddingTile callback={addOneImage} isLoading={isLoading} />
      </div>
      <div className={styles.button_wrapper}>
        <div>
          <Button
            text="Refresh All"
            callback={refreshAllImages}
            isDisabled={images.length === 0}
          />
          <Button
            text={
              isSelectMode
                ? `You selected ${selectedImages.length} tile(s)`
                : 'Select Tiles'
            }
            callback={toggleSelectMode}
            isDisabled={images.length === 0}
          />
        </div>
        <div>
          <Button
            text="Refresh Selected"
            callback={refreshSelectedImages}
            isDisabled={images.length === 0 || selectedImages.length === 0}
          />
          <Button
            text="Delete Selected"
            callback={deleteSelectedImages}
            isDisabled={images.length === 0 || selectedImages.length === 0}
          />
        </div>
      </div>
    </main>
  );
}
