const {createRoot} = ReactDOM;
const {useState, useEffect} = React;

const trafficStates = {
  red: {
    backgroundColor: '#DF4040',
    next: 'yellow',
  },
  yellow: {
    backgroundColor: '#E9EC6A',
    next: 'green',
  },
  green: {
    backgroundColor: '#04CA00',
    next: 'red',
  },
};

const App = () => {
  const [currentColor, setCurrentColor] = useState('red');
  useEffect(() => {
    const {next} = trafficStates[currentColor];
    const interval = setInterval(() => {
      setCurrentColor(next);
    }, 1500);

    return () => clearInterval(interval);
  }, [currentColor, trafficStates]);

  return (
    <header className="App-header">
      <div className="traffic-light__stand"></div>
      <div className="traffic-light">
        {Object.keys(trafficStates).map(color => (
          <div
            key={color}
            className="light"
            style={{
              backgroundColor:
                color === currentColor && trafficStates[color].backgroundColor,
            }}
          ></div>
        ))}
      </div>
    </header>
  );
};

const root = createRoot(document.getElementById('root'));
root.render(<App />);
