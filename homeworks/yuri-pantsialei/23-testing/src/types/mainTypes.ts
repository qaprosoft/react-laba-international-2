export type TodoType = {
  id: string;
  value: string;
  status: boolean;
};

export type MainPropType = {
  propsTodos?: Array<TodoType>;
};
