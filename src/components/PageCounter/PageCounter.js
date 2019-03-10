import {GameStatusContext} from "../../Main";
import * as React from 'react';
import {PILE_SIZE} from "../PaperPile/PaperPile";

const PageCounter = () => {
    const [contextData] = React.useContext(GameStatusContext);
    return (
        <div>
            {contextData.pageCount}/{PILE_SIZE}
            {contextData.score}
        </div>

    );
};

export {
    PageCounter
};