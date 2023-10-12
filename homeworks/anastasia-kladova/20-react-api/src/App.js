import {useContext} from 'react';
import Form from './components/Form/Form';
import {Context} from './contexts/AppContext/AppContext';
import TodoList from './components/TodoList/TodoList';
import Button from './components/Buttons/Button/Button';
import {saveDataToStorage} from './utils/saveDataToStorage';
import Modal from './components/Modal/Modal';
import {phrases} from './constants/constants';

const App = () => {
  const {
    isShowDeleteModal,
    setIsShowDeleteModal,
    todos,
    setTodos,
    todoToDelete,
    setTodoToDelete,
  } = useContext(Context);

  const deleteCompletedTodo = () => {
    const newTodos = todos.filter(todo => todo.isCompleted !== true);
    setTodos(newTodos);
    saveDataToStorage(newTodos);
  };

  const deleteTodo = id => {
    const newTodos = todos.filter(todo => todo.id !== id);
    setTodos(newTodos);
    saveDataToStorage(newTodos);
    setTodoToDelete(null);
    setIsShowDeleteModal(false);
  };

  console.log(isShowDeleteModal);

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
