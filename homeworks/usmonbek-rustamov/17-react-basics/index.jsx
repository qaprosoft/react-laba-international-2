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
            mainColor={color}
            activeColor={COLORS[colorIndex]}
          />
        ))}
      </div>
    </div>
  );
}

function TrafficColor({mainColor, activeColor}) {
  const backgroundColor = mainColor === activeColor ? mainColor : DEFAULT_COLOR;
  return <div className="traffic-light__color" style={{backgroundColor}}></div>;
}

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<App />);
