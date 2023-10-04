export type PropsType = {
  value: string;
  changeEditMode: (id: string, value: string) => void;
  id: string;
  deleteCallback: (id: string) => void;
};
