import Image from 'next/image';
import addIcon from '@/assets/icons/add.svg';

const AddAvatar = ({onClick}) => {
  return (
    <div className="tile addAvatar" onClick={onClick}>
      <Image
        className="tileIcon"
        src={addIcon}
        width="auto"
        height="auto"
        alt="add"
        style={{width: 'auto', height: 'auto'}}
      />
    </div>
  );
};

export default AddAvatar;
