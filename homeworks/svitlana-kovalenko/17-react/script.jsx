function TrafficLight(color) {
  const redLight = React.createElement('div', {
    className: `red ${color === 'red' && 'active'}`,
  });

  const yellowLight = React.createElement('div', {
    className: `yellow ${color === 'yellow' && 'active'}`,
  });

  const greenLight = React.createElement('div', {
    className: `green ${color === 'green' && 'active'}`,
  });

  const trafficBody = React.createElement(
    'div',
    {
      className: 'traffic_body',
    },
    redLight,
    yellowLight,
    greenLight,
  );

  const trafficHead = React.createElement(
    'div',
    {
      className: 'traffic_head',
    },
    trafficBody,
  );

  const trafficLightElement = React.createElement('div', null, trafficHead);

  root.render(trafficLightElement);
}

let currentColor = 'red';
setInterval(() => {
  currentColor =
    currentColor === 'red'
      ? 'yellow'
      : currentColor === 'yellow'
      ? 'green'
      : 'red';

  TrafficLight(currentColor);
}, 2000);

const domContainer = document.querySelector('.root');
const root = ReactDOM.createRoot(domContainer);
