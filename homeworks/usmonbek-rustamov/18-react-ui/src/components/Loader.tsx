import refreshImg from '../assets/refresh.svg';

function Loader() {
  return (
    <div className="loader">
      <img
        className="loader__image"
        src={refreshImg}
        alt="New avatar loading"
      />
    </div>
  );
}
export default Loader;
