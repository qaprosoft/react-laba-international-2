import refresh from './../assets/images/refresh.svg';
import Image from 'next/image';

function Avatar({avatar, onRefresh}) {
  return (
    <div className="avatar__container" onClick={onRefresh}>
      <Image
        src={refresh}
        className="avatar__icon avatar__refresh"
        alt="Refresh avatar"
      />
      <Image
        className="avatar__img"
        src={avatar.url}
        alt={`${avatar.first_name} ${avatar.last_name}`}
        width={512}
        height={512}
      />
    </div>
  );
}
export default Avatar;
