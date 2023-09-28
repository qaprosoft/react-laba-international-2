'use client';

import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { v4 as uuidv4 } from 'uuid';

import styles from '@/app/page.module.scss';
import Input from '@/components/Input';
import ToDo from '@/components/ToDo';
import constants from '@/constants';
import isValidInput from '@/helpers/isValidInput';
import IToDo from '@/types/toDo';
import { useEffectOnUpdateOnly } from '@/customHooks/useEffectOnUpdateOnly';

export default function Home() {
  const [toDos, setToDos] = useState<IToDo[]>([]);

  useEffect(() => {
    const storedTasks = localStorage.getItem('toDos');

    if (storedTasks) {
      setToDos(JSON.parse(storedTasks));
    }
  }, []);

  useEffectOnUpdateOnly(() => {
    localStorage.setItem('toDos', JSON.stringify(toDos));
  }, [toDos]);

  const addToDo = (newToDo: string) => {
    if (!isValidInput(newToDo)) return;

    if (toDos.some(item => item.value === newToDo)) {
      toast.warning(constants.ErrorMessages.duplicate);
      return;
    }

    setToDos([...toDos, { value: newToDo, done: false, id: uuidv4() }]);
  };

  const deleteToDo = (id: string) => {
    setToDos(toDos.filter(toDo => toDo.id !== id));
  };

  const editToDo = (
    id: string,
    newValue: string | boolean,
    keyToChange: keyof IToDo,
  ) => {
    setToDos(
      toDos.map(toDo =>
        toDo.id === id ? { ...toDo, [keyToChange]: newValue } : toDo,
      ),
    );
  };

  return (
    <main className={styles.main}>
      <Input addToDo={addToDo} />

      <div className={styles.main__list}>
        {toDos.map(toDo => {
          return (
            <ToDo
              key={toDo.id}
              taskData={toDo}
              deleteToDo={deleteToDo}
              editToDo={editToDo}
            />
          );
        })}
      </div>
    </main>
  );
}
