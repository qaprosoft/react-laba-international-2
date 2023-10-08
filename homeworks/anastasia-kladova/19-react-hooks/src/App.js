import './App.css';
import Form from './components/Form/Form';
import TodoItem from './components/TodoItem/TodoItem';

const App = () => {
  return (
    <main className="main">
      <section className="todo">
        <div className="container todo__container">
          <Form />
          <TodoItem />
        </div>
      </section>
    </main>
  );
};

export default App;
