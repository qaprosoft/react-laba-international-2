import { useLocalStorage } from './'

export default function useLastTaskId() {
  const [lastTaskId, setLastTaskId] = useLocalStorage<number>('lastId', 0)

  return {
    lastTaskId,
    setLastTaskId,
  }
}