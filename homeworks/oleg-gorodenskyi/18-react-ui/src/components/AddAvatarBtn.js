import tile from '../assets/tile.svg';

const AddAvatarBtn = ({addAvatar}) => {
  return (
    <button className="tiles_btn" onClick={() => addAvatar()}>
      <img className="tiles_icon" src={tile} alt="tile" />
    </button>
  );
};

export default AddAvatarBtn;
