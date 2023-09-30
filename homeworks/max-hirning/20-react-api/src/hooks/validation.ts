import * as React from "react";
import { ITodo } from "../store/types";
import { TodosContext } from "../store/todos"; 

export function useStringValidation(value: string, compareWithExistingValues?: boolean): boolean {
  const regex = /^[^#^&*\\|/<>`~]+$/;
  const todos = React.useContext(TodosContext);

  return !regex.test(value) || value.length === 0 || Boolean(compareWithExistingValues ? todos?.todos.some((el: ITodo) => el.value === value) : false);
}