import * as React from 'react';
import styled from 'styled-components';
import {SignatureElement} from "../Signature/Signature";
import {ReactComponent as PageContentBottom} from "./../../svg/type3_lower.svg";
import {ReactComponent as PageContentTop} from "./../../svg/type3_upper.svg";

const OneSignatureListB = ({ className }) => {
    return (
        <Wrapper className={className}>
            <Content>
                <PageContentTop/>
                <SignatureElement/>
                <PageContentBottom/>
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
    OneSignatureListB
};