const renderUsers = (users) => {
  const usersList = document.querySelector('.random-users');

  users.forEach(user => {
    const div = document.createElement('div');
    div.classList.add('random-user');
    console.log(user);
    div.innerHTML = `
      <img class="random-user__avatar" alt="avatar" src=${user.picture.medium}>
      <div class="random-user__name">${user.name.first} ${user.name.last}</div>
    `;
    usersList.append(div);
  });
}

const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://randomuser.me/api/?gender=female&results=10', true);
xhr.onload = function () {
  if (xhr.status === 200) {
    const data = JSON.parse(xhr.responseText);
    renderUsers(data.results);
  } else {
    console.error('Request failed. Status:', xhr.status);
  }
};
xhr.send();