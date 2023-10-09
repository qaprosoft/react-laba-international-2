import {AddTaskInput, Error, TasksList} from '@/components';

export default function Home() {
  return (
    <main className="">
      <AddTaskInput />
      <Error />
      <TasksList />
    </main>
  );
}
