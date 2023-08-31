(async () => {
  let runners = await fetch(
    'https://randomuser.me/api/?gender=female&results=10',
  )
    .then(res => res.json())
    .then(res => res.results)
    .catch(err => {
      const error = document.createElement('article');
      error.innerHTML = `
        <h2 class="error">${err.message}</h2>
      `;
      document.getElementById('runners-section').appendChild(error);
      throw new Error(err);
    });
  if (runners) {
    runners.forEach(item => {
      const card = document.createElement('article');
      card.innerHTML = `
        <img src="${item.picture.large}" width="200" height="200" />
        <h2>${item.name.first} ${item.name.last}</h2>
      `;
      document.getElementById('runners-section').appendChild(card);
    });
  }
})();
