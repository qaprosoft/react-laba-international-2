import { useLocalStorage } from 'usehooks-ts'
import { Task } from '../types'

export default function useTaskList() {
  const [tasks, setTasks] = useLocalStorage<Task[]>('tasks', [])

  return {
    tasks,
    setTasks,
  }
}