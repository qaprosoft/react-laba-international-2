const COLORS = [
  '#df4040', // red
  '#e9ec6a', // yellow
  '#04ca00', // green
];
const DEFAULT_COLOR = '#5b5b5b';
const COLOR_CHANGE_DELAY = 1000;

function App() {
  const [colorIndex, setColorIndex] = React.useState(0);

  React.useEffect(() => {
    const timerId = setTimeout(() => {
      setColorIndex(prevIndex => (prevIndex + 1) % 3);
    }, COLOR_CHANGE_DELAY);

    return () => clearTimeout(timerId);
  }, [colorIndex]);

  return (
    <div className="traffic-light-wrapper">
      <div className="traffic-light">
        {COLORS.map(color => (
          <TrafficColor
            key={color}
            color={color}
            currentColor={COLORS[colorIndex]}
          />
        ))}
      </div>
    </div>
  );
}

function TrafficColor({color, currentColor}) {
  return (
    <div
      className="traffic-light__color"
      style={{backgroundColor: color === currentColor ? color : DEFAULT_COLOR}}
    ></div>
  );
}

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<App />);
