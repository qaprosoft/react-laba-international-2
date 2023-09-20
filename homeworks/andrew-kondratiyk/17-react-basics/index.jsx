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

const Modal = memo(({ isOpen, title = '', children }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>{title}</h2>
        {children}
      </div>
    </div>
  );
});

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
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [isStartModelOpen, setIsStartModelOpen] = useState(true);
  const [isEndModelOpen, setIsEndModelOpen] = useState(false);
  const [trafficLights, setTrafficLights] = useState(() => {
    return Array(trafficLightsCount)
      .fill(null)
      .map((_, index) => new TrafficLightEntity(index))
  });

  useEffect(() => {
    if(!isGameStarted) {
      return;
    }
    const interval = setInterval(() => {
      setTrafficLights(prevState => {
        if(prevState.every(item => item.isWorking) && new Set(prevState.map(item => item.value)).size === 1) {
          setIsGameStarted(false);
          setIsEndModelOpen(true);
        }
        return prevState.map(item => {
          if (item.isWorking) {
            item.value = item.value === 2 ? 0 : item.value + 1;
          }
          return item;
        })
      })

    }, 1000);
    return () => clearInterval(interval);
  }, [isEndModelOpen, isGameStarted]);

  const handleStartGame = () => {
    setIsStartModelOpen(false);
    setIsGameStarted(true);
    setTrafficLights(prevState => prevState.map(item => new TrafficLightEntity(item.id)));
  }

  const handleRestartGame = () => {
    setIsEndModelOpen(false);
    setIsGameStarted(true);
    setTrafficLights(prevState => prevState.map(item => new TrafficLightEntity(item.id)));
  }

  const handleChangeSettings = () => {
    setIsEndModelOpen(false);
    setIsStartModelOpen(true);
  }

  return (
    <TrafficLightsContext.Provider value={{trafficLights, setTrafficLights}}>
      <Modal isOpen={isStartModelOpen} title='Start game'>
        <p>Hello, there was an error, and all the traffic lights have broken. Help us synchronize them.
          You can stop the traffic lights one by one and turn them on until they all synchronize.</p>
        <button onClick={handleStartGame} className='button'>Start game</button>
      </Modal>
      <Modal isOpen={isEndModelOpen} title='End game'>
        <p>Congratulations! You've successfully synchronized all the traffic lights and brought order back to the city's streets. Well done!</p>
        <button onClick={handleRestartGame} className='button'>Restart game</button>
        <button onClick={handleChangeSettings} className='button'>Change settings</button>
      </Modal>
      <div className="container">
        {trafficLights.map(item => <TrafficLightContainer key={item.id} id={item.id} />)}
      </div>
    </TrafficLightsContext.Provider>
  )
};

const domContainer = document.querySelector('#root');
const root = createRoot(domContainer);
root.render(<App/>);