import * as React from "react";
import {modalStyles} from "./modalStyles";
import ResponsiveModal from 'react-responsive-modal';
import {createGlobalStyle} from "styled-components";

const ResponsiveModalGlobalStyle = createGlobalStyle`
    .responsive-modal-overlay {
        -webkit-overflow-scrolling: touch;
    }
`;

const CustomizedModal = (props) => {
    return (
        <div>
            <ResponsiveModalGlobalStyle />
            <ResponsiveModal
                open={props.isModalOpen}
                onClose={() => props.setModalState(false)}
                showCloseIcon={false}
                styles={modalStyles}
                closeOnOverlayClick = {true}
                classNames={{ overlay: 'responsive-modal-overlay' }}
            >
                {props.children}
            </ResponsiveModal>
        </div>
    );
};

export {
    CustomizedModal
};