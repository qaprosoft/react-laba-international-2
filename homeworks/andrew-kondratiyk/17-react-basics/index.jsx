const {createRoot} = ReactDOM;
const {useState, useEffect, memo, createContext, useContext} = React;

const defaultColor = '#5B5B5B';
const colors = ['#DF4040', '#E9EC6A', '#04CA00'];
const trafficLightsCount = 5;

class TrafficLightEntity {
  isWorking = true;
  value = Math.floor(Math.random() * colors.length);
  id = null;

  constructor(id) {
    this.id = id;
  }
}

const TrafficLightsContext = createContext(null);

const Light = memo(({color}) => {
  return (
    <div className="traffic-light__light" style={{backgroundColor: color}}></div>
  )
});

const TrafficLight = ({ id }) => {
  const {trafficLights} = useContext(TrafficLightsContext);
  const state = trafficLights[id].value;
  return (
    <div className="traffic-light__body">{colors.map((_, index) => (
      <Light
        key={index}
        color={state === index ? colors[index] : defaultColor}
      />
    ))}</div>
  )
};

const TrafficLightContainer = ({ id }) => {
  const {trafficLights, setTrafficLights} = useContext(TrafficLightsContext);
  const isWorking = trafficLights[id].isWorking;

  const handleClick = () => {
    setTrafficLights(prevState => prevState.map(item => {
      if (item.id === id) {
        item.isWorking = !item.isWorking;
      }
      return item;
    }))
  };

  return (
    <div className="traffic-light__container">
      <TrafficLight id={id} />
      <button
        className="traffic-light__button"
        onClick={handleClick}
        style={{backgroundColor: isWorking ? '#04CA00' : '#DF4040'}}
      >Toggle traffic light
      </button>
    </div>
  )
};

function App() {
  const [trafficLights, setTrafficLights] = useState(() =>
      Array(trafficLightsCount)
        .fill(null)
        .map((_, index) => new TrafficLightEntity(index))
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setTrafficLights(prevState => prevState.map(item => {
        if (item.isWorking) {
          item.value = item.value === 2 ? 0 : item.value + 1;
        }
        return item;
      }))
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <TrafficLightsContext.Provider value={{trafficLights, setTrafficLights}}>
      <div className="container">
        {trafficLights.map(item => <TrafficLightContainer key={item.id} id={item.id} />)}
      </div>
    </TrafficLightsContext.Provider>
  )
};

const domContainer = document.querySelector('#root');
const root = createRoot(domContainer);
root.render(<App/>);