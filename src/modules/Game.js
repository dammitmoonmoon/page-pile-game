import * as React from 'react';
import styled from 'styled-components';
import {Rule} from "../components/Rule";
import {Timer} from "../components/Timer/Timer";
import {CustomizedModal} from "../components/CustomizedModal/CustomizedModal";
import {PaperPile, PILE_SIZE} from "../components/PaperPile/PaperPile";
import {PageCounter} from "../components/PageCounter/PageCounter";
import Countdown from "react-countdown-now";
import {GameStatusProvider} from "../components/GameStatusProvider/GameStatusProvider";

const Game = () => {
    const [isModalOpen, setModalState] = React.useState(true);
    const dateNow = Date.now();
    console.log('rerender');

    return (
        <div>
            <GameStatusProvider>
                <Wrapper>
                    <Countdown
                        date={dateNow + 30000}
                        renderer={props => <Timer {...props} shouldStartTimer={!isModalOpen}>{props.seconds}</Timer>}/>
                    <PageCounter/>
                    <PaperPile/>
                </Wrapper>
                <CustomizedModal
                    setModalState={setModalState}
                    isModalOpen={isModalOpen}
                >
                    <Rule onCloseClick={() => setModalState(false)}/>
                </CustomizedModal>
            </GameStatusProvider>
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