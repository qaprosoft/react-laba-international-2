const root = ReactDOM.createRoot(document.getElementById('root'));

const trafficLightColors = ['red', 'yellow', 'green'];
let activeLight = -1;

(function changeLight() {
  if (activeLight < trafficLightColors.length - 1) {
    activeLight++;
  } else {
    activeLight = 0;
  }

  root.render(<TrafficLight />);

  setTimeout(changeLight, 2000);
})();

function TrafficLight() {
  const lights = trafficLightColors.map((color, index) => {
    const attrs = {
      key: color,
      ...(index === activeLight ? {color} : {}),
    };

    return <Light {...attrs} />;
  });

  return (
    <div className="trafficLight">
      <div className="trafficLight__body">
        <div className="trafficLight__head"></div>

        <div className="trafficLight__lights">{lights}</div>
      </div>
    </div>
  );
}

function Light({color = ''}) {
  return <div className="light" data-color={color}></div>;
}
