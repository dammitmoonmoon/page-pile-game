import * as React from 'react';
import styled from 'styled-components';
import {ListTypeC} from "./OneSignatureListB";
import Draggable from 'react-draggable';
import {ListTypeA} from "./OneSignatureListA";
import {ListTypeB} from "./NoSignatureList";
import {getMaximumScore, getPages, getSignaturePerPageArray} from "./generatePageTypes";
import {GameStatusContext} from "../GameStatusProvider/GameStatusProvider";

const PILE_SIZE = 20;

const PaperPile = () => {
    const signaturePerPageArray = getSignaturePerPageArray(PILE_SIZE);
    const pages = getPages(signaturePerPageArray);
    const maximumScore = getMaximumScore(signaturePerPageArray);

    const [pageList, setPageList] = React.useState(pages);
    const {setPageCount} = React.useContext(GameStatusContext);


    let prevX = 0;
    let prevY = 0;

    const onStartLogger = (e, data) => {
        prevX = data.lastX;
        prevX = data.lastY;
    };

    const onStopLogger = (e, data) => {
        const deltaX = Math.abs(data.lastX - prevX);
        const deltaY = Math.abs(data.lastY - prevY);
        if (deltaX > (343 * 0.5) || deltaY > (437 * 0.25))  {
            const tempList = [...pageList];
            tempList.shift();
            setPageList([...tempList]);
            setPageCount(tempList.length);
        }
    };

    return (
        <Wrapper>
            <Bottom>{pageList[2]}</Bottom>
            <Middle>{pageList[1]}</Middle>

            <Draggable
                onStart={(e, data) => onStartLogger(e, data)}
                onStop={(e, data) => onStopLogger(e, data)}
                position={{x: 0, y: 0}}
            >
                {
                    pageList.length > 0 ?
                    <Top>{pageList[0]}</Top>
                        :
                    <></>
                }
            </Draggable>
        </Wrapper>
    );
};

const All = styled.div`
  position: absolute;
  width: 343px;
  height: 437px;
  box-shadow: 0 4px 4px 0 rgba(142, 142, 142, 0.08);
`;

const Wrapper = styled.div`
  position: relative;
  width: 343px;
  margin: auto;
`;

const Bottom = styled(All)`
    top: 40px;
    transform: scale(0.9);

`;
const Middle = styled(All)`
    top: 20px;
    transform: scale(0.95);
`;
const Top = styled(All)`
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.08);
`;


export {
    PaperPile,
    PILE_SIZE,
};


