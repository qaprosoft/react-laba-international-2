import React, {useState, useEffect, useCallback, useRef} from 'react';
import axios from 'axios';
import AddButton from "../AddButton/AddButton";
import Avatar from "../Avatar/Avatar";
import Button from "../Button/Button";

const API_URL = 'https://tinyfac.es/api/data';

const HomePage = () => {
  const [avatars, setAvatars] = useState([]);
  const [addedAvatarsCount, setAddedAvatarsCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [isAddButtonLoading, setIsAddButtonLoading] = useState(false);

  const fetchAvatars = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        `${API_URL}?limit=${20 + addedAvatarsCount}&quality=0`,
      );
      setAvatars(
        response.data.map((avatarData, index) => ({...avatarData, id: index})),
      );
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }, [addedAvatarsCount]);

  const fetchAvatarsRef = useRef(fetchAvatars);

  useEffect(() => {
    fetchAvatarsRef.current();
  }, []);

  const refreshAvatar = async id => {
    try {
      const response = await axios.get(`${API_URL}?limit=1&quality=0`);
      setAvatars(prevAvatars => {
        const newAvatars = [...prevAvatars];
        const index = newAvatars.findIndex(avatar => avatar.id === id);
        if (index !== -1) {
          newAvatars[index] = {...response.data[0], id};
        }
        return newAvatars;
      });
    } catch (error) {
      console.error(error);
    }
  };

  const addRandomAvatarTile = async () => {
    setIsAddButtonLoading(true);
    try {
      const response = await axios.get(`${API_URL}?limit=1&quality=0`);
      const newAvatar = {...response.data[0], id: avatars.length};
      setAvatars(prevAvatars => [...prevAvatars, newAvatar]);
      setAddedAvatarsCount(count => count + 1);
    } catch (error) {
      console.error(error);
    } finally {
      setIsAddButtonLoading(false);
    }
  };

  return (
    <div className="App">
      <div className="avatar-container">
        {avatars.map(avatar => (
          <Avatar
            key={avatar.id}
            avatarUrl={avatar.url}
            refreshAvatar={() => refreshAvatar(avatar.id)}
          />
        ))}
        {avatars.length > 0 && (
          <AddButton
            onClick={addRandomAvatarTile}
            isLoading={isAddButtonLoading}
          />
        )}
      </div>
      <Button onClick={fetchAvatars} text="Update" isLoading={isLoading} />
    </div>
  );
};

export default HomePage;

