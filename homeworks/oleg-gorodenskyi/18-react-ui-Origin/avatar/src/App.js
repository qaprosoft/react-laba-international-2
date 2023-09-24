import './App.css';
import {useState} from 'react';
import tile from './assets/tile.svg';

function App() {
  const [avatar, setAvatar] = useState([]);

  async function fetchData() {
    const data = await fetch('https://tinyfac.es/api/avatar.jpg?&quality=0');
    const response = data.url;
    return response;
  }

  function fetchAllData(limit) {
    fetch(`https://tinyfac.es/api/data?limit=${limit}&quality=0`)
      .then(response => response.json())
      .then(data => {
        setAvatar(data);
      })
      .catch(error => {
        console.error('An error has occured', error);
      });
  }

  async function addAvatar() {
    const response = await fetchData();
    setAvatar([...avatar, {url: response}]);
  }

  async function replaceAvatar(index) {
    const response = await fetchData();
    const updatedElem = {url: response};
    const updatedAvatar = [...avatar];
    updatedAvatar[index] = updatedElem;
    setAvatar(updatedAvatar);
  }

  return (
    <>
      <div className="rectangle">
        {avatar.map((photo, index) => (
          <div
            className="icon_wrapper"
            key={index}
            onClick={() => replaceAvatar(index)}
          >
            <img src={photo.url} alt="avatar" className="tiles_avatar" />
          </div>
        ))}
        <button className="tiles_btn" onClick={() => addAvatar()}>
          <img className="tiles_icon" src={tile} alt="tile" />
        </button>
      </div>
      <button className="refresh" onClick={() => fetchAllData(avatar.length)}>
        Refresh All
      </button>
    </>
  );
}

export default App;
