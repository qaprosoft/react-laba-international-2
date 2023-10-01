import { ReactNode } from 'react';

export default interface IIconButtonProps {
  onClickHandler: () => void;
  children: ReactNode;
  externalStyles: string;
}
