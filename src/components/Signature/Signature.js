import * as React from "react";
import styled from "styled-components";
import {ReactComponent as SignatureBlank} from "../../svg/signature_blank.svg";
import {ReactComponent as Signature} from "../../svg/signature.svg";
import {GameStatusContext} from "../GameStatusProvider/GameStatusProvider";
import {fontFamily} from "../../fonts/fontFamily";

const SignatureElement = () => {
    const [isSigned, setSigned] = React.useState(false);
    const {setScore} = React.useContext(GameStatusContext);
    const onButtonClick = (e) => {
        e.preventDefault();
        setSigned(true);
        setScore(prevScore => prevScore + 1);
    }
    return (
        <SignatureWrapper>
            <Text>
                Подпись
            </Text>
            <Blank onClick={onButtonClick} disabled={isSigned}>
                <SignaturePlaceholder/>
                {isSigned && <SignaturePositioned/>}
            </Blank>
        </SignatureWrapper>
    );
}

const SignatureWrapper =  styled.div`
  width: 96px;
`;

const Text =  styled.div`
  margin-bottom: 8px;
  ${fontFamily('RalewayMedium')};
  font-size: 14px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: -0.3px;
  color: rgb(79, 79, 79);
`;

const Blank =  styled.button`
  position: relative;
  background: none;
  border: none;
  padding: 0;
`;

const SignaturePositioned = styled(Signature)`
    position: absolute;
    top: -8px;
    left: 20px;
`;

const SignaturePlaceholder = styled(SignatureBlank)``;

export {
    SignatureElement
};