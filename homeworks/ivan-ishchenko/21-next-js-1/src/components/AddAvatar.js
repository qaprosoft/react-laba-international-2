import Image from 'next/image';
import addIcon from '@/assets/icons/add.svg';

const AddAvatar = ({onClick}) => {
  return (
    <div className="tile addAvatar" onClick={onClick}>
      <Image
        className="tileIcon"
        src={addIcon}
        width={0}
        height={0}
        alt="add"
      />
    </div>
  );
};

export default AddAvatar;
