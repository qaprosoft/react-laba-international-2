// fetch-script.js
const userListElement = document.getElementById('user-list');

fetch('https://randomuser.me/api/?gender=female&results=10')
  .then(response => response.json())
  .then(data => {
    const users = data.results;
    users.forEach(user => {
      const userElement = document.createElement('div');
      userElement.innerHTML = `
        <img src="${user.picture.medium}" alt="User Picture">
        <p>Name: ${user.name.first} ${user.name.last}</p>
        <p>Email: ${user.email}</p>
      `;
      userListElement.appendChild(userElement);
    });
  })
  .catch(error => console.error('Error fetching data:', error));