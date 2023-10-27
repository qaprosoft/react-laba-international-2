import { createContext, useReducer, ReactNode } from "react";
import { Action, todoReducer } from "./reducers/todoReducer";
import { Todo } from "../components/TodoApp/TodoApp";

type InitialState = {
    todos: Todo[];
    error: string | null;
};

const initialState: InitialState = {
    todos: [],
    error: null,
};

export const TodoContext = createContext<{
    state: InitialState;
    dispatch: React.Dispatch<Action>;
}>({
    state: initialState,
    dispatch: () => null,
});

const TodoContextProvider = ({ children }: { children: ReactNode }) => {
    const [state, dispatch] = useReducer(todoReducer, { ...initialState });


    const contextValue = {
        state,
        dispatch,
    };

    return (
        <TodoContext.Provider value={contextValue}>
            {children}
        </TodoContext.Provider>
    );
};

export default TodoContextProvider;
