import {ToastContainer} from 'react-toastify';
import AvatarList from './components/Avatar/AvatarList';

function App() {
  return (
    <main className="main">
      <div className="container">
        <AvatarList />
      </div>
      <ToastContainer />
    </main>
  );
}

export default App;
