import * as React from 'react';
import styled from 'styled-components';
import {Rule} from "./Rule";

import Modal from 'react-modal';
import {modalStyles} from "./modalStyles";

const PaperPile = () => {
    const [isModalOpen, setModalState] = React.useState(true);
    return (
        <div>
            <Wrapper>

            </Wrapper>
            <Modal
                isOpen={isModalOpen}
                onRequestClose={() => setModalState(false)}
                style={modalStyles}
                shouldCloseOnOverlayClick={false}
            >
                <Rule onCloseClick={() => setModalState(false)}/>
            </Modal>
        </div>

    );
};

 const Wrapper = styled.div`
    height: 100vw;
    width: 100wh;
    background-color: grey;
 `;

export {
    PaperPile
};