let xhr = new XMLHttpRequest();

xhr.open('GET', 'https://randomuser.me/api/?results=5');
xhr.send();

xhr.onload = function () {
  if (xhr.status != 200) {
    alert(`Error ${xhr.status}: ${xhr.statusText}`);
  } else {
    const data = JSON.parse(xhr.response);
    const div = document.getElementById('xmlResult');
    const usersMarkup = data.results
      .map(
        user =>
          `<div class="user"><img src=${user.picture.medium} /><p>${user.name.first} ${user.name.last}</p></div>`,
      )
      .join('');
    div.innerHTML = usersMarkup;
  }
};

xhr.onerror = function (e) {
  console.log(`XML Error: ${e.message}`);
};
