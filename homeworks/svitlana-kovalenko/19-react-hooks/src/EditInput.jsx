import React, {useState} from 'react';

export const EditInput = ({handleEdit, task}) => {
  const [value, setValue] = useState('');
  const handleSubmit = e => {
    e.preventDefault();

    handleEdit(value, task.id);
  };
  return (
    <form className="todos_wrap" onSubmit={handleSubmit}>
      <input
        type="text"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
      <button type="submit">Update</button>
    </form>
  );
};
