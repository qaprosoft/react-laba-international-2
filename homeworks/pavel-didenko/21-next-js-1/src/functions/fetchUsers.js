export default async function fetchUsers(url, limit, quality) {
  const queryURL = `${url}?limit=${limit}&quality=${quality}`;
  try {
    const response = await fetch(queryURL);
    const json = await response.json();
    return json;
  } catch (err) {
    console.log(err.message);
  }
}
