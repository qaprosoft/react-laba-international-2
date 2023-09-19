const colors = ['red', 'yellow', 'green'];
let activeColorIndex = 0;

function head() {
  return React.createElement('div', {
    className: 'head',
  });
}

function ligthElement({color, activeColor}) {
  return React.createElement('div', {
    className: `ligth_element ${activeColor === color && color}`,
  });
}
function body() {
  return React.createElement(
    'div',
    {
      className: 'body',
    },
    [
      ligthElement({color: 'red', activeColor: colors[activeColorIndex]}),
      ligthElement({color: 'yellow', activeColor: colors[activeColorIndex]}),
      ligthElement({color: 'green', activeColor: colors[activeColorIndex]}),
    ],
  );
}

function traficLight() {
  return React.createElement(
    'div',
    {
      id: 'traficLight',
      className: 'traficLight',
    },
    [head(), body()],
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

    root.render(traficLight());

    changeActiveColor();
  }, 1000);
}

changeActiveColor();
