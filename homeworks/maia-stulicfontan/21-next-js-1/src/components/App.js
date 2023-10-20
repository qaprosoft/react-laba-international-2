import Avatars from './Avatars';
import Footer from './Footer';
import LoadingSpinner from './LoadingSpinner';
import {fetchAvatars} from '@/services/avatars';
import {useState} from 'react';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App({avatars}) {
  const [isLoading, setLoading] = useState(false);
  const [allAvatars, setAllAvatars] = useState(avatars);

  function showErrorToast(errorMessage) {
    return toast.error(errorMessage, {
      position: 'top-center',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });
  }

  async function getAvatar() {
    let newAvatar = await fetchAvatars(1);
    while (allAvatars.map(avatar => avatar.id).includes(newAvatar.id)) {
      newAvatar = await fetchAvatars(1);
    }
    return newAvatar;
  }

  async function addNewAvatar() {
    try {
      setLoading(true);
      const newAvatar = await getAvatar();
      setAllAvatars(allAvatars => [...allAvatars, newAvatar]);
    } catch (error) {
      showErrorToast(error.message);
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  }

  async function refreshAvatar(avatar) {
    try {
      setLoading(true);
      const newAvatar = await getAvatar();
      const nextAvatars = allAvatars.map((previousAvatar, index) => {
        return allAvatars.indexOf(avatar) === index
          ? newAvatar
          : previousAvatar;
      });
      setAllAvatars(nextAvatars);
    } catch (error) {
      showErrorToast(error.message);
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  async function refreshAllAvatars() {
    try {
      setLoading(true);
      const nextAvatars = await fetchAvatars(allAvatars.length);
      allAvatars.length === 1
        ? setAllAvatars([nextAvatars])
        : setAllAvatars(nextAvatars);
    } catch (error) {
      showErrorToast(error.message);
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <ToastContainer />
      <main className="page-wrapper">
        {isLoading && <LoadingSpinner />}
        <Avatars
          avatars={allAvatars}
          onAdd={addNewAvatar}
          onRefresh={refreshAvatar}
        />
        <Footer onRefreshAll={refreshAllAvatars} />
      </main>
    </>
  );
}

export default App;
