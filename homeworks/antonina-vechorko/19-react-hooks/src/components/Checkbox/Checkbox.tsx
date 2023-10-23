import React, {ChangeEvent, FC} from 'react';

interface ICheckboxProps {
  checked: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Checkbox: FC<ICheckboxProps> = ({checked, onChange}) => {
  return <input type="checkbox" checked={checked} onChange={onChange} />;
};

export default Checkbox;
