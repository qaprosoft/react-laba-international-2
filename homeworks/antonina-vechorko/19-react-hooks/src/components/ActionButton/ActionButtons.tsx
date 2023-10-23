import React, {useContext, FC} from 'react';
import Button from '../Button/Button';
import {TaskDispatchContext} from '../../context/Context';

const ActionButtons: FC = () => {
  const dispatch = useContext(TaskDispatchContext);

  const handleClearAll = () => {
    if (dispatch) {
      dispatch({
        type: 'clear all',
      });
    }
  };

  const handleClearAllCompleted = () => {
    if (dispatch) {
      dispatch({
        type: 'clear all completed',
      });
    }
  };

  return (
    <div className="action-btn__wrapper">
      <Button onClick={() => handleClearAll()}>Clear All</Button>
      <Button onClick={() => handleClearAllCompleted()}>
        Clear All Completed
      </Button>
    </div>
  );
};

export default ActionButtons;
