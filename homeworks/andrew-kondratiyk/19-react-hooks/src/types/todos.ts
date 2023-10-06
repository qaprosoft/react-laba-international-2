export type TodoResponse = {
  _id: string;
  userId: string;
  title: string;
  note?: string;
  completed: boolean;
};

export type TodoCreateRequest = Pick<TodoResponse, 'title' | 'note'>;

export type TodoUpdateRequest = Pick<
  TodoResponse,
  'completed' | 'title' | 'note'
>;
