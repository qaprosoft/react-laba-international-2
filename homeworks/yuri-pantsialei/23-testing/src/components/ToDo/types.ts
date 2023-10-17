export type PropsType = {
  value: string;
  id: string;
  isChecked: boolean;
  deleteCallback: (id: string) => void;
  changeEditMode: (id: string, value: string) => void;
  changeTodoStatus: (id: string, status: boolean) => void;
};
