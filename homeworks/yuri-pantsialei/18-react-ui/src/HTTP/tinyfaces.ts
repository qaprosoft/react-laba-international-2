const url = 'https://tinyfac.es/api/data';

export const getTinyfaces = async (amount: number = 1) => {
  const response = await fetch(`${url}?limit=${amount}`);
  const data = await response.json();
  return data;
};
