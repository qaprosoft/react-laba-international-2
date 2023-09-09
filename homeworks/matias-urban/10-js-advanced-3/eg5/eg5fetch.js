//5. Fetch API/XMLHttpRequest
const body = document.querySelector('.main-container');
const getData = async url => {
  const data = await fetch(url);
  const jsonData = await data.json();

  const showData = async people => {
    people.results.map(person => {
      body.innerHTML += `<div class="person-container"><img src="${person.picture.thumbnail}">
    </img>
    <h3>${person.name.title} ${person.name.first} ${person.name.last}</h3></div>`;
    });
  };

  showData(jsonData);
};

getData('https://randomuser.me/api/?results=20');
