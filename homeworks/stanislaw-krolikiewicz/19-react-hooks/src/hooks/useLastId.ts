import { useLocalStorage } from 'usehooks-ts'

export default function useLastId() {
  const [lastId, setLastId] = useLocalStorage<number>('lastId', 0)

  return {
    lastId,
    setLastId,
  }
}