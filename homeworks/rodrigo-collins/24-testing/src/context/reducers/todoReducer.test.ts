import { Action, todoReducer } from './todoReducer';

const sampleTask = 'Buy milk';

describe('todoReducer', () => {
    it('debería agregar una nueva tarea válida', () => {
        const initialState = { todos: [], error: null };
        const action: Action = { type: "ADD_TODO", payload: sampleTask };

        const newState = todoReducer(initialState, action);

        expect(newState.todos).toHaveLength(1);
        expect(newState.todos[0].text).toBe(sampleTask);
    });

    it('debería manejar una tarea con texto inválido', () => {
        const initialState = { todos: [], error: null };
        const action: Action = { type: 'ADD_TODO', payload: '   ' };

        const newState = todoReducer(initialState, action);

        expect(newState.error).toBe('Invalid todo text');
    });

    it('debería manejar una tarea que ya existe', () => {
        const initialState = { todos: [{ id: 1, text: sampleTask, completed: false }], error: null };
        const action: Action = { type: 'ADD_TODO', payload: sampleTask };

        const newState = todoReducer(initialState, action);

        expect(newState.error).toBe('Todo already exists');
    });

});
