import '../App.css';
import AddAvatarBtn from './AddAvatarBtn';
import RefreshAllBtn from './RefreshAllBtn';
import Avatar from './Avatar';
import {useState} from 'react';
import {API_URL} from '../config.js';

function App() {
  const [avatars, setAvatars] = useState([]);
  const [animationRefreshIcon, setAnimationRefreshIcon] = useState(false);

  async function fetchData() {
    try {
      const data = await fetch(`${API_URL}/avatar.jpg?&quality=0`);
      const response = data.url;
      if (!data.ok) {
        throw new Error('It has occured the mistake during fetching the data.');
      }
      setAnimationRefreshIcon(false);
      return response;
    } catch (error) {
      console.error('An error has occured.', error);
    }
  }

  function fetchAllData(limit) {
    fetch(`${API_URL}/data?limit=${limit}&quality=0`)
      .then(response => response.json())
      .then(data => {
        setAvatars(data);
      })
      .catch(error => {
        console.error('An error has occured', error);
      });
  }

  async function addAvatar() {
    const response = await fetchData();
    setAvatars([...avatars, {url: response}]);
  }

  async function replaceAvatar(index) {
    setAnimationRefreshIcon(true);
    const response = await fetchData();
    const updatedElem = {url: response};
    const updatedAvatar = [...avatars];
    updatedAvatar[index] = updatedElem;
    setAvatars(updatedAvatar);
  }

  return (
    <>
      <div className="rectangle">
        <Avatar
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
