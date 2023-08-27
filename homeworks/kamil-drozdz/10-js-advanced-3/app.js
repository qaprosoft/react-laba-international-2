//task 5 https://github.com/qaprosoft/react-laba-international-2/blob/main/lectures/10-js-advanced-3/task.md#5-fetch-apixmlhttprequest
const runnersList = document.querySelector('.runnersList');

const fetchRunners = async () => {
  try {
    const response = await fetch(
      'https://randomuser.me/api/?gender=female&results=10',
    );
    const data = await response.json();
    return data.results;
  } catch (error) {
    throw new Error('Failed to fetch runners');
  }
};

const XMLHttpRequestRunners = () =>
  new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://randomuser.me/api/?gender=female&results=10');
    xhr.send();
    xhr.onload = () => {
      if (xhr.status !== 200) {
        reject(new Error('Request failed'));
      }

      resolve(JSON.parse(xhr.response).results);
    };
  });

(async () => {
  try {
    // const runners = await fetchRunners();
    const runners = await XMLHttpRequestRunners();

    runners.forEach(runner => {
      const runnerElement = document.createElement('div');
      const runnerImage = document.createElement('img');
      const runnerName = document.createElement('p');

      runnerImage.src = runner.picture.thumbnail;
      runnerName.innerText = `${runner.name.first} ${runner.name.last}`;
      runnerElement.classList.add('runnersList__runner');

      runnerElement.append(runnerImage, runnerName);
      runnersList.append(runnerElement);
    });
  } catch {
    const errorMessage = document.createElement('p');
    errorMessage.innerText = 'Something went wrong!';
    runnersList.append(errorMessage);
  }
})();
