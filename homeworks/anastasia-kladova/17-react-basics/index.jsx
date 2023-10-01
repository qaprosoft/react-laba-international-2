const {useState, useEffect} = React;

const App = () => {
  const DURATION = 2000;

  const trafficStates = {
    red: {backgroundColor: 'red', next: 'yellow'},
    yellow: {backgroundColor: 'yellow', next: 'green'},
    green: {backgroundColor: 'green', next: 'red'},
  };
  const trafficColors = Object.keys(trafficStates);

  const [currentColor, setCurrentColor] = useState('green');

  useEffect(() => {
    const {next} = trafficStates[currentColor];

    const timerId = setTimeout(() => {
      setCurrentColor(next);
    }, DURATION);

    return () => {
      clearTimeout(timerId);
    };
  }, [currentColor]);

  return (
    <div className="traffic-light">
      <div className="traffic-light__head"></div>
      <div className="traffic-light__body">
        {trafficColors.map(color => (
          <div
            className="traffic-light__light"
            style={{
              backgroundColor:
                color === currentColor && trafficStates[color].backgroundColor,
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);
root.render(<App />);
