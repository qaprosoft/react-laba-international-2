const root = document.getElementById('root');
const title = document.createElement('h1');
title.textContent = 'Runners';
root.append(title);

const url = 'https://randomuser.me/api/?gender=female&results=10';

const getUsers = () => {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', url);
  xhr.send();

  xhr.onload = () => {
    if (xhr.status !== 200) {
      console.log(`Error ${xhr.status}: ${xhr.statusText}`);
    } else {
      const data = JSON.parse(xhr.responseText);
      const usersInfo = data.results.map(user => ({
        firstName: user.name.first,
        lastName: user.name.last,
        avatar: user.picture.large,
      }));
      displayUsers(usersInfo);
    }
  };

  xhr.onerror = () => {
    console.log('Request failed');
  };
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
