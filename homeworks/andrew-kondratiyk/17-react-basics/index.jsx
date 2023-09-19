const { createRoot } = ReactDOM;
const { useState, useEffect } = React;

const defaultColor = '#5B5B5B';
const colors = ['#DF4040', '#E9EC6A', '#04CA00'];

function App() {
  const [state, setState] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setState(prevState => prevState === 2 ? 0 : prevState + 1)
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="body">
      {colors.map((_, index) => <Light key={index} state={state} colorIndex={index} />)}
    </div>
  )
}

function Light({ state, colorIndex }) {
  const color = state === colorIndex ? colors[colorIndex] : defaultColor;
  return (
    <div className="light" style={{ backgroundColor: color }}></div>
  )
}

const domContainer = document.querySelector('#root');
const root = createRoot(domContainer);
root.render(<App />);