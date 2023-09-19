const { createRoot } = ReactDOM;
const { useState, useEffect } = React;

function App() {
  const [state, setState] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setState(prevState => prevState === 2 ? 0 : prevState + 1)
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <h1>state: {state}</h1>
  )
}

const domContainer = document.querySelector('#root');
const root = createRoot(domContainer);
root.render(<App />);