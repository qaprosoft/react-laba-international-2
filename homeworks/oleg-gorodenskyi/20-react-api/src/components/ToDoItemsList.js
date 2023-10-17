import React, { useContext } from 'react'
import { ToDoContext } from '../store/toDoContext'
import ToDoItem from './ToDoItem'

const ToDoItemsList = () => {
    const {toDos} = useContext(ToDoContext)
    return (
        <div className="toDoItemList">
            {toDos.map(toDo => (
                <ToDoItem
                    toDo={toDo}
                    key={toDo.id}
                />
            ))}
        </div>
    )
}

export default ToDoItemsList