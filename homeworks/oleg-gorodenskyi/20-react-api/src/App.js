import './App.css';
import {v4} from 'uuid';
import {useState, useEffect} from 'react';

import ToDoItem from './components/ToDoItem';
import AddBtn from './components/AddBtn';
import Input from './components/Input';
import IconBtn from './components/IconBtn';
import deleteAllCompleted from './assets/delete-list.png'

function App() {
  const [toDoList, setToDoList] = useState([]);
  const [inputValue, setInputValue] = useState('');

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
      setInputValue('');
      alert('This value is already exist');
    } else if (inputValue.length > 25) {
      setInputValue('');
      alert('The value should be not longer than 25 symbols');
    } else {
      const id = v4();
      const storedData = [
        ...toDoList,
        {value: inputValue, isCompleted: false, id},
      ];
      setToDoList(storedData);
      localStorage.setItem('toDoList', JSON.stringify(storedData));
      setInputValue('');
    }
  }

  console.log(toDoList);

  function deleteToDo(id) {
    const updatedToDoList = toDoList.filter(list => list.id !== id);
    setToDoList(updatedToDoList);
    localStorage.setItem('toDoList', JSON.stringify(updatedToDoList));
  }

  function clearAllCompletedToDo() {
    const filteredToDoList = toDoList.filter(list => list.isCompleted === false)
    setToDoList(filteredToDoList)
    localStorage.setItem('toDoList',JSON.stringify(filteredToDoList))
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <Input
          inputHandler={e => setInputValue(e.target.value)}
          value={inputValue}
          placeholder="Create To-Do Task"
        />
        <AddBtn />
        <IconBtn src={deleteAllCompleted} alt='delete all marked' iconHandler={clearAllCompletedToDo}/>
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
