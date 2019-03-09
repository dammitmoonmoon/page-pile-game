import * as React from 'react';
import styled from 'styled-components';

const task = 'Бухгалтер забыл отнести вовремя вам на подпись договора, у вас есть полминуты перед отпуском, подпишите все бумаги';
const btnText = 'Где моя ручка';

const Rule = (props) => {
    return (
        <Wrapper>
            <Task>{task}</Task>
            <Button onClick={props.onCloseClick}>{btnText}</Button>
        </Wrapper>
    );
};

const Wrapper = styled.div`
  padding: 40px 32px;
  border-radius: 10px;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.08);
  background-color: #ffffff;
  width: 343px;
  margin: auto;
 `;

const Task = styled.div`
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
    Rule
};