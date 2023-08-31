const api = 'https://randomuser.me/api/?gender=female&results=10';
const usersList = document.querySelector('.usersList');

const fetchUsers = async () => {
  try {
    const response = await fetch(api);
    const data = await response.json();
    return data.results;
  } catch (error) {
    throw new Error('Error while fetching');
  }
};

const fetchUsersWithXHR = () =>
  new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', api);
    xhr.send();
    xhr.onload = () => {
      if (xhr.status !== 200) {
        reject(new Error('Error while fetching'));
      }

      resolve(JSON.parse(xhr.response).results);
    };
  });

(async () => {
  try {
    const users = await fetchUsers();
    // const users = await fetchUsersWithXHR();

    for (const userObj of users) {
      const userContainer = document.createElement('div');
      const userImage = document.createElement('img');
      const userName = document.createElement('p');

      userImage.src = userObj.picture.thumbnail;
      userName.innerText = `${userObj.name.first} ${userObj.name.last}`;
      userContainer.classList.add('usersList__user');

      userContainer.append(userImage, userName);
      usersList.append(userContainer);
    }
  } catch {
    const errorMessage = document.createElement('p');
    errorMessage.innerText = 'Error while fetching';
    usersList.append(errorMessage);
  }
})();
