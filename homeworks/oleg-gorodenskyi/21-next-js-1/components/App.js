import AddAvatarBtn from './AddAvatarBtn';
import RefreshAllBtn from './RefreshAllBtn';
import AvatarList from './AvatarList';
import {useState} from 'react';
import fetchAllData from '@/helpers/fetchAllData';


function App({imagesOfAvatars}) {
  const [avatars, setAvatars] = useState(imagesOfAvatars);
  const [animationRefreshIcon, setAnimationRefreshIcon] = useState(false);

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
    setAnimationRefreshIcon(false);
  }

  async function refreshAllAvatars(length) {
    const fetchedAvatars = await fetchAllData(length)
    const updatedAvatars = fetchedAvatars.map(object => object.url);
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
      <RefreshAllBtn refreshAllAvatars={refreshAllAvatars} avatars={avatars} />
    </>
  );
}

export default App;
