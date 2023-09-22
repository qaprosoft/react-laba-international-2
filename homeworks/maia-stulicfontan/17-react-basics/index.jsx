const domContainer = document.querySelector('#root');
const root = ReactDOM.createRoot(domContainer);
root.render(<App />);

function Light({color, isActive}) {
  return (
    <div
      id={color}
      data-active={isActive}
      className={`light light--${color}`}
    ></div>
  );
}

function TrafficLightBody() {
  return (
    <div className="traffic-light__body">
      <Light color="red" isActive={true}></Light>
      <Light color="yellow" isActive={false}></Light>
      <Light color="green" isActive={false}></Light>
    </div>
  );
}

function App() {
  function changeColor(colorOrder) {
    const activeLight = document.querySelector('.light[data-active="true"]');
    activeLight.setAttribute('data-active', false);
    document
      .getElementById(colorOrder[activeLight.getAttribute('id')])
      .setAttribute('data-active', true);
  }

  const nextColors = {
    red: 'yellow',
    yellow: 'green',
    green: 'red',
  };

  setInterval(changeColor, 1000, nextColors);

  return (
    <section className="page-wrapper">
      <div className="traffic-light__head"></div>
      <TrafficLightBody></TrafficLightBody>
    </section>
  );
}
