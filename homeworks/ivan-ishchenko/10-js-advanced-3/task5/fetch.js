fetch('https://randomuser.me/api/?results=5')
  .then(async res => {
    const data = await res.json();

    const div = document.getElementById('fetchResult');

    const usersMarkup = data.results
      .map(
        user =>
          `<div class="user"><img src=${user.picture.medium} /><p>${user.name.first} ${user.name.last}</p></div>`,
      )
      .join('');
    div.innerHTML = usersMarkup;
  })
  .catch(e => console.log(`Fetch error: ${e.message}`));
