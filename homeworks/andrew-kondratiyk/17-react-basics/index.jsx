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
      <Light state={state} colorIndex={0} />
      <Light state={state} colorIndex={1} />
      <Light state={state} colorIndex={2} />
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