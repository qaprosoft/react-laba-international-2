const fetchRequest = async (baseUrl, gender, usersCount) => {
  try {
    const response = await fetch(
      `${baseUrl}?gender=${gender}&results=${usersCount}`,
    );

    if (!response.ok) {
      throw Error(`HTTP status code: ${response.status}`);
    }

    return await response.json();
  } catch (err) {
    console.log(err);
  }
};

export default fetchRequest;
