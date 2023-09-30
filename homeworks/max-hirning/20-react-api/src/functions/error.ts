import { ITodo } from "../store/types";
import { isValidValue } from "./string";

export function checkTodoValue({ value, todos }: { value: string, todos?: ITodo[] }, callBack: () => void) {
  if(value.length === 0) {
    alert("You can't create empty todo");
    return;
  }
  if(todos?.some((el: ITodo) => el.value === value)) {
    alert("You can't create existing todo");
    return;
  }
  if(!(isValidValue(value))) {
    alert("Todo can have only letters, numbers and spaces");
    return;
  }
  callBack();
}