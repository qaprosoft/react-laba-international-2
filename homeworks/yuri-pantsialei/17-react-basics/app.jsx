const colors = ['red', 'yellow', 'green'];

function Head() {
  return <div className="head"></div>;
}

function Body() {
  const [currentColorIndex, setCurrentColorIndex] = React.useState(0);

  React.useEffect(() => {
    let intervalId = setInterval(() => {
      if (currentColorIndex === colors.length - 1) {
        setCurrentColorIndex(0);
      } else {
        setCurrentColorIndex(prev => prev + 1);
      }
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [currentColorIndex]);

  return (
    <div className="body">
      <LigthElement color="red" activeColor={colors[currentColorIndex]} />
      <LigthElement color="yellow" activeColor={colors[currentColorIndex]} />
      <LigthElement color="green" activeColor={colors[currentColorIndex]} />
    </div>
  );
}

function LigthElement({color, activeColor}) {
  return (
    <div className={`ligth_element ${activeColor === color && color}`}></div>
  );
}

function Main() {
  return (
    <div className="traficLight">
      <Head />
      <Body />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root_container'));
root.render(<Main />);
