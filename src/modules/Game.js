import * as React from 'react';
import styled from 'styled-components';
import {Intro} from "../components/Intro";
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
        <GameStatusProvider>
            <Wrapper>
                <Header>
                    <Countdown
                        date={dateNow + 30000}
                        renderer={props => <Timer {...props} shouldStartTimer={!isModalOpen}/>}/>
                    <PageCounter/>
                </Header>
                <PaperPile/>
            </Wrapper>
            <CustomizedModal
                setModalState={setModalState}
                isModalOpen={isModalOpen}
            >
                <Intro onCloseClick={() => setModalState(false)}/>
            </CustomizedModal>
        </GameStatusProvider>
    );
};

 const Wrapper = styled.div`
    width: 100%;
    max-width: 600px;
    margin: 0 auto;
 `;

const Header = styled.div`
  color: rgb(79, 79, 79);
  display: flex;
  justify-content: space-between;
  margin: 24px 16px;
`;

export {
    Game
};