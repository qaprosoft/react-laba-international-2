export const fetchAvatars = async limit => {
  const response = await fetch(
    `https://tinyfac.es/api/data?limit=${limit}&quality=2`,
  );
  const data = await response.json();
  return data.length === 1 ? data[0] : data;
};
