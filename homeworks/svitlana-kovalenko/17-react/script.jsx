const domContainer = document.querySelector('.root');
const root = ReactDOM.createRoot(domContainer);

function TrafficLight(color) {
  root.render(
    React.createElement(
      'div',
      null,
      React.createElement(
        'div',
        {
          className: 'traffic_head',
        },
        React.createElement(
          'div',
          {
            className: 'traffic_body',
          },
          React.createElement('div', {
            className: `red ${color === 'red' ? 'active' : ''}`,
          }),
          React.createElement('div', {
            className: `yellow ${color === 'yellow' ? 'active' : ''}`,
          }),
          React.createElement('div', {
            className: `green ${color === 'green' ? 'active' : ''}`,
          }),
        ),
      ),
    ),
  );
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
