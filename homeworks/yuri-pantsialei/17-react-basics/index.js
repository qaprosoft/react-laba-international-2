const colors = ['red', 'yellow', 'green'];
let activeColorIndex = 2;

function Head() {
  return React.createElement('div', {
    className: 'head',
  });
}

function LigthElement({color, activeColor}) {
  return React.createElement('div', {
    className: `ligth_element ${activeColor === color && color}`,
  });
}
function Body() {
  return React.createElement(
    'div',
    {
      className: 'body',
    },
    [
      LigthElement({color: 'red', activeColor: colors[activeColorIndex]}),
      LigthElement({color: 'yellow', activeColor: colors[activeColorIndex]}),
      LigthElement({color: 'green', activeColor: colors[activeColorIndex]}),
    ],
  );
}

function TraficLight() {
  return React.createElement(
    'div',
    {
      id: 'traficLight',
      className: 'traficLight',
    },
    [Head(), Body()],
  );
}

const domContainer = document.querySelector('#root_container');
const root = ReactDOM.createRoot(domContainer);

function changeActiveColor() {
  setTimeout(() => {
    if (activeColorIndex === 2) {
      activeColorIndex = 0;
    } else {
      activeColorIndex++;
    }

    root.render(TraficLight());

    changeActiveColor();
  }, 1000);
}

changeActiveColor();
