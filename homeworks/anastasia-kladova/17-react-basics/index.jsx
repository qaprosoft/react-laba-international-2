const {useState, useEffect} = React;

const App = () => {
  const LIGTHS = ['red', 'yellow', 'green'];
  const DURATION = 2000;
  const lightsLength = LIGTHS.length;
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setCurrentIndex((currentIndex + 1) % lightsLength);
    }, DURATION);

    return () => {
      clearTimeout(timerId);
    };
  }, [currentIndex]);

  return (
    <div className="traffic-light">
      <div className="traffic-light__head"></div>
      <div className="traffic-light__body">
        <div
          className={`traffic-light__light ${currentIndex === 0 && LIGTHS[0]}`}
        ></div>
        <div
          className={`traffic-light__light ${currentIndex === 1 && LIGTHS[1]}`}
        ></div>
        <div
          className={`traffic-light__light ${currentIndex === 2 && LIGTHS[2]}`}
        ></div>
      </div>
    </div>
  );
};

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);
root.render(<App />);
