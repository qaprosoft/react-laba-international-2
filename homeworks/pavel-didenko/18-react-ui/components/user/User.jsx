const loadingStyles = {
  animation: 'spinner 1.5s linear infinite',
  opacity: '1',
  left: '30%',
  top: '30%',
};
const staticStyles = {
  left: '50%',
  top: '50%',
};

const User = ({link, updateUserAvatar, loading}) => {
  const [avatarUpdate, setAvatarUpdate] = useState(false);
  async function clickHandler(event) {
    setAvatarUpdate(true);
    await updateUserAvatar(event);
    setAvatarUpdate(false);
  }

  return (
    <div className="user">
      <img
        className="user__foto"
        src={link}
        alt="user image"
        onClick={clickHandler}
      />
      <img
        className="user__refresh-foto"
        src="./assets/img/icons/update-user.svg"
        style={loading || avatarUpdate ? loadingStyles : staticStyles}
        onClick={clickHandler}
      />
    </div>
  );
};
