

const containerRed = React.createElement('div', { className: 'traffic-light' }, [
  React.createElement('div', { key: 'sub-container', className: 'sub-container' }, [
    React.createElement('div', { key: 'red', className: `light light--red` }),
    React.createElement('div', { key: 'yellow', className: `light light--off` }),
    React.createElement('div', { key: 'green', className: `light light--off` }),
  ]),
  React.createElement('div', { key: 'back-support', className: 'back-support' }),
]);

const containerYellow = React.createElement('div', { className: 'traffic-light' }, [
  React.createElement('div', { key: 'sub-container', className: 'sub-container' }, [
    React.createElement('div', { key: 'red', className: `light light--off` }),
    React.createElement('div', { key: 'yellow', className: `light light--yellow` }),
    React.createElement('div', { key: 'green', className: `light light--off` }),
  ]),
  React.createElement('div', { key: 'back-support', className: 'back-support' }),
]);

const containerGreen = React.createElement('div', { className: 'traffic-light' }, [
  React.createElement('div', { key: 'sub-container', className: 'sub-container' }, [
    React.createElement('div', { key: 'red', className: `light light--off` }),
    React.createElement('div', { key: 'yellow', className: `light light--off` }),
    React.createElement('div', { key: 'green', className: `light light--green` }),
  ]),
  React.createElement('div', { key: 'back-support', className: 'back-support' }),
]);

const trafficLightSwitch = () => {
  const states = [containerRed, containerYellow, containerGreen];
  let currentIndex = 0;

  const switchTrafficLight = () => {
    root.render(states[currentIndex]);
    currentIndex = (currentIndex + 1) % states.length;
  };

  switchTrafficLight();

  setInterval(switchTrafficLight, 2000);
};

const domContainer = document.querySelector('#root_container');
const root = ReactDOM.createRoot(domContainer);

trafficLightSwitch();

