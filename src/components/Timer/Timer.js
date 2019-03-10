import * as React from 'react';
import {fontFamily} from "../../fonts/fontFamily";
import styled from 'styled-components';

const Timer = (props) => {
    React.useEffect(() => {
        if (props.shouldStartTimer) {
            props.api.start();
        }
        else {
            props.api.pause();
        }
    }, [props.shouldStartTimer]);

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

