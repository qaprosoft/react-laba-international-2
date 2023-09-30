import './App.css';
import { v4 } from 'uuid';
import { useState, useEffect } from 'react';

import ToDoItem from './components/ToDoItem';

function App() {
  const [toDoList, setToDoList] = useState([]);
  const [inputValue, setInputValue] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    const valueToStore = JSON.stringify(inputValue);
    const isValueExist = Object.values(localStorage).includes(valueToStore);
    if (isValueExist) {
      setInputValue('');
      alert('This value already exist');
    } else if (inputValue.length > 25) {
      setInputValue('');
      alert('The value should be not longer 25 symbols');
    } else {
      const id = v4();
      localStorage.setItem(id, JSON.stringify(inputValue));
      setToDoList([...toDoList, { value: inputValue, id }]);
      setInputValue('');
    }
  }
  useEffect(() => {
    const storedData = Object.entries(localStorage).map(([key, data]) => ({
      id: key,
      value: JSON.parse(data),
    }));
    setToDoList(storedData);
  }, []);
  console.log(toDoList);

  function editToDo(value, id) {
    const valueToStore = JSON.stringify(value);
    const localStorageValues = Object.values(localStorage)
    const idxOfValueExist = localStorageValues.indexOf(valueToStore);
    if (idxOfValueExist >= 0) {
      alert('This value already exist');
    } else {
      const updatedToDoList = toDoList.map(list =>
        list.id === id ? { id: list.id, value: value } : list
      );
      localStorage.setItem(id, JSON.stringify(value));
      setToDoList(updatedToDoList);

    }
  }

  function deleteToDo(id) {
    localStorage.removeItem(id);
    const updatedToDoList = toDoList.filter(list => list.id !== id);
    setToDoList(updatedToDoList);
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder='Create To-Do Task'
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
        />
        <button className='submit' type="submit">Add</button>
      </form>
      <div className="toDoItemList">
        {toDoList.map(toDo => (
          <ToDoItem
            toDo={toDo}
            key={toDo.id}
            editToDo={editToDo}
            deleteToDo={deleteToDo}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
