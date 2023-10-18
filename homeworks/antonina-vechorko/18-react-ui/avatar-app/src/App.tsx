import './styles/index.css';
import addAvatarImg from './assets/add_avatar.svg';
import React, {useState, useEffect} from 'react';
import Avatars from './components/Avatars/Avatars';
import Button from './components/Button/Button';
import {ApiResponse} from './types/types';

function App() {
  const [avatars, setAvatars] = useState<ApiResponse[]>([]);

  const fetchAvatars = async (limit: number) => {
    const response = await fetch(
      `https://tinyfac.es/api/data?limit=${limit}&quality=2`,
    );
    const data = await response.json();
    return data;
  };

  const addNewAvatar = async () => {
    try {
      const newAvatar = await fetchAvatars(1);
      setAvatars([...avatars, newAvatar[0]]);
    } catch (error) {
      console.log(error);
    }
  };

  const refreshAvatar = async (avatar: ApiResponse, index: number) => {
    try {
      const newAvatar = await fetchAvatars(1);
      const updatedAvatars = [...avatars];
      updatedAvatars[index] = newAvatar[0];
      setAvatars(updatedAvatars);
    } catch (error) {
      console.log(error);
    }
  };

  const refreshAllAvatars = async () => {
    try {
      const nextAvatars = await fetchAvatars(avatars.length);
      setAvatars(nextAvatars);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="wrapper">
      <div className="avatars__wrapper">
        {avatars.length > 0 && (
          <Avatars avatars={avatars} onRefresh={refreshAvatar} />
        )}
        <Button className="btn btn__add" onClick={addNewAvatar}>
          <img src={addAvatarImg} alt="click to add" />
        </Button>
      </div>
      <div className="btn__wrapper">
        <Button className="btn btn__refresh" onClick={refreshAllAvatars}>
          Refresh All
        </Button>
      </div>
    </div>
  );
}

export default App;
