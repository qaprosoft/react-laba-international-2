// xhr-script.js
const userListElement = document.getElementById('user-list');

function displayUser(user) {
  const userElement = document.createElement('div');
  userElement.innerHTML = `
    <img src="${user.picture.medium}" alt="User Picture">
    <p>Name: ${user.name.first} ${user.name.last}</p>
    <p>Email: ${user.email}</p>
  `;
  userListElement.appendChild(userElement);
}

function handleLoad() {
  if (this.status === 200) {
    const data = JSON.parse(this.responseText);
    const users = data.results;
    users.forEach(displayUser);
  } else {
    console.error('Error fetching data:', this.statusText);
  }
}

function handleError() {
  console.error('Request failed');
}

const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://randomuser.me/api/?gender=female&results=10', true);
xhr.onload = handleLoad;
xhr.onerror = handleError;
xhr.send();
