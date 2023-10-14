import {useContext, useEffect} from 'react';
import Form from './components/Form/Form';
import {Context} from './contexts/AppContext/AppContext';
import TodoList from './components/TodoList/TodoList';
import Button from './components/Buttons/Button/Button';
import {saveDataToStorage} from './utils/saveDataToStorage';
import Modal from './components/Modal/Modal';
import {phrases} from './constants/constants';
import {ACTION_TYPES} from './state/actionTypes';
import {useApp} from './hooks/appHook';
import {useAddTodo} from './hooks/deleteTodoHook';

const App = () => {
  useApp();

  const {isShowDeleteModal, todoToDelete} = useContext(Context);
  const {deleteCompletedTodo, deleteTodo} = useAddTodo();

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
