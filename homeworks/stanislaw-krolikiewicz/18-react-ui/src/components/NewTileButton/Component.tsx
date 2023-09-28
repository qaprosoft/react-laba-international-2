import addNewTile from 'public/assets/icons/addNewTile.svg';
import Image from 'next/image';

export default () => {
  return (
    <button className="transition hover:opacity-90 active:scale-95">
      <Image src={addNewTile} alt="Add new tile" height={240} width={240} />
    </button>
  );
};
