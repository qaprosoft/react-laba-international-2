import {useState} from 'react';
import {AvatarData, getAvatars} from '../http/avatars';
import Avatar from './Avatar';
import refreshImg from '../assets/refresh.svg';

function AvatarList() {
  const [avatarList, setAvatarList] = useState<AvatarData[]>([]);
  const [loadingAvatarsId, setLoadingAvatarsId] = useState<number[]>([]);

  const handleAddAvatar = async () => {
    try {
      setLoadingAvatarsId([-1]);
      const [newAvatar] = await getAvatars(1);

      setAvatarList(prevList => {
        return [...prevList, newAvatar];
      });
    } catch (error) {
      console.log(error);
    } finally {
      setLoadingAvatarsId([]);
    }
  };

  const handleRefreshAvatar = async (id: number) => {
    try {
      setLoadingAvatarsId([id]);
      const [newAvatar] = await getAvatars(1);

      setAvatarList(prevList => {
        return prevList.map(avatar => {
          if (avatar.id === id) {
            return newAvatar;
          }
          return avatar;
        });
      });
    } catch (error) {
      console.log(error);
    } finally {
      setLoadingAvatarsId([]);
    }
  };

  const handleRefreshAllAvatars = async () => {
    try {
      if (avatarList.length === 0) return;

      setLoadingAvatarsId(avatarList.map(avatar => avatar.id));
      const newAvatarList = await getAvatars(avatarList.length);
      setAvatarList(newAvatarList);
    } catch (error) {
      console.log(error);
    } finally {
      setLoadingAvatarsId([]);
    }
  };

  return (
    <section className="avatar-section">
      <ul className="avatar-list">
        {avatarList.map(avatar => (
          <Avatar
            key={avatar.id}
            id={avatar.id}
            first_name={avatar.first_name}
            last_name={avatar.last_name}
            url={avatar.url}
            isLoading={loadingAvatarsId.includes(avatar.id)}
            onRefreshAvatar={handleRefreshAvatar}
          />
        ))}
        <li className="avatar">
          {loadingAvatarsId.includes(-1) ? (
            <div className="loader">
              <img
                className="loader__image"
                src={refreshImg}
                alt="New avatar loading"
              />
            </div>
          ) : (
            <button className="btn btn-square" onClick={handleAddAvatar}>
              +
            </button>
          )}
        </li>
      </ul>

      <button className="btn btn-refresh" onClick={handleRefreshAllAvatars}>
        Refresh All
      </button>
    </section>
  );
}
export default AvatarList;
