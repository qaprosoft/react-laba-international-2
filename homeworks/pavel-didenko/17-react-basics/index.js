const App = () => {
  const [light, setLight] = React.useState('red');

  function interval() {
    setTimeout(() => {
      if (light === 'red') {
        setLight('yellow');
      }

      if (light === 'yellow') {
        setLight('green');
      }

      if (light === 'green') {
        setLight('red');
      }
    }, 1000);
  }

  React.useEffect(() => {
    interval();
  }, [light]);

  return (
    <div className="traffic-light-wrapper">
      <div className="traffic-light">
        <div
          className="light"
          style={{backgroundColor: light === 'red' ? '#DF4040' : '#5B5B5B'}}
        ></div>
        <div
          className="light"
          style={{backgroundColor: light === 'yellow' ? '#E9EC6A' : '#5B5B5B'}}
        ></div>
        <div
          className="light"
          style={{backgroundColor: light === 'green' ? '#04CA00' : '#5B5B5B'}}
        ></div>
      </div>
      <div className="traffic-light-head"></div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
