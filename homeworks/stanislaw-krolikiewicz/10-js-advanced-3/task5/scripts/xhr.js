let xhr = new XMLHttpRequest();
const section = document.getElementById('runners-section-xhr');
xhr.open('GET', 'https://randomuser.me/api/?gender=male&results=10');
xhr.send();
xhr.onload = () => {
  if (xhr.status !== 200) {
    const error = document.createElement('article');
    error.innerHTML = `
        <h2 class="error">Error ${xhr.status}: ${xhr.statusText}</h2>
      `;
    section.appendChild(error);
    throw new Error(xhr.statusText);
  } else {
    const res = JSON.parse(xhr.response);
    const runners = res.results;
    runners.forEach(item => {
      const card = document.createElement('article');
      card.innerHTML = `
              <img src="${item.picture.large}" width="200" height="200" />
              <h2>${item.name.first} ${item.name.last}</h2>
            `;
      section.appendChild(card);
    });
  }
};

xhr.onerror = () => {
  const error = document.createElement('article');
  error.innerHTML = `
        <h2 class="error">Request failed!</h2>
      `;
  section.appendChild(error);
};
