import Avatars from './Avatars';
import Footer from './Footer';
import {useState} from 'react';

function App() {
  const fetchAvatars = async numberOfAvatars => {
    try {
      const response = await fetch(
        `https://tinyfac.es/api/data?limit=${numberOfAvatars}&quality=2`,
      );
      const data = await response.json();
      return numberOfAvatars === 1 ? data[0] : data;
    } catch (error) {
      console.log('Error occurred while fetching: ', error);
    }
  };

  const addNewAvatar = async () => {
    const newAvatar = await fetchAvatars(1);
    setAvatars(avatars => [...avatars, newAvatar]);
  };

  const refreshAvatar = async key => {
    const newAvatar = await fetchAvatars(1);
    const nextAvatars = avatars.map((avatar, index) => {
      return key === index ? newAvatar : avatar;
    });
    setAvatars(nextAvatars);
  };

  const refreshAllAvatars = async () => {
    setAvatars(await fetchAvatars(avatars.length));
  };

  const [avatars, setAvatars] = useState([]);

  return (
    <div className="page-wrapper">
      <Avatars
        avatars={avatars}
        onAdd={addNewAvatar}
        onRefresh={refreshAvatar}
      ></Avatars>
      <Footer onRefreshAll={refreshAllAvatars}></Footer>
    </div>
  );
}

export default App;
