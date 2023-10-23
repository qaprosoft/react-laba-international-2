import React, {ReactNode, MouseEvent, FC} from 'react';

interface IButtonProps {
  children: ReactNode;
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
}

const Button: FC<IButtonProps> = ({children, onClick}) => {
  return <button onClick={onClick}>{children}</button>;
};

export default Button;
