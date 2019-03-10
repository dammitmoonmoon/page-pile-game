import * as React from 'react';
import styled from 'styled-components';
import {ReactComponent as PageContent} from "./../../svg/type2.svg";

const NoSignatureList = ({ className }) => {
    return (
        <Wrapper className={className}>
            <Content>
                <PageContent/>
            </Content>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    box-sizing: border-box;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    
    width: 100%;
    height: 100%;
    border-radius: 10px;
    background-color: #ffffff;
`;

const Content = styled.div`
     width: 295px;
     height: 279px;
     margin-bottom: 49px;
;`


export {
    NoSignatureList
};