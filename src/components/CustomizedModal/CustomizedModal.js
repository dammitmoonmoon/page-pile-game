import Modal from 'react-modal';
import * as React from "react";
import {modalStyles} from "./modalStyles";

const CustomizedModal = (props) => {
    return (
        <div>
            <Modal
                isOpen={props.isModalOpen}
                onRequestClose={() => props.setModalState(false)}
                style={modalStyles}
                shouldCloseOnOverlayClick={false}
                ariaHideApp={false}
            >
                {props.children}
            </Modal>
        </div>
    );
};

export {
    CustomizedModal
};