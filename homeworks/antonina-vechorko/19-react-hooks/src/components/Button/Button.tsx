import React, {useContext} from 'react';
import {TaskDispatchContext} from '../../context/Context';

const Button = ({children, onClick}) => {
  const dispatch = useContext(TaskDispatchContext);

  return <button onClick={onClick}>{children}</button>;
};

export default Button;
