import {useContext} from 'react';
import styles from './Modal.module.css';
import {Context} from '../../contexts/AppContext/AppContext';

const Modal = () => {
  const {errorMessage, setErrorMessage} = useContext(Context);

  return (
    <div className={styles.modalBox}>
      <div className={styles.modal}>
        <Button classtype="close" type="button" handler={closeModal} />
        <div className={styles.modalContent}>
          <p className={styles.modalTodo}>{errorMessage}</p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
