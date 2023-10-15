

import {useState} from 'react';

import AvatarsBox from '../AvatarsBox/AvatarsBox';
import Button from '../Buttons/Button/Button';
import { getNewAvatar } from '@/utils/getNewAvatar';

const App = ({avatarsFromServer}) => {
  const [avatars, setAvatars] = useState(avatarsFromServer);
  const [isLoading, setIsLoading] = useState(false);
  const avatarsLength = avatars.length;


  const refreshAll = async () => {
    setIsLoading(true);

    if (!avatarsLength) return;
    const data = await getNewAvatar(avatarsLength);
    setAvatars(data);

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
