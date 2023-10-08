import ReactDOM from 'react-dom';
import {useContext} from 'react';
import styles from './Modal.module.css';
import {Context} from '../../contexts/AppContext/AppContext';
import IconButton from '../Buttons/IconButton/IconButton';

const Template = ({closeModal, errorMessage}) => {
  return (
    <div className={styles.modalBox}>
      <div className={styles.modal}>
        <IconButton
          classType="iconBtn--close"
          type="button"
          onBtnClickHandler={closeModal}
        />
        <div className={styles.modalInfo}>
          <p className={styles.modalError}>{errorMessage}</p>
        </div>
      </div>
    </div>
  );
};

const Modal = () => {
  const {errorMessage, setIsShowModal} = useContext(Context);
  const domNode = document.getElementById('modal');

  const closeModal = () => {
    setIsShowModal(false);
  };

  if (domNode && errorMessage) {
    return ReactDOM.createPortal(
      <Template closeModal={closeModal} errorMessage={errorMessage} />,
      domNode,
    );
  }
};

export default Modal;
