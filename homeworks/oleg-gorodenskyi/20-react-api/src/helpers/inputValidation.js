import {v4} from 'uuid';

const inputValidation = (inputValue, toDos, modify, id) => {
  let actualState = toDos;
  let isValueExist = actualState.some(list => list.value === inputValue);
  if (isValueExist) {
    alert('This value is already exist');
  } else if (inputValue.length > 25) {
    alert('The value should be not longer than 25 symbols');
  } else if (modify === 'Add') {
    const id = v4();
    const storedData = [...toDos, {value: inputValue, isCompleted: false, id}];

    localStorage.setItem('toDoList', JSON.stringify(storedData));
    actualState = storedData;
  } else {
    const updatedToDoList = actualState.map(list =>
      list.id === id
        ? {id: list.id, value: inputValue, completed: false}
        : list,
    );
    localStorage.setItem('toDoList', JSON.stringify(updatedToDoList));
    actualState = updatedToDoList;
    return {
      updatedToDoList,
      toFalse: false,
    };
  }
  return actualState;
};

export default inputValidation;
