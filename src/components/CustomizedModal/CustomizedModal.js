import Modal from 'react-modal';
import * as React from "react";
import {modalStyles} from "./modalStyles";

const preventIOSScroll = (e) => {
    e.preventDefault();
}

const CustomizedModal = (props) => {
    return (
        <div>
            <Modal
                isOpen={props.isModalOpen}
                style={modalStyles}
                shouldCloseOnOverlayClick={false}
                ariaHideApp={false}
                onAfterOpen={() => {
                    document.documentElement.style.overflowY = 'hidden';
                    document.documentElement.addEventListener('touchmove', preventIOSScroll);
                }}
                onRequestClose={() => {
                    document.documentElement.style.overflowY = 'visible';
                    document.documentElement.removeEventListener('touchmove', preventIOSScroll);
                    props.setModalState(false)}
                }
            >
                {props.children}
            </Modal>
        </div>
    );
};

export {
    CustomizedModal
};