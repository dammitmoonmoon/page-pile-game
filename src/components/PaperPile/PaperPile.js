import * as React from 'react';
import styled from 'styled-components';
import Draggable from 'react-draggable';
import {getMaximumScore, getPages, getSignaturePerPageArray} from "./generatePageTypes";
import {GameStatusContext} from "../GameStatusProvider/GameStatusProvider";
import {PILE_SIZE} from "../../constants/constants";
import {fontFamily} from "../../fonts/fontFamily";
import {Fragment} from "react";

const PaperPile = () => {

    const [signaturePerPageArray] = React.useState(getSignaturePerPageArray(PILE_SIZE));

    const pages = getPages(signaturePerPageArray);
    const maxScore = getMaximumScore(signaturePerPageArray);
    const {score} = React.useContext(GameStatusContext);

    const [pageList, setPageList] = React.useState(pages);
    const {setPageCount} = React.useContext(GameStatusContext);

    const {isGameOver, setGameOver} = React.useContext(GameStatusContext);

    if (pageList.length === 0) {
        setGameOver(true);
    }

    let prevX = 0;
    let prevY = 0;

    const onStartLogger = (e, data) => {
        prevX = data.lastX;
        prevX = data.lastY;
    };

    const onStopLogger = (e, data) => {
        const deltaX = Math.abs(data.lastX - prevX);
        const deltaY = Math.abs(data.lastY - prevY);
        //if the page is significantly shifted, delete it (remove it from the array and rerender)
        if (deltaX > 100 || deltaY > 50)  {
            const tempList = [...pageList];
            tempList.shift();
            setPageList([...tempList]);
            setPageCount(tempList.length);
        }
    };

    return (
        <Wrapper>
            {
            !isGameOver &&
                <Fragment>
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
                </Fragment>
            }
            {
                isGameOver &&
                <Positioner>
                    <Content>Вы успели поставить <br/><Span>{maxScore === 0 ? '100%' : (score/maxScore * 100).toFixed(1)}%</Span> подписей</Content>
                </Positioner>
            }
        </Wrapper>
    );
};

const Positioner = styled.div`
  padding: 40px 32px;
  border-radius: 10px;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.08);
  background-color: #ffffff;
`;

const Content = styled.div`
  ${fontFamily('RalewayBold')};
  font-size: 16px;
  line-height: 1.7;
`;

const Span = styled.span`
  ${fontFamily('RalewayMedium')};
  font-size: 16px;
  margin-bottom: 32px;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: -0.4px;
  color: #4f4f4f;
`;

const Wrapper = styled.div`
  position: relative;
  width: calc(100% - 32px);
  max-width: 343px;
  margin: auto;
`;

const Pages = styled.div`
  width: 100%;
  height: 437px;
  border-radius: 10px;
  position: absolute;
`;

const Bottom = styled(Pages)`
    top: 40px;
    transform: scale(0.9);

`;
const Middle = styled(Pages)`
    top: 20px;
    transform: scale(0.95);
`;
const Top = styled(Pages)`
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.08);
`;

export {
    PaperPile,
    PILE_SIZE,
};


