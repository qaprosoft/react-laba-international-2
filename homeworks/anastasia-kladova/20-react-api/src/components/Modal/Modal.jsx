import ReactDOM from 'react-dom';
import {useContext} from 'react';
import styles from './Modal.module.css';
import Button from '../Buttons/Button/Button';
import IconButton from '../Buttons/IconButton/IconButton';
import {Context} from '../../contexts/AppContext/AppContext';

const Template = ({closeModal, modalText, deleteHandler}) => {
  return (
    <div className={styles.modalBox}>
      <div className={styles.modal}>
        <IconButton
          classType="iconBtn--close"
          type="button"
          onBtnClickHandler={closeModal}
        />
        <div className={styles.modalInfo}>
          <p className={styles.modalText}>{modalText}</p>
        </div>
        <div className={styles.modalButtons}>
          <Button type="button" btnText="No" onClickHandler={closeModal} />
          <Button type="button" btnText="Yes" onClickHandler={deleteHandler} />
        </div>
      </div>
    </div>
  );
};

const Modal = ({deleteHandler, modalText}) => {
  const {IsShowDeleteModal, setIsShowDeleteModal} = useContext(Context);
  const domNode = document.getElementById('modal');
  console.log(domNode, IsShowDeleteModal);

  const closeModal = () => {
    setIsShowDeleteModal(false);
  };

  if (domNode && IsShowDeleteModal) {
    return ReactDOM.createPortal(
      <Template
        deleteHandler={deleteHandler}
        modalText={modalText}
        closeModal={closeModal}
      />,
      domNode,
    );
  }

  // return ReactDOM.createPortal(
  //   <Template
  //     deleteHandler={deleteHandler}
  //     modalText={modalText}
  //     closeModal={closeModal}
  //   />,
  //   domNode,
  // );
};

export default Modal;
