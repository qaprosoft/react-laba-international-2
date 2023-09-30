import * as React from "react";
import { TodosContext } from "../store/todos";

export function useTodoActions() {
  const todos = React.useContext(TodosContext);
  const [isEditable, setIsEditable] = React.useState<boolean>(false);

  const editTodo = (id: string, newValue: string) => {
    if(!isEditable) {
      setIsEditable(true);
    } else {
      todos?.updateTodo(id, newValue);
      setIsEditable(false);
    }
  }

  const deleteTodoEl = (id: string) => {
    todos?.deleteTodo(id);
  }

  const changeTodoDoneStatus = (id: string) => {
    todos?.toggleTodo(id);
  }

  return { isEditable, editTodo, deleteTodoEl, changeTodoDoneStatus };
}