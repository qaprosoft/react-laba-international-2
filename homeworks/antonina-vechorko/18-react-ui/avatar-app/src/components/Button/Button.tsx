import React, {FC} from 'react';

interface IButtonProps {
  onClick: () => void;
  children: any;
  className: string;
}

const Button: FC<IButtonProps> = ({onClick, children, className}) => {
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
