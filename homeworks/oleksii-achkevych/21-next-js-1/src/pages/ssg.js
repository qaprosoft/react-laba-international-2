import HomePage from '../components/HomePage/HomePage';

export default function SSGPage({avatars}) {
  return <HomePage avatars={avatars} />;
}

export async function getStaticProps() {
  const API_URL = 'https://tinyfac.es/api/data';
  const response = await fetch(`${API_URL}?limit=5&quality=0`);
  const avatars = await response.json();

  return {
    props: {
      avatars,
    },
  };
}
