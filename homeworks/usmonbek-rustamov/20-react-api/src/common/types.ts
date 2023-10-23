export interface Todo {
  id: string;
  task: string;
  isCompleted: boolean;
}

export type TodosAction =
  | {type: 'added'; task: string}
  | {type: 'edited'; id: string; task: string}
  | {type: 'toggled'; id: string; isCompleted: boolean}
  | {type: 'deleted'; id: string};

export interface State<T> {
  data: T;
  error: string;
}
