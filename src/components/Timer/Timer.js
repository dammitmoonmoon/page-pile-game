import * as React from 'react';
import {fontFamily} from "../../fonts/fontFamily";
import styled from 'styled-components';
import {GameStatusContext} from "../GameStatusProvider";

const Timer = (props) => {
    const {isGameOver, setGameOver} = React.useContext(GameStatusContext);

    if (props.minutes === 0 && props.seconds === 0) {
        setGameOver(true);
    }

    React.useEffect(() => {
        if (isGameOver) {
            props.api.pause();
            console.log(props.api);
        }

    }, [isGameOver]);

    return (
        <Time>
            {props.minutes}:{props.seconds}
        </Time>
    );
};

const Time = styled.div`
  ${fontFamily('RobotoLight')};
  font-size: 24px;
  font-weight: 300;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: -0.6px;
`;

export {
    Timer, Time
};

