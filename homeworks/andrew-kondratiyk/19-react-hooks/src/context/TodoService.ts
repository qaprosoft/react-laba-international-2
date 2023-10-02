import {
  TodoCreateRequest,
  TodoResponse,
  TodoUpdateRequest,
} from '@/types/todos';
import axios from 'axios';
import {createContext} from 'react';
import {v4} from 'uuid';

interface TodoService {
  getAll: () => Promise<any>;
  create: (todo: TodoCreateRequest) => Promise<any>;
  deleteById: (id: string) => Promise<any>;
  update: ({id, todo}: {id: string; todo: TodoUpdateRequest}) => Promise<any>;
  deleteMany: () => Promise<any>;
  deleteComplete: () => Promise<any>;
}

export class BackendTodoService implements TodoService {
  private userId: string;

  constructor(userId: string) {
    this.userId = userId;
  }
  public getAll = async () => {
    return axios.get(`/api/todos/${this.userId}`);
  };
  public create = async (todo: TodoCreateRequest) => {
    return axios.post(`/api/todos/${this.userId}`, todo);
  };
  public deleteById = async (id: string) => {
    return axios.delete(`/api/todos/${this.userId}/${id}`);
  };
  public update = async ({id, todo}: {id: string; todo: TodoUpdateRequest}) => {
    return axios.put(`/api/todos/${this.userId}/${id}`, todo);
  };
  public deleteMany = async () => {
    return axios.delete(`/api/todos/${this.userId}`);
  };
  public deleteComplete = async () => {
    return axios.delete(`/api/todos/${this.userId}/completed`);
  };
}

export class LocalStorageTodoService implements TodoService {
  public getAll = async () => {
    const todos = localStorage.getItem('todos');

    return todos ? JSON.parse(todos) : [];
  };
  public create = async (todo: TodoCreateRequest) => {
    let list = await this.getAll();

    const createdTodo = {
      _id: v4(),
      completed: false,
      ...todo,
    };

    const newList = [...list, createdTodo];
    localStorage.setItem('todos', JSON.stringify(newList));
  };
  public deleteById = async (id: string) => {
    let list = await this.getAll();

    const newList = list.filter((todo: any) => todo._id !== id);
    localStorage.setItem('todos', JSON.stringify(newList));
  };
  public update = async ({id, todo}: {id: string; todo: TodoUpdateRequest}) => {
    let list = await this.getAll();
    const newList = list.map((listTodo: TodoResponse) => {
      if (listTodo._id === id) {
        return {...listTodo, ...todo};
      }
      return listTodo;
    });
    localStorage.setItem('todos', JSON.stringify(newList));
  };
  public deleteMany = async () => {
    localStorage.setItem('todos', JSON.stringify([]));
  };
  public deleteComplete = async () => {
    let list = await this.getAll();

    const newList = list.filter((todo: TodoResponse) => !todo.completed);
    localStorage.setItem('todos', JSON.stringify(newList));
  };
}

export const ServiceContext = createContext<TodoService>(
  new LocalStorageTodoService(),
);
