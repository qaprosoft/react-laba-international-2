import {TodoType} from '@/types/mainTypes';

export type PropsType = {
  isLastTodo: boolean;
  todo: TodoType;
  changeTodoStatus: (id: string, status: boolean) => void;
  changeEditMode: (id: string, value: string) => void;
  deleteCallback: (id: string) => void;
};
