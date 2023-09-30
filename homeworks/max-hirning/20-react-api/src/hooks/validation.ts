import * as React from "react";
import { ITodo } from "../store/types";
import { TodosContext } from "../store/todos"; 

export function useStringValidation(value: string, compareWithExistingValues?: boolean): boolean {
  const regex = /^[^#^&*\\|/<>`~]+$/;
  const todos = React.useContext(TodosContext);

  const doesTodoAllreadyExists = React.useMemo(() => {
    if(compareWithExistingValues) return todos?.todos.some((el: ITodo) => el.value === value);
    return false;
  }, [todos?.todos, compareWithExistingValues, value])

  return !regex.test(value) || value.length === 0 || Boolean(doesTodoAllreadyExists);
}