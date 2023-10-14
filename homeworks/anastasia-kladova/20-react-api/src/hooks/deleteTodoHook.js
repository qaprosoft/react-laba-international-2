import {useContext} from 'react';
import {Context} from '../contexts/AppContext/AppContext';
import {ACTION_TYPES} from '../state/actionTypes';

export const useDeleteTodo = () => {
  const {setIsShowDeleteModal, dispatch, setTodoToDelete} = useContext(Context);

  const deleteCompletedTodo = () => {
    dispatch({type: ACTION_TYPES.DELETE_COMPLETED});
  };

  const deleteTodo = id => {
    dispatch({type: ACTION_TYPES.DELETE_TODO, payload: id});
    setTodoToDelete(null);
    setIsShowDeleteModal(false);
  };

  return {deleteCompletedTodo, deleteTodo};
};
