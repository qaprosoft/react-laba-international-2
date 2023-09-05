const xmlhttpRequest = (baseUrl, gender, usersCount) => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    xhr.open('GET', `${baseUrl}?gender=${gender}&results=${usersCount}`);
    xhr.send();

    xhr.onload = function () {
      if (xhr.status === 200) {
        resolve(xhr.response);
      } else {
        reject(`HTTP status code: ${xhr.status}`);
      }
    };
  });
};

export default xmlhttpRequest;
