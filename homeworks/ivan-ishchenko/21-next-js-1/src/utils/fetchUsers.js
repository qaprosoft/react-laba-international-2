const fetchUsers = async (onError, setLoading, limit = 1) => {
  let data = [];
  try {
    setLoading(true);
    const res = await fetch(
      `https://tinyfac.es/api/data?limit=${limit}&quality=0`,
    );
    if (!res.ok) throw new Error('Could not load avatars. Try again later');
    data = await res.json();
  } catch (error) {
    onError(error.message);
  } finally {
    setLoading(false);
  }
  return data;
};

export default fetchUsers;
