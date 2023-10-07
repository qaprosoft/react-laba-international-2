import './App.css';
import { v4 } from 'uuid';
import { useState, useEffect, useContext, useRef } from 'react';

import ToDoItem from './components/ToDoItem';
import AddBtn from './components/AddBtn';
import IconBtn from './components/IconBtn';
import deleteAllCompleted from './assets/delete-list.png'
import ForwardedInput from './components/Input';

function App() {
  const [toDoList, setToDoList] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const inputRef = useRef(null)


  useEffect(() => {
    const storedData = localStorage.getItem('toDoList');
    if (storedData) {
      setToDoList(JSON.parse(storedData));
    }
  }, []);

  function handleSubmit(event) {
    event.preventDefault();
    let isValueExist = toDoList.some(list => list.value === inputValue);

    if (isValueExist) {
      alert('This value is already exist');
    } else if (inputValue.length > 25) {
      alert('The value should be not longer than 25 symbols');
    } else {
      const id = v4();
      const storedData = [
        ...toDoList,
        { value: inputValue, isCompleted: false, id },
      ];
      setToDoList(storedData);
      localStorage.setItem('toDoList', JSON.stringify(storedData));
    }
    setInputValue('')
  }

  function deleteToDo(id) {
    const updatedToDoList = toDoList.filter(list => list.id !== id);
    setToDoList(updatedToDoList);
    localStorage.setItem('toDoList', JSON.stringify(updatedToDoList));
  }

  function clearAllCompletedToDo() {
    const filteredToDoList = toDoList.filter(list => list.isCompleted === false)
    setToDoList(filteredToDoList)
    localStorage.setItem('toDoList', JSON.stringify(filteredToDoList))
  }

  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }


  return (
      <div className="App">
        <form onSubmit={handleSubmit}>
          <ForwardedInput
            inputHandler={e => setInputValue(e.target.value)}
            value={inputValue}
            placeholder="Create To-Do Task"
            handleSubmit={handleSubmit}
            ref={inputRef}
          />
          <AddBtn focusInput={focusInput} />
          <IconBtn src={deleteAllCompleted} alt='delete all marked' iconHandler={clearAllCompletedToDo} />
        </form>
        <div className="toDoItemList">
          {toDoList.map(toDo => (
            <ToDoItem
            toDoList={toDoList}
              toDo={toDo}
              key={toDo.id}
              deleteToDo={deleteToDo}
              setToDoList={setToDoList}
            />
          ))}
        </div>
      </div>
  );
}

export default App;
