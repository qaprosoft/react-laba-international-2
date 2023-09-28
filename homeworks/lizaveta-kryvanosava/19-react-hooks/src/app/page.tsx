'use client';

import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { v4 as uuidv4 } from 'uuid';

import styles from '@/app/page.module.scss';
import Input from '@/components/Input';
import ToDo from '@/components/ToDo';
import constants from '@/constants';
import inputValidation from '@/helpers/inputValidation';
import IToDo from '@/types/toDo';

export default function Home() {
  const [toDos, setToDos] = useState<IToDo[]>(
    JSON.parse(localStorage.getItem('toDos') as string) || [],
  );

  useEffect(() => {
    localStorage.setItem('toDos', JSON.stringify(toDos));
  }, [toDos]);

  const addHandler = (newToDo: string): void => {
    if (!inputValidation(newToDo)) return;

    if (toDos.find(toDo => toDo.value === newToDo)) {
      toast.warning(constants.ErrorMessages.duplicate);
      return;
    }

    setToDos([...toDos, { value: newToDo, done: false, id: uuidv4() }]);
  };

  const deleteHandler = (id: string) => {
    setToDos(toDos.filter(toDo => toDo.id !== id));
  };

  const editHandler = (
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
      <Input addHandler={addHandler} />

      <div className={styles.main__list}>
        {toDos.map(toDo => {
          return (
            <ToDo
              key={toDo.id}
              data={toDo}
              deleteHandler={deleteHandler}
              editHandler={editHandler}
            />
          );
        })}
      </div>
    </main>
  );
}
