import * as React from 'react';
import {PILE_SIZE} from "../PaperPile/PaperPile";
import {GameStatusContext} from "../GameStatusProvider/GameStatusProvider";
import styled from 'styled-components';
import {fontFamily} from "../../fonts/fontFamily";

const PageCounter = () => {
    const {pageCount, score} = React.useContext(GameStatusContext);
    return (
        <div>
            <LargeText>{pageCount}</LargeText><Dash>/</Dash><SmallText>{PILE_SIZE}</SmallText>
        </div>

    );
};

const LargeText = styled.span`
     ${fontFamily('RobotoMedium')};
     font-size: 24px;
`;

const Dash = styled.span`
     ${fontFamily('RobotoLight')};
     font-size: 24px;
`;


const SmallText = styled.span`
     ${fontFamily('RobotoLight')};
     font-size: 16px;
`;

export {
    PageCounter
};