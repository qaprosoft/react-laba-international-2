const {useState, useEffect} = React;

const App = () => {
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
