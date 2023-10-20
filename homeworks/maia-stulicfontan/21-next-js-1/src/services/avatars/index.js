export const fetchAvatars = async numberOfAvatars => {
  const response = await fetch(
    `https://tinyfac.es/api/data?limit=${numberOfAvatars}`,
  );
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.reason);
  } else {
    return data.length === 1 ? data[0] : data;
  }
};
