const App = () => {
  return (
    <main>
      <div className="image-wrapper">
        <img src="./assets/img/icons/add-user.svg" alt="Add user tile" />
      </div>
      <button className="refresh-button">Refresh All</button>
    </main>
  );
}

const rootDOMNode = document.body.firstElementChild;
const root = ReactDOM.createRoot(rootDOMNode);
root.render(<App />);