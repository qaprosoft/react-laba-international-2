
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

fetch('https://randomuser.me/api/?gender=female&results=10')
  .then(response => response.json())
  .then(data => renderUsers(data.results))





