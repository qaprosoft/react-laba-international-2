import {TodoType} from '@/types/mainTypes';
import {ReducerActionKind} from './reducer';

export type StateType = {
  todos: Array<TodoType>;
};
