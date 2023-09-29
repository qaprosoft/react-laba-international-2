export type TodoResponse = {
  _id: string;
  userId: string;
  title: string;
  note?: string;
  completed: boolean;
};

export type TodoCreateRequest = Pick<TodoResponse, 'userId' | 'title' | 'note'>;

export type TodoUpdateRequest = Pick<
  TodoResponse,
  'completed' | 'title' | 'note'
>;
