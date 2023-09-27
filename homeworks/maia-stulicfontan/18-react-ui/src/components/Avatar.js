import refresh from './../assets/images/refresh.svg';

function Avatar({avatar, onRefresh}) {
  return (
    <div className="avatar__container" onClick={onRefresh}>
      <img
        src={refresh}
        className="avatar__icon avatar__refresh"
        alt="Refresh avatar"
      ></img>
      <img className="avatar__img" src={avatar.url} alt="Avatar"></img>
    </div>
  );
}
export default Avatar;
