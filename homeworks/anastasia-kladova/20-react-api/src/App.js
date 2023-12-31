import {useContext} from 'react';
import Form from './components/Form/Form';
import {Context} from './contexts/AppContext/AppContext';
import TodoList from './components/TodoList/TodoList';
import Button from './components/Buttons/Button/Button';
import Modal from './components/Modal/Modal';
import {phrases} from './constants/constants';
import {useApp} from './hooks/appHook';
import {useDeleteTodo} from './hooks/deleteTodoHook';

const App = () => {
  useApp();

  const {isShowDeleteModal, todoToDelete} = useContext(Context);
  const {deleteCompletedTodo, deleteTodo} = useDeleteTodo();

  return (
    <main className="main">
      <section className="todo">
        <div className="container todo__container">
          <Form />
          <TodoList />
          <Button
            type="button"
            btnText="Delete completed"
            onClickHandler={() => deleteCompletedTodo()}
          />
        </div>
      </section>
      {isShowDeleteModal && (
        <Modal
          modalText={phrases.DELETEMODAL}
          deleteHandler={() => deleteTodo(todoToDelete)}
        />
      )}
    </main>
  );
};

export default App;
