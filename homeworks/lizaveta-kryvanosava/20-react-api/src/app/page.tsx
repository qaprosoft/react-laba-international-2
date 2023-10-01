'use client';

import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import AddToDoForm from '@/components/AddToDoForm';
import ToDo from '@/components/ToDo';
import { useEffectOnUpdateOnly } from '@/customHooks/useEffectOnUpdateOnly';
import isToDoValid from '@/helpers/isToDoValid';
import IToDo from '@/types/toDo';

import styles from './page.module.scss';

export default function Home() {
  const [toDos, setToDos] = useState<IToDo[]>([]);
  const [editingId, setEditingId] = useState<IToDo['id'] | null>(null);

  useEffect(() => {
    const storedList = localStorage.getItem('toDos');

    if (storedList) {
      setToDos(JSON.parse(storedList));
    }
  }, []);

  useEffectOnUpdateOnly(() => {
    localStorage.setItem('toDos', JSON.stringify(toDos));
  }, [toDos]);

  const addToDo = (newToDoValue: IToDo['value']) => {
    if (!isToDoValid(toDos, newToDoValue)) return;

    setToDos([...toDos, { value: newToDoValue, done: false, id: uuidv4() }]);
  };

  const deleteToDo = (id: IToDo['id']) => {
    setToDos(toDos.filter(toDo => toDo.id !== id));
  };

  const editToDo = <T extends keyof IToDo>(
    id: IToDo['id'],
    newValue: IToDo[T],
    keyToChange: T,
  ) => {
    setToDos(
      toDos.map(toDo =>
        toDo.id === id ? { ...toDo, [keyToChange]: newValue } : toDo,
      ),
    );
  };

  const isInputValid = (newValue: string) => isToDoValid(toDos, newValue);

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
            setEditingId={setEditingId}
            isInputValid={isInputValid}
            isEditing={editingId === toDo.id}
          />
        ))}
      </div>
    </main>
  );
}
