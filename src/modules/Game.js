import * as React from 'react';
import styled from 'styled-components';
import {Intro} from "../components/Intro";
import {Time, Timer} from "../components/Timer/Timer";
import {CustomizedModal} from "../components/CustomizedModal/CustomizedModal";
import {PaperPile} from "../components/PaperPile/PaperPile";
import {PageCounter} from "../components/PageCounter/PageCounter";
import Countdown from "react-countdown-now";
import {GameStatusProvider} from "../components/GameStatusProvider/GameStatusProvider";
import {GAME_DURATION_IN_SECONDS} from "../constants/constants";
import * as platform from 'platform';

const gameMinutes = Math.floor(GAME_DURATION_IN_SECONDS / 60);
const gameSeconds = GAME_DURATION_IN_SECONDS % 60;

const isIos = !!(platform.os && platform.os.family === 'iOS');

const Game = () => {
    const [isModalOpen, setModalState] = React.useState(true);

    React.useEffect(() => {
        if (isIos) {
            window.document.body.addEventListener('touchmove', (e) => e.preventDefault(), {
                passive: false
            });
        }
        return function cleanup() {
            if (isIos) {
                window.document.body.removeEventListener('touchmove', (e) => e.preventDefault(), {
                    passive: false
                });
            }
        };
    }, []);

    return (
        <GameStatusProvider>
            <Wrapper>
                <Header>
                    {
                        isModalOpen &&  <Time>{gameMinutes}:{gameSeconds}</Time>
                    }
                    {
                        !isModalOpen &&
                        <Countdown
                            date={Date.now() + GAME_DURATION_IN_SECONDS*1000}
                            renderer={props => <Timer {...props} shouldStartTimer={!isModalOpen}/>}
                        />
                    }
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