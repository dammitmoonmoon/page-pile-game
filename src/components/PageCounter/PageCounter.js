import * as React from 'react';
import {PILE_SIZE} from "../PaperPile/PaperPile";
import {GameStatusContext} from "../GameStatusProvider/GameStatusProvider";

const PageCounter = () => {
    const {pageCount, score} = React.useContext(GameStatusContext);
    return (
        <div>
            {pageCount}/{PILE_SIZE}
            {score}
        </div>

    );
};

export {
    PageCounter
};