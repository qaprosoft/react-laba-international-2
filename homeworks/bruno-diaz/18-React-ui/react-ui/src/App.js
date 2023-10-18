import React, { useState, useCallback } from "react";
import "./App.css";
import {AvatarTile} from "./components/AvatarTile";
import { AddAvatarButton } from "./components/AddAvatarButton";
import { RefreshAllButton } from "./components/RefreshAllButton";

function App() {
  const [avatars, setAvatars] = useState([]);

  const API_URL = "https://tinyfac.es/api/data";

  const fetchRandomAvatar = async (num) => {
    try {
      const response = await fetch(
        `${API_URL}?limit=${num}&quality=2`
      );
      const data = await response.json();
      return data.length === 1 ? [data[0]] : data;
    } catch (error) {
      console.error("Error fetching avatars:", error);
      return [];
    }
  };  

  const getAvatar = useCallback(async () => {
    let newAvatar = await fetchRandomAvatar(1);

    const avatarExists = (avatar) => avatar.id === newAvatar[0].id;

    while (avatars.some(avatarExists)) {
      newAvatar = await fetchRandomAvatar(1);
    }

    return newAvatar[0];
  }, [avatars]);
  
  const addRandomAvatar = async () => {
    try {
      const newAvatar = await fetchRandomAvatar(1);
      setAvatars((prevAvatars) => [...prevAvatars, newAvatar]);
    } catch (error) {
      console.log(error);
    }
  };

  const refreshAvatar = useCallback(
    async (avatarId) => {
      try {
        const newAvatar = await getAvatar();
        setAvatars((prevAvatars) =>
          prevAvatars.map((avatar) =>
            avatar.id === avatarId ? newAvatar : avatar
          )
        );
      } catch (error) {
        console.log(error);
      }
    },
    [getAvatar]
  );

  const refreshAllAvatars = async () => {
    try {
      const refreshedAvatars = await Promise.all(
        avatars.map(async (avatar) => await getAvatar())
      );
      setAvatars(refreshedAvatars);
    } catch (error) {
      console.error("Error refreshing avatars:", error);
    }
  };

  return (
    <>
      <div className="button-tile-wrapper">
        <div className="avatar-list">
          {avatars.map((avatar, index) => (
            <AvatarTile key={avatar.id} avatar={avatar} onRefresh={refreshAvatar} />
          ))}
          <AddAvatarButton onClick={addRandomAvatar} />
        </div>
        </div>
      <div className="button-refresh-wrapper">
        <RefreshAllButton onClick={refreshAllAvatars} />
      </div>
    </>
  );
}

export default App;
