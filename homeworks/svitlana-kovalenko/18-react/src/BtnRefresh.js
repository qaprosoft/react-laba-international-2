import React from 'react';

const BtnRefresh = ({ onClick }) => {
  return (
    <button className="refresh" onClick={onClick}>
      Refresh All
    </button>
  );
};

export default BtnRefresh;