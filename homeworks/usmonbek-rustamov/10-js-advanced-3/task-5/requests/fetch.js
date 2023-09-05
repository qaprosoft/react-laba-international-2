const fetchRequest = async (baseUrl, gender, usersCount) => {
  const response = await fetch(
    `${baseUrl}?gender=${gender}&results=${usersCount}`,
  );

  if (!response.ok) {
    throw Error(`HTTP status code: ${response.status}`);
  }

  return await response.json();
};

export default fetchRequest;
