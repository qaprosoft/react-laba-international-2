import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';
import Avatar from '../src/сomponents/Avatar/Avatar';

const API_URL = 'https://tinyfac.es/api/data';

const App = () => {
  const [avatars, setAvatars] = useState([]);
  const [addedAvatarsCount, setAddedAvatarsCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [isUpdateButtonLoading, setIsUpdateButtonLoading] = useState(false);
  const [isAddButtonLoading, setIsAddButtonLoading] = useState(false);

  useEffect(() => {
    fetchAvatars();
  }, []);

  const fetchAvatars = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        `${API_URL}?limit=${20 + addedAvatarsCount}&quality=0`,
      );
      setAvatars(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const refreshAvatar = async index => {
    try {
      const response = await axios.get(`${API_URL}?limit=1&quality=0`);
      setAvatars(prevAvatars => {
        const newAvatars = [...prevAvatars];
        newAvatars[index] = response.data[0];
        return newAvatars;
      });
    } catch (error) {
      console.error(error);
    }
  };

  const refreshAllAvatars = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        `${API_URL}?limit=${20 + addedAvatarsCount}&quality=0`,
      );
      setAvatars(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const addRandomAvatarTile = async () => {
    setIsAddButtonLoading(true);
    try {
      const response = await axios.get(`${API_URL}?limit=1&quality=0`);
      setAvatars([...avatars, response.data[0]]);
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
        {avatars.map((avatar, index) => (
          <Avatar
            key={index}
            avatarUrl={avatar.url}
            refreshAvatar={() => refreshAvatar(index)}
          />
        ))}
        {avatars.length > 0 && (
          <button
            className="empty-square-button"
            onClick={addRandomAvatarTile}
            style={{display: isAddButtonLoading ? 'none' : 'flex'}}
          >
            +
          </button>
        )}
      </div>
      <button
        onClick={refreshAllAvatars}
        disabled={isUpdateButtonLoading}
        style={{display: isLoading ? 'none' : ''}}
      >
        Update
      </button>
    </div>
  );
};

export default App;
