import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {TasksProvider} from '../context/TasksProvider';
import AddTask from './AddTask';
import Footer from './Footer';
import Header from './Header';
import Tasks from './Tasks';

function App() {
  return (
    <TasksProvider>
      <div className="page-wrapper">
        <ToastContainer />
        <Header />
        <AddTask />
        <Tasks />
        <Footer />
      </div>
    </TasksProvider>
  );
}

export default App;
