import Image from 'next/image';
import refreshIcon from '@/assets/icons/refresh.svg';

const Avatar = ({imgSrc, onClick}) => {
  return (
    <div className="tile avatar">
      <img src={imgSrc} />
      <div className="overlay" onClick={onClick}>
        <Image
          className="tileIcon"
          src={refreshIcon}
          alt="refresh"
          width={0}
          height={0}
        />
      </div>
    </div>
  );
};

export default Avatar;
