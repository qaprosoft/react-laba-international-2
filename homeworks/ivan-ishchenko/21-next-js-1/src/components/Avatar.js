import Image from 'next/image';
import refreshIcon from '@/assets/icons/refresh.svg';

const Avatar = ({imgSrc, onClick}) => {
  return (
    <div className="tile avatar">
      <Image
        src={imgSrc}
        width={0}
        height={0}
        sizes="100vw"
        style={{width: '100%', height: 'auto'}}
      />
      <div className="overlay" onClick={onClick}>
        <Image
          className="tileIcon"
          src={refreshIcon}
          alt="refresh"
          width="auto"
          height="auto"
          style={{width: 'auto', height: 'auto'}}
        />
      </div>
    </div>
  );
};

export default Avatar;
