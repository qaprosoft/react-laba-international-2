import {AddTaskInput, Error, TasksList} from '@/components';

export default function Home() {
  return (
    <main className="bg-gradient-to-r from-[#8C72B7] to-[#C02EC300] w-full min-h-screen flex flex-col items-center py-[99px] px-3 gap-[81px]">
      <AddTaskInput />
      <Error />
      <TasksList />
    </main>
  );
}
