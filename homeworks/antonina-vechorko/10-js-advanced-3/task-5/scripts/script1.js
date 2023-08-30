// task 5 https://github.com/qaprosoft/react-laba-international-2/blob/main/lectures/10-js-advanced-3/task.md#5-fetch-apixmlhttprequest
// using Fetch
const root = document.getElementById('root');
const title = document.createElement('h1');
title.textContent = 'Runners';
root.append(title);

const url = 'https://randomuser.me/api/?gender=female&results=10';

const getUsers = async () => {
  const response = await fetch(url);
  const {results} = await response.json();

  const usersInfo = results.map(user => ({
    firstName: user.name.first,
    lastName: user.name.last,
    avatar: user.picture.large,
  }));

  displayUsers(usersInfo);
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
