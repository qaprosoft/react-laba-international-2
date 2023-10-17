import React, {useState} from 'react';
import Avatar from '../Avatar/Avatar';
import AddButton from '../AddButton/AddButton';
import Button from '../Button/Button';

const API_URL = 'https://tinyfac.es/api/data?limit=1&quality=1';

const HomePage = ({avatars}) => {
  const [isAddButtonLoading, setIsAddButtonLoading] = useState(false);
  const [avatarList, setAvatarList] = useState(avatars);

  const refreshAvatar = async avatarId => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      const newAvatar = data[0];

      const updatedAvatars = avatarList.map(avatar =>
        avatar.id === avatarId ? newAvatar : avatar,
      );
      setAvatarList(updatedAvatars);
    } catch (error) {
      console.error('error:', error);
    }
  };

  const addRandomAvatarTile = async () => {
    setIsAddButtonLoading(true);
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      const newAvatar = data[0];

      setAvatarList([...avatarList, newAvatar]);
    } catch (error) {
      console.error('error:', error);
    } finally {
      setIsAddButtonLoading(false);
    }
  };

  return (
    <div className="App">
      <div className="avatar-container">
        {avatarList.map(avatar => (
          <Avatar
            key={avatar.id}
            avatarUrl={avatar.url}
            refreshAvatar={() => refreshAvatar(avatar.id)}
          />
        ))}
        {avatarList.length > 0 && (
          <AddButton
            onClick={addRandomAvatarTile}
            isLoading={isAddButtonLoading}
          />
        )}
      </div>
      <Button onClick={addRandomAvatarTile} text="Update" isLoading={false} />
    </div>
  );
};

export default HomePage;
