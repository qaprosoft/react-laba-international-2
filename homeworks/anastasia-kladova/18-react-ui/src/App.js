import './index.css';
import AvatarsBox from './components/AvatarsBox/AvatarsBox';
import Button from './components/Buttons/Button/Button';
import {useState} from 'react';
import {getNewAvatar} from './utils/getNewAvatar';

const App = () => {
  const [avatars, setAvatars] = useState([]);
  const avatarsLength = avatars.length;

  const refreshAll = async () => {
    if (!avatarsLength) return;
    const data = await getNewAvatar(avatarsLength);
    setAvatars([...data]);
  };

  return (
    <main className="main">
      <section className="avatars">
        <div className="container avatars__container">
          <AvatarsBox avatars={avatars} setAvatars={setAvatars} />
          <Button handler={refreshAll}>Refresh All</Button>
        </div>
      </section>
    </main>
  );
};

export default App;
