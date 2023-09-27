import '../App.css';
import AddAvatarBtn from './AddAvatarBtn';
import RefreshAllBtn from './RefreshAllBtn';
import AvatarList from './AvatarList';
import {useState} from 'react';
import {API_URL} from '../config.js';

function App() {
  const [avatars, setAvatars] = useState([]);
  const [animationRefreshIcon, setAnimationRefreshIcon] = useState(false);

  async function fetchAllData(limit = 1) {
    try {
      const response = await fetch(`${API_URL}/data?limit=${limit}&quality=0`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setAnimationRefreshIcon(false);

      if (limit > 1) {
        const updatedAvatars = data.map(object => object.url);
        setAvatars(updatedAvatars);
      } else {
        return data;
      }
    } catch (error) {
      console.error('An error has occurred', error);
    }
  }

  async function addAvatar() {
    const response = await fetchAllData();
    const url = response[0].url;
    setAvatars([...avatars, url]);
  }

  async function replaceAvatar(index) {
    setAnimationRefreshIcon(true);
    const response = await fetchAllData();
    const url = response[0].url;
    const updatedAvatars = avatars.map((avatar, idx) =>
      index === idx ? url : avatar,
    );
    setAvatars(updatedAvatars);
  }
  
  return (
    <>
      <div className="rectangle">
        <AvatarList
          avatars={avatars}
          animationRefreshIcon={animationRefreshIcon}
          replaceAvatar={replaceAvatar}
        />
        <AddAvatarBtn addAvatar={addAvatar} />
      </div>
      <RefreshAllBtn fetchAllData={fetchAllData} avatars={avatars} />
    </>
  );
}

export default App;
