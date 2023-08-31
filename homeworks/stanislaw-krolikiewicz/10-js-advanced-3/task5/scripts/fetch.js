(async () => {
  const section = document.getElementById('runners-section-fetch');
  let runners = await fetch('https://randomuser.me/api/?gender=male&results=10')
    .then(res => res.json())
    .then(res => res.results)
    .catch(err => {
      const error = document.createElement('article');
      error.innerHTML = `
        <h2 class="error">${err.message}</h2>
      `;
      section.appendChild(error);
      throw new Error(err);
    });
  if (runners) {
    runners.forEach(item => {
      const card = document.createElement('article');
      card.innerHTML = `
        <img src="${item.picture.large}" width="200" height="200" />
        <h2>${item.name.first} ${item.name.last}</h2>
      `;
      section.appendChild(card);
    });
  }
})();
