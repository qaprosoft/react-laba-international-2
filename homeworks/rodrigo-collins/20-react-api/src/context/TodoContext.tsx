import { createContext, useReducer, ReactNode, useEffect } from "react";
import { Action, todoReducer } from "./reducers/todoReducer";
import { Todo } from "../components/TodoApp/TodoApp";
import useLocalStorage from "../hooks/useLocalStorage";

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
    const [todos, setTodos] = useLocalStorage("todos", initialState.todos);
    const [state, dispatch] = useReducer(todoReducer, { ...initialState, todos });

    useEffect(() => {
        setTodos(state.todos);
    }, [state.todos]);

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
