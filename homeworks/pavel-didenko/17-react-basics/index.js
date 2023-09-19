const light = React.createElement('div', {
  className: 'light',
});

const frafficLightHead = React.createElement('div', {
  className: 'traffic-light-head'
})

const trafficLight = React.createElement('div', {
  className: 'traffic-light',
  children: [light, light, light],
});

const trafficLightWrapper = React.createElement('div', {
  className: 'traffic-light-wrapper',
  children: [frafficLightHead, trafficLight],
});

const domContainer = document.querySelector('#root');
const root = ReactDOM.createRoot(domContainer);
root.render(trafficLightWrapper);
