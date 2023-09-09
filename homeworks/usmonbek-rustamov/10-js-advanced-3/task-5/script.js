import fetchRequest from './requests/fetch.js';
import xmlhttpRequest from './requests/xmlhttp.js';

// Elements
const requestForm = document.querySelector('.users__request-form');
const usersList = document.querySelector('.users__user-list');

const BASE_URL = 'https://randomuser.me/api/';
const requestFunc = {
  fetch: fetchRequest,
  xmlhttp: xmlhttpRequest,
};

requestForm.addEventListener('submit', generateUsers);

async function generateUsers(e) {
  e.preventDefault();

  const requestType = document.querySelector('#request').value;
  const gender = document.querySelector('#gender').value;
  const usersCount = document.querySelector('#users-count').value;

  if (usersCount < 1) return;

  try {
    usersList.innerHTML = '<p class="users__loader">Loading...</p>';
    const {results} = await requestFunc[requestType](
      BASE_URL,
      gender,
      usersCount,
    );

    usersList.innerHTML = '';
    results.forEach(user => {
      const fullName = `${user.name.first} ${user.name.last}`;
      const userItem = `
      <li class='users__user-item'>
      <img src=${user.picture.medium} alt=${fullName} />
      <p>${fullName}</p>
      </li>
      `;

      usersList.insertAdjacentHTML('beforeend', userItem);
    });
  } catch (err) {
    usersList.innerHTML = `<p class="users__loader">${err}</p>`;
  }
}
