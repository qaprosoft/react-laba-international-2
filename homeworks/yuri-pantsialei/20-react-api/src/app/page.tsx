'use client';

import {AddToDo} from '@/components/AddToDo/AddToDo';
import styles from './page.module.css';
import {
  useState,
  useEffect,
  useCallback,
  createContext,
  Dispatch,
  SetStateAction,
} from 'react';
import {ToDo} from '@/components/ToDo/ToDo';
import {
  addTodoAction,
  updateTodoAction,
  deleteTodoAction,
  changeTodoStatusAction,
  deleteCompletedTodosAction,
} from '@/reducer/actionCreators';
import {useSetInitialTodos} from '@/Hooks/useSetInitialTodos';
import {useTodosReducer} from '@/Hooks/useTodosReducer';
import {TodoError} from '@/helpers/errors';

export const NewTodoCreatedContext = createContext<{
  isCreated: boolean;
  setIsCreated: Dispatch<SetStateAction<boolean>>;
}>({isCreated: false, setIsCreated: () => {}});

export const TitleErrorContext = createContext<{
  isError: null | string;
  setIsError: Dispatch<SetStateAction<null | string>>;
}>({isError: null, setIsError: () => {}});

export default function Home() {
  const [isError, setIsError] = useState<null | string>(null);
  const [isCreated, setIsCreated] = useState<boolean>(false);
  const [isInitialRender, setIsInitialRender] = useState<boolean>(true);
  const {state, dispatch} = useTodosReducer();

  useSetInitialTodos(dispatch);

  useEffect(() => {
    if (!isInitialRender) {
      localStorage.setItem('todos', JSON.stringify(state.todos));
    } else {
      setIsInitialRender(false);
    }
  }, [state.todos, isInitialRender]);

  const addNewTodo = useCallback(
    (value: string) => {
      const isExist = state.todos.findIndex(todo => todo.value === value);
      if (isExist > -1) {
        setIsError(TodoError.alreadyExist);
        return;
      }
      setIsCreated(true);
      setIsError(null);
      dispatch(addTodoAction(value));
    },
    [state.todos, dispatch],
  );

  const editTodoHandler = useCallback(
    (id: string, value: string) => {
      const isExist = state.todos.findIndex(todo => todo.value === value);
      if (isExist > -1) {
        setIsError(TodoError.alreadyExist);
        return;
      }
      setIsError(null);
      dispatch(updateTodoAction({id, value}));
    },
    [state.todos, dispatch],
  );

  const deleteTodo = useCallback(
    (id: string) => {
      dispatch(deleteTodoAction(id));
    },
    [dispatch],
  );

  const changeTodoStatus = useCallback(
    (id: string, status: boolean) => {
      dispatch(changeTodoStatusAction({id, status}));
    },
    [dispatch],
  );

  const deleteCompletedTodos = () => {
    dispatch(deleteCompletedTodosAction());
  };

  return (
    <NewTodoCreatedContext.Provider value={{isCreated, setIsCreated}}>
      <TitleErrorContext.Provider value={{isError, setIsError}}>
        <main className={styles.main}>
          <div className={styles.addTodo_wrapper}>
            <AddToDo callback={addNewTodo} />
            {isError && <div className={styles.errror_text}>{isError}</div>}
          </div>

          <div className={styles.todo_wrapper}>
            {state.todos.length !== 0 &&
              state.todos.map((todo, i) => {
                return (
                  <ToDo
                    key={todo.id}
                    todo={todo}
                    changeEditMode={editTodoHandler}
                    deleteCallback={deleteTodo}
                    isLastTodo={state.todos.length - 1 === i}
                    changeTodoStatus={changeTodoStatus}
                  />
                );
              })}
            <button
              className={styles.delete_completed}
              onClick={deleteCompletedTodos}
            >
              Deleted completed todo(s)
            </button>
          </div>
        </main>
      </TitleErrorContext.Provider>
    </NewTodoCreatedContext.Provider>
  );
}
