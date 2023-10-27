type AddAvatarProps = {
  onAddAvatar: () => void;
};

function AddAvatarButton({onAddAvatar}: AddAvatarProps) {
  return (
    <button className="btn btn-square" onClick={onAddAvatar}>
      +
    </button>
  );
}
export default AddAvatarButton;
