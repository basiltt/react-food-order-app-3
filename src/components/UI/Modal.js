import React, {Fragment} from 'react';
import styles from './Modal.module.css'
import {createPortal} from "react-dom";

const Backdrop = props => {
    return (
        <div className={styles.backdrop} onClick={props.onClick}/>
    )
};

const ModalOverlay = props => {
    return (
        <div className={styles.modal}>
            <div className={styles.content}>{props.children}</div>
        </div>
    )
};

const portalElement = document.getElementById('overlays');

function Modal(props) {
    return (
        <Fragment>
            {createPortal(<Backdrop onClick={props.onHideCart}/>, portalElement)}
            {createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
        </Fragment>
    );
}

export default Modal;