import React from 'react';

const AddBtn = ({focusInput}) => {

  return (
    <button onClick={focusInput} className="submit" type="submit">
      Add
    </button>
  );
};

export default AddBtn;
