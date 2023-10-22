import React, {useContext} from 'react';
import Button from '../Button/Button';
import {TaskDispatchContext} from '../../context/Context';

const ActionButtons = () => {
  const dispatch = useContext(TaskDispatchContext);

  const handleClearAll = () => {
    dispatch({
      type: 'clear all',
    });
  };

  const handleClearAllCompleted = () => {
    dispatch({
      type: 'clear all completed',
    });
  };

  return (
    <div>
      <Button onClick={() => handleClearAll()}>Clear All</Button>
      <Button onClick={() => handleClearAllCompleted()}>
        Clear All Completed
      </Button>
    </div>
  );
};

export default ActionButtons;
