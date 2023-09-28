'use client';

import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { v4 as uuidv4 } from 'uuid';

import styles from '@/app/page.module.scss';
import AddToDoForm from '@/components/AddToDoForm';
import ToDo from '@/components/ToDo';
import constants from '@/constants';
import isValidInput from '@/helpers/isValidInput';
import IToDo from '@/types/toDo';
import { useEffectOnUpdateOnly } from '@/customHooks/useEffectOnUpdateOnly';

export default function Home() {
  const [toDos, setToDos] = useState<IToDo[]>([]);

  useEffect(() => {
    const storedList = localStorage.getItem('toDos');

    if (storedList) {
      setToDos(JSON.parse(storedList));
    }
  }, []);

  useEffectOnUpdateOnly(() => {
    localStorage.setItem('toDos', JSON.stringify(toDos));
  }, [toDos]);

  const addToDo = (newToDoValue: string) => {
    if (!isValidInput(newToDoValue)) return;

    if (toDos.some(item => item.value === newToDoValue)) {
      toast.warning(constants.ErrorMessages.duplicate);
      return;
    }

    setToDos([...toDos, { value: newToDoValue, done: false, id: uuidv4() }]);
  };

  const deleteToDo = (id: string) => {
    setToDos(toDos.filter(toDo => toDo.id !== id));
  };

  const editToDo = <T extends keyof IToDo>(
    id: string,
    newValue: IToDo[T],
    keyToChange: T,
  ) => {
    setToDos(
      toDos.map(toDo =>
        toDo.id === id ? { ...toDo, [keyToChange]: newValue } : toDo,
      ),
    );
  };

  return (
    <main className={styles.main}>
      <AddToDoForm addToDo={addToDo} />

      <div className={styles.main__list}>
        {toDos.map(toDo => (
          <ToDo
            key={toDo.id}
            toDoData={toDo}
            deleteToDo={deleteToDo}
            editToDo={editToDo}
          />
        ))}
      </div>
    </main>
  );
}
