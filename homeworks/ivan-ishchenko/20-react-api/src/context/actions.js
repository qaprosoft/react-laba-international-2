export const ADD_TASK = 'ADD_TASK';
export const DELETE_TASK = 'DELETE_TASK';
export const UPDATE_TASK = 'UPDATE_TASK';
export const SET_TASKS = 'SET_TASKS';
export const TOGGLE_COMPLETED = 'TOGGLE_COMPLETED';
export const DELETE_COMPLETED = 'DELETE_COMPLETED';

export const addTaskActionCreator = data => ({type: ADD_TASK, payload: data});
export const deleteTaskActionCreator = id => ({type: DELETE_TASK, payload: id});
export const updateTaskActionCreator = data => ({
  type: UPDATE_TASK,
  payload: data,
});
export const setTasksActionCreator = data => ({type: SET_TASKS, payload: data});
export const toggleCompletedActionCreator = id => ({
  type: TOGGLE_COMPLETED,
  payload: id,
});
export const deleteCompletedActionCreator = () => ({type: DELETE_COMPLETED});
