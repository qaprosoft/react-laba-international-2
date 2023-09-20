const {createRoot} = ReactDOM;
const {useState, useEffect} = React;

const Light = ({color, activeLights}) => {
  return (
    <div
      className={`light ${color} ${activeLights.includes(color) && 'active'}`}
    ></div>
  );
};

const TrafficLights = () => {
  const lightsSequence = [
    {
      lights: ['red'],
      delay: 2000, // time of previous step
    },
    {
      lights: ['red', 'amber'],
      delay: 2000,
    },
    {
      lights: ['green'],
      delay: 2000,
    },
    {
      lights: ['amber'],
      delay: 7000,
    },
  ];
  const [activeLights, setActiveLights] = useState(['red']);
  const [step, setStep] = useState(1); // start with delay which of step no 0

  const changeLights = lightsSequence => {
    setTimeout(() => {
      if (step < 3) setStep(step + 1);
      else setStep(0);
      setActiveLights(lightsSequence.lights);
    }, lightsSequence.delay);
  };

  useEffect(() => {
    changeLights(lightsSequence[step]);
  }, [step]);

  return (
    <div>
      <Light color="red" activeLights={activeLights} />
      <Light color="amber" activeLights={activeLights} />
      <Light color="green" activeLights={activeLights} />
    </div>
  );
};

const root = createRoot(document.getElementById('root'));
root.render(<TrafficLights />);
