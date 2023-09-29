export type PropsType = {
  value: string;
  callback: (id: string, value: string) => void;
  id: string;
  deleteCallback: (id: string) => void;
};
