import {ToastContainer} from 'react-toastify';
import AvatarList from '@/components/Avatar/AvatarList';

export default function Home() {
  return (
    <main className="main">
      <div className="container">
        <AvatarList />
      </div>
      <ToastContainer />
    </main>
  );
}
