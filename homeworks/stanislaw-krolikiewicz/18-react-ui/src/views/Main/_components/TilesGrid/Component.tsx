import {ReactElement} from 'react';
import {Button, NewTileButton} from '@/components';

interface Props {
  tiles: ReactElement[];
  addNewTile: () => void;
  fetchAvatars: () => void;
}

export default ({tiles, addNewTile, fetchAvatars}: Props) => {
  return (
    <>
      <div className="flex gap-[40px] w-full flex-wrap justify-center">
        {tiles.map((tile: ReactElement) => tile)}
        <NewTileButton onClick={addNewTile} />
      </div>
      <Button onClick={fetchAvatars} className="fixed bottom-[24px] z-50">
        Refresh All
      </Button>
    </>
  );
};
