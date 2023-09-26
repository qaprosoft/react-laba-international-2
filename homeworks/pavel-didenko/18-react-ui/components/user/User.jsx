const User = ({link, updateUserAvatar, index, loading}) => {
  const loadingStyles = {
    animation: 'spinner 1.5s linear infinite',
    opacity: '1',
    left: '30%',
    top: '30%'
};
  const staticStyles = {
    left: '50%',
    top: '50%',
  };

  return (
    <div className="user">
      <img className="user__foto" src={link} alt="user image" />
      <img
        className="user__refresh-foto"
        src="./assets/img/icons/update-user.svg"
        onClick={updateUserAvatar}
        index={index}
        style={loading ? loadingStyles : staticStyles}
      />
    </div>
  );
};
