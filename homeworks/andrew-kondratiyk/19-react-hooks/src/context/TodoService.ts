import {
  TodoCreateRequest,
  TodoResponse,
  TodoUpdateRequest,
} from '@/types/todos';
import axios from 'axios';
import {createContext} from 'react';

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
    const todos = localStorage.getItem(`todos`);

    return todos ? JSON.parse(todos) : null;
  };
  public create = async (todo: TodoCreateRequest) => {
    const id = Math.ceil(Math.random() * 10_000);

    const createdTodo = {
      id,
      todo,
    };

    window.localStorage.setItem(`todo-${id}`, JSON.stringify(createdTodo));

    let newList = await this.getAll();

    if (!newList) {
      newList = [];
    }

    newList.push(id);
  };
  public deleteById = async (id: string) => {};
  public update = async ({
    id,
    todo,
  }: {
    id: string;
    todo: TodoUpdateRequest;
  }) => {};
  public deleteMany = async () => {};
  public deleteComplete = async () => {};
}

export const ServiceContext = createContext<TodoService>(
  new LocalStorageTodoService(),
);
