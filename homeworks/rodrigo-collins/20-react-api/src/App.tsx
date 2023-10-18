import TodoApp from './components/TodoApp/TodoApp'
import TodoContextProvider from './context/TodoContext'
import './App.css'

const App = () => {
  return (
    <TodoContextProvider>
      <TodoApp />
    </TodoContextProvider>

  )
}

export default App