import * as React from 'react';
import {PILE_SIZE} from "../PaperPile/PaperPile";

const GameStatusContext = React.createContext([0, () => {}]);

const GameStatusProvider = (props) => {

    const [pageCount, setPageCount] = React.useState(PILE_SIZE);
    const [score, setScore] = React.useState(0);
    const [isGameOver, setGameOver] = React.useState(false);

    return (
        <GameStatusContext.Provider
            value={{
                pageCount,
                setPageCount,
                score,
                setScore,
                isGameOver,
                setGameOver,
            }}
        >
            {props.children}
        </GameStatusContext.Provider>
    )
}


export {
    GameStatusProvider,
    GameStatusContext,
};
