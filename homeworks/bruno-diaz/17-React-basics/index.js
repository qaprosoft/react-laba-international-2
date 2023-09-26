const root = ReactDOM.createRoot(document.getElementById("root"));

function TrafficLight() {
  const [currentColor, setCurrentColor] = React.useState("red");

  React.useEffect(() => {
    const timer = setInterval(() => {
      switch (currentColor) {
        case "red":
          setCurrentColor("yellow");
          break;
        case "yellow":
          setCurrentColor("green");
          break;
        case "green":
          setCurrentColor("red");
          break;
        default:
          setCurrentColor("red");
      }
    }, 2000);

    return () => clearInterval(timer);
  }, [currentColor]);

  return (
    <div className="traffic-light-container">
      <div className="traffic-light-head"></div>
      <div className="traffic-light">
        <div
          className={"light first-light"}
          style={{
            backgroundColor: currentColor === "red" ? "#DF4040" : "#5B5B5B",
          }}
        ></div>
        <div
          className="light"
          style={{
            backgroundColor: currentColor === "yellow" ? "#E9EC6A" : "#5B5B5B",
          }}
        ></div>
        <div
          className="light"
          style={{
            backgroundColor: currentColor === "green" ? "#04CA00" : "#5B5B5B",
          }}
        ></div>
      </div>
    </div>
  );
}

root.render(<TrafficLight />);
