import { useLocalStorage } from './'
import { Task } from '@/types'

export default function useTasksList() {
  const [tasks, setTasks] = useLocalStorage<Task[]>('tasks', [])

  return {
    tasks,
    setTasks,
  }
}