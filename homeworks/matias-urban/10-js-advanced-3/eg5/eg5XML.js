let xhr = new XMLHttpRequest();
const body = document.querySelector('.main-container');
xhr.open('GET', 'https://randomuser.me/api/?results=20');

xhr.send();

xhr.onload = () => {
  const jsonData = JSON.parse(xhr.response);
  jsonData.results.map(person => {
    body.innerHTML += `<div class="person-container"><img src="${person.picture.thumbnail}">
  </img>
  <h3>${person.name.title} ${person.name.first} ${person.name.last}</h3></div>`;
  });
};
