import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import styles from './styles.module.scss';

type ModalProps = {
    children: React.ReactNode,
    setIsVisible: (visible: boolean) => void
}

const Modal = ({ children, setIsVisible }: ModalProps) => (
    <div className={styles.modal}>
        <div className={styles.modalHeader}>
            <AiOutlineClose onClick={() => setIsVisible(false)} />
        </div>
        <div>{children}</div>
    </div>
);

export default Modal;
