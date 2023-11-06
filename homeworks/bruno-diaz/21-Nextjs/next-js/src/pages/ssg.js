import React, { useState, useCallback } from "react";
import { AvatarTile } from "@/components/avatarTile";
import { RefreshAllButton } from "@/components/refreshAllButton";
import { AddAvatarButton } from "@/components/addAvatarButton";
import Link from "next/link";

const API_URL = "https://tinyfac.es/api/data";

async function fetchRandomAvatars(num) {
  try {
    const response = await fetch(`${API_URL}?limit=${num}&quality=2`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching avatars:", error);
    return [];
  }
}

const SSGPage = ({ avatars }) => {
  const [avatarsList, setAvatarsList] = useState(avatars);

  const refreshAvatar = useCallback(async (avatarId) => {
    try {
      const newAvatar = await fetchRandomAvatars(1);

      setAvatarsList((prevAvatars) =>
        prevAvatars.map((avatar) => {
          if (avatar.id === avatarId) {
            return newAvatar[0];
          }
          return avatar;
        })
      );
    } catch (error) {
      console.log(error);
    }
  }, []);

  const addRandomAvatar = async () => {
    try {
      const newAvatar = await fetchRandomAvatars(1);

      setAvatarsList((prevAvatars) => [...prevAvatars, newAvatar[0]]);
    } catch (error) {
      console.log(error);
    }
  };

  const refreshAllAvatars = async () => {
    try {
      const refreshedAvatars = await Promise.all(
        avatarsList.map(async () => await fetchRandomAvatars(1))
      );

      setAvatarsList(refreshedAvatars.map((arr) => arr[0]));
    } catch (error) {
      console.error("Error refreshing avatars:", error);
    }
  };

  return (
    <>
      <h1>SSG page</h1>
      <div className="navigation-links">
        <Link href="/ssr"><p className='link'>Go to SSR Page</p></Link>
      </div>
      <div className="button-tile-wrapper">
        <div className="avatar-list">
          {avatarsList.map((avatar, index) => (
            <AvatarTile
              key={avatar.id}
              avatar={avatar}
              onRefresh={refreshAvatar}
            />
          ))}
          <AddAvatarButton onClick={addRandomAvatar} />
        </div>
      </div>
      <div className="button-refresh-wrapper">
        <RefreshAllButton onClick={refreshAllAvatars} />
      </div>
    </>
  );
};

export async function getStaticProps() {
  const avatars = await fetchRandomAvatars(5);

  return {
    props: {
      avatars,
    },
  };
}

export default SSGPage;
