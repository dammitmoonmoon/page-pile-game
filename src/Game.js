import * as React from 'react';
import styled from 'styled-components';
import {Rule} from "./components/Rule";
import {Timer} from "./components/Timer/Timer";
import {CustomizedModal} from "./components/CustomizedModal/CustomizedModal";
import {PaperPile} from "./components/PaperPile/PaperPile";

const Game = () => {
    const [isModalOpen, setModalState] = React.useState(true);
    const [isGameOver, setGameOver] = React.useState(false);
    return (
        <div>
            <Wrapper>
                <Timer shouldStartTimer = {!isModalOpen} setGameOver={setGameOver}/>
                <PaperPile/>
                {isGameOver && <div>GAME OVER</div>}
            </Wrapper>
            <CustomizedModal
                setModalState={setModalState}
                isModalOpen={isModalOpen}
            >
                <Rule onCloseClick={() => setModalState(false)}/>
            </CustomizedModal>
        </div>

    );
};

 const Wrapper = styled.div`
    height: 100vh;
    width: 100vw;
    background-color: grey;
 `;

export {
    Game
};