import React, {FC, MouseEvent} from 'react';

interface IIconButtonProps {
  src: string;
  alt: string;
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
}

const IconButton: FC<IIconButtonProps> = ({src, alt, onClick}) => {
  return (
    <button onClick={onClick}>
      <img src={src} alt={alt} />
    </button>
  );
};

export default IconButton;
