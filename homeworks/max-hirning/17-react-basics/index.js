const {useState, useEffect} = React;

const trafficLightColors = ['red', 'yellow', 'green'];

function TrafficLight() {
  const [currentLight, setCurrentLight] = useState('red');

  useEffect(() => {
    let currentIndex = 0;

    const intervalId = setInterval(() => {
      currentIndex = (currentIndex + 1) % trafficLightColors.length;
      setCurrentLight(trafficLightColors[currentIndex]);
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="traficLight">
      <div className="traficLightHeader"></div>
      <div className="traficLightBody">
        <Light activeStyle={currentLight === 'red' ? 'redLight' : ''} />
        <Light activeStyle={currentLight === 'yellow' ? 'yellowLight' : ''} />
        <Light activeStyle={currentLight === 'green' ? 'greenLight' : ''} />
      </div>
    </div>
  );
}

function Light({activeStyle}) {
  return <div className={`light ${activeStyle}`}></div>;
}

const domContainer = document.querySelector('#root_container');
ReactDOM.createRoot(domContainer).render(<TrafficLight />);
