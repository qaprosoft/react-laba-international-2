let xml = new XMLHttpRequest();
const container = document.querySelector('.container');
xml.open('GET', 'https://randomuser.me/api/?results=10');

xml.send();

xml.onload = () => {
  const jsonData = JSON.parse(xml.response);
  jsonData.results.map(person => {
    container.innerHTML += `<div class="runners-container"><img src="${person.picture.thumbnail}">
  </img>
  <h3>${person.name.title} ${person.name.first} ${person.name.last}</h3></div>`;
  });
};