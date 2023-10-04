import Avatars from './Avatars';
import Footer from './Footer';
import LoadingSpinner from './LoadingSpinner';
import {useState} from 'react';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [isLoading, setLoading] = useState(false);
  const [avatars, setAvatars] = useState([]);

  const showErrorToast = errorMessage =>
    toast.error(errorMessage, {
      position: 'top-center',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });

  const fetchAvatars = async numberOfAvatars => {
    setLoading(true);
    const response = await fetch(
      `https://tinyfac.es/api/data?limit=${numberOfAvatars}&quality=2`,
    );
    const data = await response.json();
    setLoading(false);
    if (!response.ok) {
      showErrorToast(data.reason);
      throw new Error('Error fetching avatars');
    } else {
      return data.length === 1 ? data[0] : data;
    }
  };

  const getAvatar = async () => {
    let newAvatar = await fetchAvatars(1);
    while (avatars.map(avatar => avatar.id).includes(newAvatar.id)) {
      newAvatar = await fetchAvatars(1);
    }
    return newAvatar;
  };

  const addNewAvatar = async () => {
    try {
      const newAvatar = await getAvatar();
      setAvatars(avatars => [...avatars, newAvatar]);
    } catch (error) {
      console.log(error);
    }
  };

  const refreshAvatar = async avatar => {
    try {
      const newAvatar = await getAvatar();
      const nextAvatars = avatars.map((previousAvatar, index) => {
        return avatars.indexOf(avatar) === index ? newAvatar : previousAvatar;
      });
      setAvatars(nextAvatars);
    } catch (error) {
      console.log(error);
    }
  };

  const refreshAllAvatars = async () => {
    try {
      const nextAvatars = await fetchAvatars(avatars.length);
      avatars.length === 1
        ? setAvatars([nextAvatars])
        : setAvatars(nextAvatars);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="page-wrapper">
        {isLoading && <LoadingSpinner></LoadingSpinner>}
        <Avatars
          avatars={avatars}
          onAdd={addNewAvatar}
          onRefresh={refreshAvatar}
        ></Avatars>
        <Footer
          onRefreshAll={refreshAllAvatars}
          isDisabled={avatars.length < 1}
        ></Footer>
      </div>
    </>
  );
}

export default App;
