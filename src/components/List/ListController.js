import {ReactComponent as PageContent} from "../../svg/type1.svg";
import {SignatureElement} from "../Signature/Signature";
import * as React from "react";

const ListController = () => {
    const numberOfSignatures = getNumberOfSignaturesPerList();
    const needSignature = !!numberOfSignatures;

    const [isModalOpen, setModalState] = React.useState(true);

    return (
        <Wrapper className={className}>
            <Content>
                <PageContent/>
                {needSignature && <SignatureElement/>}
            </Content>
        </Wrapper>
    );
};

function getNumberOfSignaturesPerList() {
    const random = getRandomInteger(1, 6);
    if (random == 1) {
        return 0;
    }
    if (random % 3 == 0) {
        return 2;
    }
    return 1;
}

function getRandomInteger(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1)
    rand = Math.round(rand);
    return rand;
}