const {useState, useEffect} = React;

const lights = ['red', 'yellow', 'green'];

function TrafficLight() {
  const [currentLight, setCurrentLight] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      switchLight();
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const switchLight = () => {
    setCurrentLight(prevLight => (prevLight + 1) % lights.length);
  };
  return (
    <div className="traffic-light">
      <div className="traffic-head"></div>
      <div className="light-container">
        <div className={`circle ${currentLight === 0 && 'red'}`}></div>
        <div className={`circle ${currentLight === 1 && 'yellow'}`}></div>
        <div className={`circle ${currentLight === 2 && 'green'}`}></div>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<TrafficLight></TrafficLight>);
