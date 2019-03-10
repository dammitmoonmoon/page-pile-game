import * as React from 'react';
import styled from 'styled-components';
import {ReactComponent as PageContent} from "./../../svg/type2.svg";
import {PageWrapper} from "./pageCommonStyles";

const NoSignaturePage = ({ className }) => {
    return (
        <PageWrapper className={className}>
            <Content>
                <PageContent/>
            </Content>
        </PageWrapper>
    );
};


const Content = styled.div`
     width: 286px;
;`


export {
    NoSignaturePage
};