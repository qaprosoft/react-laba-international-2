import {useContext} from 'react';
import Form from './components/Form/Form';
import {Context} from './contexts/AppContext/AppContext';
import TodoList from './components/TodoList/TodoList';
import Modal from './components/Modal/Modal';
import Button from './components/Buttons/Button/Button';
import {saveDataToStorage} from './utils/saveDataToStorage';

const App = () => {
  const {isShowModal, todos, setTodos} = useContext(Context);

  const deleteCompletedTodo = () => {
    const newTodos = todos.filter(todo => todo.isCompleted !== true);
    setTodos(newTodos);
    saveDataToStorage(newTodos);
  };

  return (
    <main className="main">
      <section className="todo">
        <div className="container todo__container">
          <Form />
          <TodoList />
          <Button
            type="button"
            btnText="Delete completed"
            onClickHandler={deleteCompletedTodo}
          />
        </div>
      </section>
      {isShowModal && <Modal />}
    </main>
  );
};

export default App;
