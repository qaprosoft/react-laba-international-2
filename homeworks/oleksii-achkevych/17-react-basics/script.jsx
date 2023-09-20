const rootContainer = document.querySelector('#root_container');

const TrafficLight = () => {
  const [currentColorIndex, setCurrentColorIndex] = React.useState(0);
  const colors = ['RGB(223, 64, 64)', 'RGB(233, 236, 106)', 'RGB(4, 202, 0)'];

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentColorIndex(prevIndex => (prevIndex + 1) % colors.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return React.createElement(
    'div',
    {id: 'traffic-light'},
    React.createElement('div', {
      className: 'top-light',
    }),
    colors.map((color, index) =>
      React.createElement('div', {
        key: color,
        className: `light ${currentColorIndex === index ? 'active' : ''}`,
        style: {
          background: currentColorIndex === index ? color : 'gray',
        },
      }),
    ),
  );
};

ReactDOM.render(React.createElement(TrafficLight), rootContainer);
