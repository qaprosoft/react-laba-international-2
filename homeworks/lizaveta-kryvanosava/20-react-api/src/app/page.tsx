'use client';

import { useEffect } from 'react';

import AddToDoForm from '@/components/AddToDoForm';
import ToDo from '@/components/ToDo';
import { useEffectOnUpdateOnly } from '@/customHooks/useEffectOnUpdateOnly';
import useToDoContext from '@/customHooks/useToDoContext';

import styles from './page.module.scss';

export default function Home() {
  const { setToDos, toDos } = useToDoContext();

  useEffect(() => {
    const storedList = localStorage.getItem('toDos');

    if (storedList) {
      setToDos(JSON.parse(storedList));
    }
  }, []);

  useEffectOnUpdateOnly(() => {
    localStorage.setItem('toDos', JSON.stringify(toDos));
  }, [toDos]);

  return (
    <main className={styles.main}>
      <AddToDoForm />

      <div className={styles.main__list}>
        {toDos.map(toDo => (
          <ToDo key={toDo.id} toDoData={toDo} />
        ))}
      </div>
    </main>
  );
}
