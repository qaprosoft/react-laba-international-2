import {useState} from 'react';
import {toast} from 'react-toastify';
import {getAvatars} from '@/http/avatars';
import {AvatarData} from '@/common/types';

import Avatar from './Avatar';
import AddAvatarButton from './AddAvatarButton';
import RefreshAllAvatarsButton from './RefreshAllAvatarsButton';
import Loader from '../Loader';

interface Props {
  preloadedAvatars?: AvatarData[];
}

function AvatarList({preloadedAvatars = []}: Props) {
  const [avatarList, setAvatarList] = useState<AvatarData[]>(preloadedAvatars);
  const [loadingAvatarsId, setLoadingAvatarsId] = useState<number[]>([]);

  const handleAddAvatar = async () => {
    try {
      setLoadingAvatarsId([-1]);
      const [newAvatar] = await getAvatars(1);

      setAvatarList(prevList => {
        return [...prevList, newAvatar];
      });
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      }
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
      if (error instanceof Error) {
        toast.error(error.message);
      }
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
      if (error instanceof Error) {
        toast.error(error.message);
      }
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
            firstName={avatar.first_name}
            lastName={avatar.last_name}
            url={avatar.url}
            isLoading={loadingAvatarsId.includes(avatar.id)}
            onRefreshAvatar={handleRefreshAvatar}
          />
        ))}
        <li className="avatar">
          {loadingAvatarsId.includes(-1) ? (
            <Loader />
          ) : (
            <AddAvatarButton onAddAvatar={handleAddAvatar} />
          )}
        </li>
      </ul>

      <RefreshAllAvatarsButton onRefreshAllAvatars={handleRefreshAllAvatars} />
    </section>
  );
}
export default AvatarList;
