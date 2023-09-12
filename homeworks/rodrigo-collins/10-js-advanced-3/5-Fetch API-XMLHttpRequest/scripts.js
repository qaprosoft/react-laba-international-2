/* fetch */

const userList = document.getElementById('userListFetch');

fetch('https://randomuser.me/api/?gender=female&results=10')
    .then((response) => response.json())
    .then((data) => {
        const users = data.results;

        users.forEach((user) => {
            const listItem = document.createElement('div');
            listItem.innerHTML = `
        <img src="${user.picture.thumbnail}" alt="User Avatar">
        <p> ${user.name.first} ${user.name.last}</p>
    `;
            listItem.classList.add('user-item');
            userList.appendChild(listItem);
        });
    })
    .catch((error) => console.error('Error:', error));


/* XMLHttpRequest */

const userListXML = document.getElementById('userListXML');
const xhr = new XMLHttpRequest();

xhr.open('GET', 'https://randomuser.me/api/?gender=female&results=10', true);

xhr.onload = function () {
    if (xhr.status >= 200 && xhr.status < 300) {
        const data = JSON.parse(xhr.responseText);
        const users = data.results;

        users.forEach((user) => {
            const listItem = document.createElement('div');
            listItem.innerHTML = `
        <img src="${user.picture.thumbnail}" alt="User Avatar">
        <p> ${user.name.first} ${user.name.last}</p>
    `;
            listItem.classList.add('user-item');
            userListXML.appendChild(listItem);
        });
    } else {
        console.error('Request failed with status:', xhr.status);
    }
};

xhr.onerror = function () {
    console.error('Request failed');
};

xhr.send();
