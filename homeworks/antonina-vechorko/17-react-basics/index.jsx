const {useState, useEffect} = React;

function TrafficLight() {
  const lights = ['red', 'yellow', 'green'];
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
    setCurrentLight((prevLight) => (prevLight + 1) % lights.length);
  };
  return (
    <div className="traffic-light">
      <div className="traffic-head"></div>
      <div className="light-container">
        <div className={`circle red ${currentLight === 0 && 'active'}`}></div>
        <div className={`circle yellow ${currentLight === 1 && 'active'}`}></div>
        <div className={`circle green ${currentLight === 2 && 'active'}`}></div>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<TrafficLight></TrafficLight>);
