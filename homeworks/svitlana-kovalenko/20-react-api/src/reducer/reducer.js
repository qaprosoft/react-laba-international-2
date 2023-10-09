import { ADD_TODO, DELETE_TODO, EDIT_TODO, COMPLETED_TODO } from './actions';

export const reducer = (state, action) => {
    const { type, payload } = action;
    switch (type) {
        case ADD_TODO:
            return { todos: [payload, ...state.todos] }
        case DELETE_TODO:
            return { todos: state.todos.filter(todo => todo.id !== payload) }
        case EDIT_TODO:
            return {
                todos: state.todos.map(todo =>
                    todo.id === payload ? { ...todo, edition: !todo.edition } : todo,
                ),
            }
        case COMPLETED_TODO:
            return {
                todos: state.todos.map(todo =>
                    todo.id === payload ? { ...todo, complete: !todo.complete } : todo,
                ),
            }
        default:
            return state
    }
};