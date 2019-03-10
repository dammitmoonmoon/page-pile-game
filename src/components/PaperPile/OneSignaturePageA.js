import * as React from 'react';
import styled from 'styled-components';
import {SignatureElement} from "../Signature/Signature";
import {ReactComponent as PageContent} from "./../../svg/type1.svg";
import {PageWrapper} from "./pageCommonStyles";

const OneSignaturePageA = ({ className }) => {
    return (
        <PageWrapper className={className}>
            <Content>
                <PageContent/>
            </Content>
                <SignatureElement />
        </PageWrapper>
    );
};

const Content = styled.div`
     width: 286px;
     margin-bottom: 48px;
;`


export {
    OneSignaturePageA
};