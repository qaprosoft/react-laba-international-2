import {useContext} from 'react';
import './App.css';
import Form from './components/Form/Form';
import TodoItem from './components/TodoItem/TodoItem';
import AppContextProvider from './contexts/AppContext/AppContextProvider';
import {Context} from './contexts/AppContext/AppContext';
import TodoList from './components/TodoList/TodoList';
import Modal from './components/Modal/Modal';

const App = () => {
  const {isShowModal} = useContext(Context);
  return (
    <main className="main">
      <section className="todo">
        <div className="container todo__container">
          <Form />
          <TodoList />
        </div>
      </section>
      {isShowModal && <Modal />}
    </main>
  );
};

export default App;
