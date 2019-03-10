import * as React from 'react';
import styled from 'styled-components';
import {fontFamily} from "../fonts/fontFamily";

const task = 'Бухгалтер забыл отнести вовремя вам на подпись договора, у вас есть полминуты перед отпуском, подпишите все бумаги';
const btnText = 'Где моя ручка';

const Intro = (props) => {
    return (
        <Wrapper>
            <Task>{task}</Task>
            <Button onClick={props.onCloseClick}>{btnText}</Button>
        </Wrapper>
    );
};

const Wrapper = styled.div`;
  width: 92vw;
  margin: auto;
  max-width: 568px;

  padding: 40px 32px;
  border-radius: 10px;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.08);
  background-color: #ffffff;
 `;

const Task = styled.div`
  ${fontFamily('RalewayMedium')};
  font-size: 16px;
  margin-bottom: 32px;
  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: -0.4px;
  color: #4f4f4f;
`;

const Button = styled.button`
  ${fontFamily('RalewayBold')};
  font-size: 16px;
  cursor: pointer;
  border-radius: 8px;
  border: none;
  width: 100%;
  padding: 18px 0;
  background-color: #4f4f4f;
  font-size: 16px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #ffffff;
`;

export {
    Intro
};