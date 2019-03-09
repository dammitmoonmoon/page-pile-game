import * as React from "react";
import styled from "styled-components";
import {ReactComponent as SignatureBlank} from "../../svg/signature_blank.svg";
import {ReactComponent as Signature} from "../../svg/signature.svg";


const SignatureElement = () => {
    const [isSigned, setSigned] = React.useState(false);
    return (
        <SignatureWrapper>
            <Text>
                Подпись
            </Text>
            <Blank>
                <SignaturePlaceholder onClick={() => setSigned(true)}/>
                {isSigned && <SignaturePositioned/>}
            </Blank>
        </SignatureWrapper>
    );
}

const SignatureWrapper =  styled.div`
`;

const Text =  styled.div`
  font-size: 14px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: -0.3px;
  color: #4f4f4f;
`;

const Blank =  styled.div`
  position: relative;
`;

const SignaturePositioned = styled(Signature)`
    position: absolute;
    top: -8px;
    left: 20px;
`;

const SignaturePlaceholder = styled(SignatureBlank)`
    cursor: pointer;
`;

export {
    SignatureElement
};