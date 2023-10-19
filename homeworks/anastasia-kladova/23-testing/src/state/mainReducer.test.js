import { ACTION_TYPES } from "./actionTypes";
import { mainReducer } from "./mainReducer";
import TESTTODOS from '../constants/testTodos'


// const setTestState = () => {
//     mainReducer(
//       { todos: [] },
//       {
//         type: ACTION_TYPES.SET_TODOS,
//         payload: { todos: TESTTODOS },
//       },
//     );
//   };
  
//   beforeEach(setTestState);

  describe('Reducer', () => {
    it('should set todos', () => {
        const todos =  TESTTODOS;
        expect(mainReducer([],{type: ACTION_TYPES.SET_TODOS, payload: todos}).todos).toStrictEqual(todos);
    });

    it('should add new todo', () => {
        const todos =  TESTTODOS;
        const newTodo =  'Apple';
        const newTodoAdded = {
            id: Date.now(),
            isCompleted: false,
            text: newTodo,
          };
         
        expect(mainReducer({todos: todos}, { type: ACTION_TYPES.ADD_NEWTODO, payload: {newTodo: newTodo} }).todos).toStrictEqual([...todos, newTodoAdded]);
    });

    it('should update todo', () => {
        const todos = TESTTODOS;
        expect(mainReducer({todos: todos},{type: ACTION_TYPES.UPDATE_TODO, payload: {id: 1697298518680, text:"Apple"}}).todos).toStrictEqual([   
            {id: 1697298487929, text: "HW", isCompleted: false},
            {id: 1697298518680, text: "Apple",  isCompleted: true},]);
    });

    it('should toggle isCompleted of the todo', () => {
        const todos =  TESTTODOS;
        expect(mainReducer({todos: todos},{type: ACTION_TYPES.TOGGLE_COMPLETED, payload: {id: 1697298518680, isCompleted: true}}).todos).toStrictEqual([
            {id: 1697298487929, text: "HW", isCompleted: false},
            {id: 1697298518680, text: "Reading",  isCompleted: false},]);
    });

    it('should delete todo', () => {
        const todos = TESTTODOS;
        expect(mainReducer({todos: todos},{type: ACTION_TYPES.DELETE_TODO, payload: 1697298518680}).todos).toStrictEqual([   
            {id: 1697298487929, text: "HW", isCompleted: false},]);
    });

    it('should delete completed todos', () => {
        const todos = TESTTODOS;
        expect(mainReducer({todos: todos},{type: ACTION_TYPES.DELETE_COMPLETED}).todos).toStrictEqual([   
            {id: 1697298487929, text: "HW", isCompleted: false},]);
    });
  });