export interface ITodo {
  id: string;
  value: string;
  isDone: boolean;
}

interface IActionAddTodo {
  payload: ITodo;
  type: "ADD_TODO";
}

interface IActionSetTodos {
  type: "SET_TODO";
  payload: ITodo[];
}

interface IActionUpdateTodo {
  type: "UPDATE_TODO";
  payload: Pick<ITodo, "id"|"value">;
}

interface IActionToggleTodo {
  type: "TOGGLE_TODO";
  payload: Pick<ITodo, "id">;
}

interface IActionDeleteTodo {
  type: "DELETE_TODO";
  payload: Pick<ITodo, "id">;
}

export interface ITodosStore {
  todos: ITodo[];
  addTodo: (value: string) => void;
  toggleTodo: (id: string) => void;
  deleteTodo: (id: string) => void;
  updateTodo: (id: string, value: string) => void;
}

export type IAction = IActionSetTodos|IActionAddTodo|IActionUpdateTodo|IActionToggleTodo|IActionDeleteTodo;