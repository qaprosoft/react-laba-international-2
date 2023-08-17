const usersList = document.querySelector('.usersList');

const fetchUsers = async () => {
  const response = await fetch(
    'https://randomuser.me/api/?gender=female&results=10',
  );
  const data = await response.json();

  return data.results;
};

const XMLHttpRequestUsers = () =>
  new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://randomuser.me/api/?gender=female&results=10');
    xhr.send();
    xhr.onload = () => {
      if (xhr.status != 200) {
        reject(new Error('Request failed'));
      }

      resolve(JSON.parse(xhr.response).results);
    };
  });

(async () => {
  try {
    const users = await fetchUsers();
    // const users = await XMLHttpRequestUsers();

    users.forEach(el => {
      const user = document.createElement('div');
      const userImage = document.createElement('img');
      const userName = document.createElement('p');

      userImage.src = el.picture.thumbnail;
      userName.innerText = `${el.name.first} ${el.name.last}`;
      user.classList.add('usersList__user');

      user.append(userImage, userName);
      usersList.append(user);
    });
  } catch {
    const errorMessage = document.createElement('p');

    errorMessage.innerText = 'Something went wrong !';
    usersList.append(errorMessage);
  }
})();
