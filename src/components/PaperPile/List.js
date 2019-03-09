import * as React from 'react';
import styled from 'styled-components';
import {SignatureElement} from "../Signature/Signature";
import {ReactComponent as PageContent} from "../../svg/type1.svg";

const List = ({ className, needSignature }) => {
    return (
        <Wrapper className={className}>
            <Content>
                <PageContent/>
                {needSignature && <SignatureElement/>}
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
    
    width: 343px;
    height: 437px;
    border-radius: 10px;
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.08);
    background-color: #ffffff;
`;

const Content = styled.div`
     width: 295px;
     height: 279px;
     margin-bottom: 49px;
;`




export {
    List
};