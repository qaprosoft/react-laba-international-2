import EditTodoCard from '@/components/common/edit-todo-card/EditTodoCard';
import styles from '@/components/pages/main-page/MainPage.module.css';
import {memo, useState} from 'react';

const AddTodoContainer = memo(() => {
  const [isAddTodo, setIsAddTodo] = useState(false);

  return (
    <>
      {isAddTodo ? (
        <EditTodoCard onCancel={() => setIsAddTodo(false)} />
      ) : (
        <div onClick={() => setIsAddTodo(true)} className={styles.addTodoBtn}>
          Add Task
        </div>
      )}
    </>
  );
});

export default AddTodoContainer;
