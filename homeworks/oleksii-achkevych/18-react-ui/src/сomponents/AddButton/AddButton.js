import React from 'react';

const AddButton = ({onClick, isLoading}) => {
  return (
    <button
      className="empty-square-button"
      onClick={onClick}
      style={{display: isLoading ? 'none' : 'flex'}}
    >
      +
    </button>
  );
};

export default AddButton;
