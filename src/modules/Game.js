import * as React from 'react';
import styled from 'styled-components';
import {Rule} from "../components/Rule";
import {Timer} from "../components/Timer/Timer";
import {CustomizedModal} from "../components/CustomizedModal/CustomizedModal";
import {PaperPile} from "../components/PaperPile/PaperPile";
import {GameStatusContext} from "../Main";
import {PageCounter} from "../components/PageCounter/PageCounter";
import Countdown from "react-countdown-now";

const Game = () => {
    const [isModalOpen, setModalState] = React.useState(true);
    const [contextData] = React.useContext(GameStatusContext);
    const { isGameOver, setGameOver } = contextData;
    const dateNow = Date.now();
    return (
        <div>
            <Wrapper>
                <Timer shouldStartTimer = {!isModalOpen}/>
                <PageCounter/>
                <PaperPile/>
                {isGameOver && <div>GAME OVER</div>}
                <Countdown date={dateNow + 10000} />,
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