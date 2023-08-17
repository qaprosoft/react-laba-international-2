const root = document.getElementById('root');
const title = document.createElement('h1');
title.textContent = 'Runners';
root.append(title);

const url = 'https://randomuser.me/api/?gender=female&results=10';

const getUsers = () => {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', url);

  xhr.onload = () => {
    if (xhr.status === 200) {
      const data = JSON.parse(xhr.responseText);
      const usersInfo = data.results.map(user => ({
        firstName: user.name.first,
        lastName: user.name.last,
        avatar: user.picture.large,
      }));
      displayUsers(usersInfo);
    } else {
      console.error(`Request failed with status: ${xhr.status}`);
    }
  };

  xhr.onerror = () => {
    console.error('Request failed');
  };

  xhr.send();
};

const displayUsers = usersInfo => {
  const ul = document.createElement('ul');
  root.appendChild(ul);

  usersInfo.forEach(userInfo => {
    const li = document.createElement('li');
    const p = document.createElement('p');
    const img = document.createElement('img');

    p.textContent = `${userInfo.firstName} ${userInfo.lastName}`;
    img.src = userInfo.avatar;

    li.append(img, p);
    ul.appendChild(li);
  });
};

getUsers();
