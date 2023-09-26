const Avatar = ({avatars, animationRefreshIcon, replaceAvatar}) => {
  return avatars.map((photo, index) => (
    <div
      className={`icon_wrapper ${
        animationRefreshIcon ? 'start_animation' : ''
      }`}
      key={index}
      onClick={() => replaceAvatar(index)}
    >
      <img src={photo.url} alt="avatar" className="tiles_avatar" />
    </div>
  ));
};

export default Avatar;
