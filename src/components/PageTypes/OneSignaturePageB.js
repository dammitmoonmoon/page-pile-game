import * as React from 'react';
import styled from 'styled-components';
import {SignatureElement} from "../Signature/Signature";
import {ReactComponent as PageContentBottom} from "../../svg/type3_lower.svg";
import {ReactComponent as PageContentTop} from "../../svg/type3_upper.svg";
import {PageWrapper} from "./pageCommonStyles";

const OneSignaturePageB = ({ className, marginOption }) => {
    return (
        <PageWrapper className={className}>
            <ContentTop>
                <PageContentTop/>
            </ContentTop>
            <SignatureElement marginOption={marginOption}/>
            <ContentBottom>
                <PageContentBottom/>
            </ContentBottom>
        </PageWrapper>
    );
};

const ContentTop = styled.div`
     margin-bottom: 20px;
;`

const ContentBottom = styled.div`
     margin-top: 25px;
;`


export {
    OneSignaturePageB
};