const domContainer = document.querySelector('#root');
const root = ReactDOM.createRoot(domContainer);
root.render(<App />);

function Light({color, isActive}) {
  return <div data-active={isActive} className={`light light--${color}`}></div>;
}

const nextColors = {
  red: 'yellow',
  yellow: 'green',
  green: 'red',
};

function TrafficLightBody() {
  const [lightColor, setColor] = React.useState('red');

  React.useEffect(() => {
    const interval = setInterval(
      colorOrder => {
        setColor(previousColor => colorOrder[previousColor]);
      },
      1000,
      nextColors,
    );

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="traffic-light__body">
      <Light color="red" isActive={lightColor === 'red'}></Light>
      <Light color="yellow" isActive={lightColor === 'yellow'}></Light>
      <Light color="green" isActive={lightColor === 'green'}></Light>
    </div>
  );
}

function App() {
  return (
    <section className="page-wrapper">
      <div className="traffic-light__head"></div>
      <TrafficLightBody></TrafficLightBody>
    </section>
  );
}
