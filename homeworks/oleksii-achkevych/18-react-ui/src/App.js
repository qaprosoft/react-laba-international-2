import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Avatar from './Components/Avatar/Avatar';

const App = () => {
  const [avatars, setAvatars] = useState([]);

  useEffect(() => {
    const fetchAvatars = async () => {
      try {
        const response = await axios.get(
          'https://tinyfac.es/api/data?limit=20&quality=0'
        );
        setAvatars(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchAvatars();
  }, []);


  const refreshAvatar = async (index) => {
    try {
      const response = await axios.get(
        'https://tinyfac.es/api/data?limit=1&quality=0'
      );
      setAvatars((prevAvatars) => {
        const newAvatars = [...prevAvatars];
        newAvatars[index] = response.data[0];
        return newAvatars;
      });
    } catch (error) {
      console.error(error);
    }
  };


  const refreshAllAvatars = async () => {
    try {
      const response = await axios.get(
        'https://tinyfac.es/api/data?limit=20&quality=0'
      );
      setAvatars(response.data);
    } catch (error) {
      console.error(error);
    }
  };


  const addRandomAvatarTile = async () => {
    try {
      const response = await axios.get(
        'https://tinyfac.es/api/data?limit=1&quality=0'
      );
      setAvatars([...avatars, response.data[0]]);
    } catch (error) {
      console.error(error);
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
          >
            +
          </button>
        )}
      </div>
      <button onClick={refreshAllAvatars}>Refresh All</button>
    </div>
  );
}

export default App;
