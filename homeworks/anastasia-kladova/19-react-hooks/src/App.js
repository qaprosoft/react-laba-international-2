import './App.css';
import Form from './components/Form/Form';
import TodoItem from './components/TodoItem/TodoItem';
import AppContextProvider from './contexts/AppContext/AppContextProvider';

const App = () => {
  return (
    <AppContextProvider>
      <main className="main">
        <section className="todo">
          <div className="container todo__container">
            <Form />
            <TodoItem />
          </div>
        </section>
      </main>
    </AppContextProvider>
  );
};

export default App;
