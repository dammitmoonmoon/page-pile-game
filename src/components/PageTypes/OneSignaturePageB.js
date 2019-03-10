import * as React from 'react';
import styled from 'styled-components';
import {SignatureElement} from "../Signature/Signature";
import {ReactComponent as PageContentBottom} from "../../svg/type3_lower.svg";
import {ReactComponent as PageContentTop} from "../../svg/type3_upper.svg";
import {PageWrapper} from "./pageCommonStyles";

const OneSignaturePageB = ({ className }) => {
    return (
        <PageWrapper className={className}>
            <ContentTop>
                <PageContentTop/>
            </ContentTop>
            <SignatureElement/>
            <ContentBottom>
                <PageContentBottom/>
            </ContentBottom>
        </PageWrapper>
    );
};

const ContentTop = styled.div`
     width: 286px;
     margin-bottom: 20px;
;`

const ContentBottom = styled.div`
     width: 286px;
     margin-top: 25px;
;`


export {
    OneSignaturePageB
};