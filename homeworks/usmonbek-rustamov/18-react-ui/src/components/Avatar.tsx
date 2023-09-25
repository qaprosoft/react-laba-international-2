import {AvatarData} from '../http/avatars';
import refreshImg from '../assets/refresh.svg';

type AvatarProps = {
  isLoading: boolean;
  onRefreshAvatar: (id: number) => void;
} & AvatarData;

function Avatar({
  id,
  first_name,
  last_name,
  url,
  isLoading,
  onRefreshAvatar,
}: AvatarProps) {
  return (
    <li className="avatar">
      <img
        className="avatar__image"
        src={url}
        alt={`${first_name} ${last_name}`}
      />
      <button
        className={`btn btn-square avatar__btn-refresh ${
          isLoading ? 'avatar__btn-refresh_active' : ''
        }`}
        onClick={() => onRefreshAvatar(id)}
      >
        <div className={isLoading ? 'loader' : ''}>
          <img
            className="avatar__refresh-logo"
            src={refreshImg}
            alt="Refresh image"
          />
        </div>
      </button>
    </li>
  );
}
export default Avatar;
