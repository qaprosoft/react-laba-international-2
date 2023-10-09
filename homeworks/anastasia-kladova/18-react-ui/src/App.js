import './index.css';
import AvatarsBox from './components/AvatarsBox/AvatarsBox';
import Button from './components/Buttons/Button/Button';
import {useState} from 'react';
import {getNewAvatar} from './utils/getNewAvatar';

const App = () => {
  const [avatars, setAvatars] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const avatarsLength = avatars.length;

  const refreshAll = async () => {
    setIsLoading(true);

    if (!avatarsLength) return;
    const data = await getNewAvatar(avatarsLength);
    setAvatars([data]);

    setIsLoading(false);
  };

  return (
    <main className="main">
      <section className="avatars">
        <div className="container avatars__container">
          <AvatarsBox
            avatars={avatars}
            setAvatars={setAvatars}
            isLoading={isLoading}
            setIsLoading={setIsLoading}
          />
          <Button handler={refreshAll} isLoading={isLoading}>
            Refresh All
          </Button>
        </div>
      </section>
    </main>
  );
};

export default App;
