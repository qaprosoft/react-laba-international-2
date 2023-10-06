import Loader from '../Loader/Loader';
import styles from './LoaderContainer.module.css';

const LoaderContainer = () => {
  return (
    <div className={styles.loaderContainer}>
      <Loader />
    </div>
  );
};

export default LoaderContainer;
