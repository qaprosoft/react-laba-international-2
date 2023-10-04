import {ReactNode} from 'react';

import styles from './Modal.module.css';

type ModalProps = {
  isOpen: boolean;
  title?: string;
  children: ReactNode;
};

const Modal = ({isOpen, title = '', children}: ModalProps) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <h2 className={styles.title}>{title}</h2>
        {children}
      </div>
    </div>
  );
};

export default Modal;
