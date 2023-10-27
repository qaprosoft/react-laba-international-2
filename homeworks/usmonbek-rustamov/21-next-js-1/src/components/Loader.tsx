import Image from 'next/image';
import refreshImg from '../assets/refresh.svg';

function Loader() {
  return (
    <div className="loader">
      <Image
        className="loader__image"
        src={refreshImg}
        alt="New avatar loading"
      />
    </div>
  );
}
export default Loader;
