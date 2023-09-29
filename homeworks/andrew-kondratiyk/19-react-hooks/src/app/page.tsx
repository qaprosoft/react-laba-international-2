import {AuthOptions} from '@/app/api/auth/[...nextauth]/route';
import MainPage from '@/components/pages/main-page/MainPage';
import {getServerSession} from 'next-auth';

export default async function Home(props: any) {
  const session = await getServerSession(AuthOptions);
  return <MainPage session={session} />;
}
