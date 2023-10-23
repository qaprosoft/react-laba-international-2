import React, {useContext, ReactNode, MouseEvent, FC} from 'react';
import {TaskDispatchContext} from '../../context/Context';

interface IButtonProps {
  children: ReactNode;
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
}

const Button: FC<IButtonProps> = ({children, onClick}) => {
  const dispatch = useContext(TaskDispatchContext);

  return <button onClick={onClick}>{children}</button>;
};

export default Button;
