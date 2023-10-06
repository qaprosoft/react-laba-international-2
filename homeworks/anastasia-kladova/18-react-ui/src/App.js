import './index.css';
import AvatarsBox from './components/AvatarsBox/AvatarsBox';
import Button from './components/Buttons/Button/Button';
import {useState} from 'react';
import {getNewAvatar} from './utils/getNewAvatar';
import Loader from './components/Loader/Loader';
import LoaderContainer from './components/LoaderContainer.jsx/LoaderContainer';

const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [avatars, setAvatars] = useState([]);

  const avatarsLength = avatars.length;

  const refreshAll = async () => {
    setIsLoading(true);

    if (!avatarsLength) return;
    const data = await getNewAvatar(avatarsLength);

    setAvatars([data]);
    setIsLoading(false);
  };
  console.log(isLoading);
  return (
    <main className="main">
      <section className="avatars">
        {isLoading ? (
          <LoaderContainer />
        ) : (
          <div className="container avatars__container">
            <AvatarsBox
              avatars={avatars}
              setAvatars={setAvatars}
              isLoading={isLoading}
              setIsLoading={setIsLoading}
            />
            <Button
              handler={refreshAll}
              isLoading={isLoading}
              setIsLoading={setIsLoading}
            >
              Refresh All
            </Button>
          </div>
        )}
      </section>
    </main>
  );
};

export default App;
