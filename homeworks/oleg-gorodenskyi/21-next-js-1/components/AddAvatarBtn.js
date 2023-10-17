import Image from 'next/image'

const AddAvatarBtn = ({addAvatar}) => {
  return (
    <button className="tiles_btn" onClick={() => addAvatar()}>
      <Image src='/tile.svg' alt="tile" width={240} height={240}/>
    </button>
  );
};

export default AddAvatarBtn;
