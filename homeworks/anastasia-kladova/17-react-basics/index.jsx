const {useState, useEffect} = React;

const App = () => {
  const trafficStates = {
    red: {
      backgroundColor: 'red',
      next: 'yellow',
    },
    yellow: {backgroundColor: 'yellow', next: 'green'},
    green: {backgroundColor: 'green', next: 'red'},
  };

  const [currentColor, setCurrentColor] = useState('green');

  useEffect(() => {
    const {next} = trafficStates[currentColor];
    const timerId = setTimeout(() => {
      setCurrentColor(next);
    }, 2000);

    return () => {
      clearTimeout(timerId);
    };
  }, [currentColor]);
  return (
    <div className="traffic-light">
      <div className="traffic-light__head"></div>
      <div className="traffic-light__body">
        {Object.keys(trafficStates).map(color => (
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
